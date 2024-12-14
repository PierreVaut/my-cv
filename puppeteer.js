const puppeteer = require('puppeteer-core')
// You must have a valid Chromium install in the executablePath below
// If not, install it or use puppeteer instead of puppeeter-core

const executablePath = '/snap/bin/chromium'
const urlLocal = 'http://localhost:3000/#/pierre-vautherin-cv-2025/'
const exportName = 'PVautherin'
const language = 'EN'

// prettier-ignore
const year = "2025";
// prettier-ignore

(async () => {
  const browser = await puppeteer.launch({ executablePath })
  const page = await browser.newPage()
  await page.goto(urlLocal, { waitUntil: 'networkidle2' })
  await page.pdf({
    path: `public/CV-web-${exportName}_${language}_${year}.pdf`,
    format: 'A4',
    printBackground: true
  })
  await browser.close()
})()
