# Naukri Job Alert Bot

This project is a Node.js script that automatically monitors a Naukri.com job search URL for new postings and sends alerts to a specified Telegram channel.

## Features

*   **Web Scraping:** Fetches job search results from Naukri.com using Puppeteer.
*   **State Management:** Uses a PostgreSQL database to keep track of jobs that have already been seen, preventing duplicate notifications.
*   **Telegram Notifications:** Uses a Telegram bot to send formatted messages for new job listings to a specific chat.
*   **Automated & Scheduled:** Deployed with GitHub Actions to run automatically on a schedule.

## Technologies Used

*   **Runtime:** Node.js
*   **Language:** JavaScript (ES Modules)
*   **Libraries:**
    *   `puppeteer`: For web scraping.
    *   `pg`: For interacting with the PostgreSQL database.
    *   `axios`: For making HTTP requests to the Telegram API.
    *   `dotenv`: For managing environment variables.
    *   `winston`: for logging

## Local Development

### Prerequisites

*   Node.js (v18 or later)
*   A running PostgreSQL database

### 1. Installation

Clone the repository and install the required Node.js dependencies:

```bash
git clone <repository-url>
cd <repository-name>
npm install
```

### 2. Configuration

Create a `.env` file in the root of the project with the following content:

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

To run the bot manually, execute the main script:

```bash
node index.js
```

## Deployment

This project is configured to be deployed for free using a combination of **GitHub Actions** for scheduled execution and a free-tier PostgreSQL provider for the database.

### 1. Database Setup

*   Sign up for a free PostgreSQL provider such as [Supabase](https://supabase.com/) or [Render](https://render.com/).
*   Create a new PostgreSQL database and get the connection credentials (host, port, name, user, and password).

### 2. GitHub Secrets

*   In your GitHub repository, go to **Settings** > **Secrets and variables** > **Actions**.
*   Add the following repository secrets with the values from your `.env` file and your new database:
    *   `TELEGRAM_BOT_TOKEN`
    *   `TELEGRAM_CHAT_ID`
    *   `SEARCH_URL`
    *   `DB_HOST`
    *   `DB_PORT`
    *   `DB_USER`
    *   `DB_PASSWORD`
    *   `DB_NAME`

Once the secrets are configured, the workflow in `.github/workflows/main.yml` will run automatically every hour.

## License

This project is licensed under the MIT License.
