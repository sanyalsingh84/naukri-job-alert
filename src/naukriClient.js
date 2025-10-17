import puppeteer from 'puppeteer';
import logger from './logger.js';

async function fetchJobs(searchUrl) {
  logger.info("Fetching jobs from:", searchUrl);
  let browser;
  try {
    browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36");

    await page.goto(searchUrl, { waitUntil: 'domcontentloaded' }); // Wait for DOM to be loaded

    // Wait for the job listings to appear on the page
    await page.waitForSelector('div.row1', { timeout: 10000 });

    // Add a short timeout to ensure all dynamic content has rendered
    await new Promise(resolve => setTimeout(resolve, 3000));

    const jobs = await page.evaluate(() => {
      const jobElements = document.querySelectorAll('div.row1');
      const extractedJobs = [];

      jobElements.forEach(element => {
        const titleElement = element.querySelector('h2 > a.title');
        if (titleElement) {
          const title = titleElement.innerText.trim();
          const url = titleElement.href;
          if (title && url) {
            extractedJobs.push({ title, url });
          }
        }
      });
      return extractedJobs;
    });
    
    logger.info(`Found ${jobs.length} jobs.`);
    return jobs;
  } catch (error) {
      logger.error("Failed to fetch or parse jobs with Puppeteer:", error.message);
      return [];
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

export { fetchJobs };