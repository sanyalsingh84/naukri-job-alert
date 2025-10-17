# Project: Naukri Job Alert Bot

## Project Overview

This project is a Node.js script that automatically monitors a Naukri.com job search URL for new postings and sends alerts to a specified Telegram channel.

**Core Functionality:**

*   **Web Scraping:** It fetches the job search results page from Naukri.com.
*   **Job Parsing:** It extracts job titles and URLs from the raw HTML content using regular expressions.
*   **State Management:** It uses a PostgreSQL database to keep track of jobs that have already been seen, preventing duplicate notifications.
*   **Telegram Notifications:** It uses a Telegram bot to send formatted messages for new job listings to a specific chat.

**Key Technologies:**

*   **Runtime:** Node.js
*   **Libraries:**
    *   `axios`: For making HTTP requests to fetch the job page.
    *   `dotenv`: For managing environment variables.
    *   `pg`: For interacting with the PostgreSQL database.
*   **Language:** JavaScript (ES Modules)

## Building and Running

### 1. Installation

First, install the required Node.js dependencies:

```bash
npm install
```

### 2. Configuration

The script requires Telegram and PostgreSQL credentials. Create a `.env` file in the root of the project with the following content:

```
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
SEARCH_URL=your_naukri_search_url_here
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
```

Replace the placeholder values with your actual credentials.

### 3. Running the Script

To run the bot, execute the main script:

```bash
node index.js
```

The script will fetch jobs, compare them against the database, send notifications for any new jobs, and then exit. You can run this script periodically using a scheduler like `cron` (on Linux/macOS) or Task Scheduler (on Windows) to automate job checking.

## Development Conventions

*   **Code Style:** The project uses modern JavaScript with ES Modules (`import`/`export` syntax).
*   **Dependencies:** Project dependencies are managed via `npm` and defined in `package.json`.
*   **Error Handling:** The main execution is wrapped in a `.catch()` block to log any potential errors to the console.
*   **Testing:** There are currently no automated tests configured. The `test` script in `package.json` is a placeholder.
