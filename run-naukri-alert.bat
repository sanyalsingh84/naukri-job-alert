@echo off
REM Change to the directory where this batch file is located
cd /d "%~dp0"

REM Check if Node.js is installed and in PATH
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js is not found in your system's PATH.
    echo Please install Node.js or add it to your PATH environment variable.
    pause
    exit /b 1
)

REM Run the Node.js application
node index.js

REM Pause to keep the window open if the script finishes quickly or errors
pause