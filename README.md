# UI Test Automation Project

This project automates UI testing using **CodeceptJS** with:

- WebDriver
- BDD Feature files
- Page Object Model (POM)
- Allure for test reporting

---

## 🚀 Running Tests

You can run specific test groups with the following commands:

| Command                  | Description                                 |
| ------------------------ | ------------------------------------------- |
| `npm run testLiveStream` | Run tests for the Live Stream page          |
| `npm run testMostRead`   | Run tests for the Most Read section         |
| `npm run test:Mobile`    | Run tests emulating mobile view (TEST_MODE) |

### 🧪 Running in Headless Mode

To run any of the above tests without opening a browser window, prepend `HEADLESS=true`(as shown in test:headless):

---

## 📊 Viewing Allure Report

After running tests, generate and view the Allure report with:

```bash
allure serve output
```

> This will automatically launch a browser window displaying the test results.

---

## 🗂 Project Structure

```
project-root/
├── pages/                      # Page Object Model (POM) files
│   ├── homePage.js
│   ├── livePage.js
├── helpers/                    # Shared helpers
│   └── navigationHelper.js     # Reusable navigation logic
├── output/                     # Allure results (auto-generated)
├── steps.d.ts / steps_file.js # CodeceptJS step definitions
├── codecept.conf.js            # CodeceptJS config
├── package.json
├── README.md                   # You're here!
```

---

## ✨ Notes

- Each test run includes:
  - `--steps` for detailed logging
  - `--verbose` for extended logs
  - `--plugins allure` for result tracking
- Shared navigation logic is extracted into `helpers/navigationHelper.js` for reuse across multiple page objects.
- Feature tagging (`--grep`) is used to filter which tests are run.

---

## 📎 Dependencies

- [CodeceptJS](https://codecept.io/)
- WebDriver
- Allure Commandline (`allure serve`)
- cross-env (for handling environment-specific test modes)
