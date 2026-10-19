import importlib.util
import json
import pathlib
import subprocess
import unittest

SCRIPTS = pathlib.Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location("due_date", SCRIPTS / "project-due-date.py")
MODULE = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(MODULE)


class DeadlineParsingTests(unittest.TestCase):
    def test_explicit_date_over_filename_and_snapshot(self):
        body = "## Relevé 2026-10-19\nFichier visuel--2026-10-12.png\nÉchéance : 2026-11-09 (fin de pilotage)"
        self.assertEqual(MODULE.extract_due_date(body), "2026-11-09")

    def test_markdown_and_valid_leap_date(self):
        self.assertEqual(MODULE.extract_due_date("- **Échéance :** 2028-02-29"), "2028-02-29")

    def test_unrelated_dates_are_not_deadlines(self):
        for body in ["portrait--2026-10-12.jpeg", "Mise à jour : 2026-10-19", "Expiration : 2026-10-31", "## Échéance\nNon fixée", "> Échéance : 2026-11-09"]:
            with self.subTest(body=body):
                self.assertEqual(MODULE.extract_due_date(body), "")

    def test_examples_are_ignored(self):
        body = "````markdown\n```\nÉchéance : 2026-11-09\n````\n    Échéance : 2026-11-10\n~~~\nÉchéance : 2026-11-11\n~~~"
        self.assertEqual(MODULE.extract_due_date(body), "")

    def test_unset(self):
        self.assertEqual(MODULE.extract_due_date("**Échéance :** non fixée."), "")

    def test_invalid_and_conflicting_dates_fail(self):
        for body in ["Échéance : 2026-02-30", "Échéance : 2026-11-09x", "Échéance : 2026-11-09\nÉchéance : 2026-11-10", "Échéance : non fixée\nÉchéance : 2026-11-09"]:
            with self.subTest(body=body), self.assertRaises(ValueError):
                MODULE.extract_due_date(body)

    def test_identical_repeated_deadline(self):
        self.assertEqual(MODULE.extract_due_date("Échéance : 2026-11-09\nÉchéance : 2026-11-09"), "2026-11-09")


class DeadlineSyncTests(unittest.TestCase):
    def run_sync(self, body, current):
        script = '''source "$1"
current_date_value() { printf '%s' "$CURRENT_DATE"; }
set_date() { printf 'SET %s' "$5"; }
clear_date() { printf 'CLEAR'; }
sync_due_date project item '{}' "$ISSUE_JSON"
'''
        import os
        env = dict(os.environ, CURRENT_DATE=current, ISSUE_JSON=json.dumps({"body": body}))
        return subprocess.run(["bash", "-c", script, "test", str(SCRIPTS / "project-control.sh")], env=env, capture_output=True, text=True)

    def test_clear_false_deadline(self):
        result = self.run_sync("portrait--2026-10-12.jpeg", "2026-10-12")
        self.assertEqual((result.returncode, result.stdout), (0, "CLEAR"))

    def test_set_explicit_deadline(self):
        result = self.run_sync("Échéance : 2026-11-09", "2026-10-12")
        self.assertEqual((result.returncode, result.stdout), (0, "SET 2026-11-09"))

    def test_idempotence(self):
        for body, current in [("Échéance : 2026-11-09", "2026-11-09"), ("Aucune date", "")]:
            result = self.run_sync(body, current)
            self.assertEqual((result.returncode, result.stdout), (0, ""))

    def test_invalid_does_not_write(self):
        result = self.run_sync("Échéance : 2026-02-30", "2026-10-12")
        self.assertNotEqual(result.returncode, 0)
        self.assertEqual(result.stdout, "")


if __name__ == "__main__":
    unittest.main()
