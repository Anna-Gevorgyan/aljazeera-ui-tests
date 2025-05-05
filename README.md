# UI Test Automation Project

This project automates UI testing using **CodeceptJS** with:

- WebDriver
- BDD Feature files
- Page Object Model (POM)
- Allure for test reporting

---

## 🚀 Running Tests

You can run specific test groups with the following commands from package.json:

| Command           | Description                                 |
|-------------------| ------------------------------------------- |
| `test։LiveStream` | Run tests for the Live Stream page          |
| `test։MostRead`   | Run tests for the Most Read section         |
| `test:Mobile`     | Run tests emulating mobile view (TEST_MODE) |

### 📱 Running Mobile Tests

To run mobile-specific tests, use:

```bash
test:Mobile
```
This command sets the environment variable TEST_MODE=mobile, which is then used in the CodeceptJS config file (codecept.conf.js) to apply mobile settings (like using mobile emulation).
### 🧪 Running in Headless Mode

To run any of the above tests without opening a browser window, prepend `HEADLESS=true`(as shown in test:headless)

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
├── features/                      
│   ├── liveStream.feature
│   ├── mobileTest.feature
│   ├── mostRead.feature
├── helpers/                    # Shared helpers
│   └── navigationHelper.js     # Reusable navigation logic
├── pages/                      # Page Object Model (POM) files
│   ├── homePage.js
│   ├── livePage.js
├── step_definitions/           # CodeceptJS step definitions          
│   ├── steps.js
├── output/                     # Allure results (auto-generated)
├── steps_file.js 
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
