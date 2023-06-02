import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse';
import {Builder, Browser, By, Key, until, WebDriver} from 'selenium-webdriver';
import {createObjectCsvWriter} from 'csv-writer';
const csvWriter = createObjectCsvWriter({
    path: 'out.csv',
    header: [
        {id: 'url', title: 'url'},
        {id: 'description', title: 'description'},
    ]
});
// import JSSoup from "jssoup";

type Book = {
    ISBN: string;
    name: string;
    URL: string;
    price: string;
    Author: string;
    genre: string;
    pub: string;
    year: number;
    copies: number;
}
type urlMap = {
    url: string;
    description: string;
}
function sleep(m: number) {
    return new Promise(resolve => setTimeout(resolve, m));
}

(async function scrapeDescription() {
    const csvFilePath = path.resolve(__dirname, './books.csv')
    const headers = ['ISBN', 'name', 'URL', 'price', 'Author', 'genre', 'pub', 'year', 'copies'];
    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });
    let driver: WebDriver;
    const urls:string[]  = []
    parse(fileContent, {
        delimiter: ',',
        columns: headers,
        fromLine: 2,
        on_record: (line, context) => {
            urls.push(line.URL)
            return
        },
    }, async (error, result: Book[]) => {
        if (error) {
            console.error(error);
        }
        console.log("Result", result);
        const uMaps:urlMap[] = [];
        driver = await new Builder().forBrowser(Browser.FIREFOX).build();
        await driver.manage().setTimeouts({pageLoad: 96000});
        for (const url of urls) {
            try {
                await driver.get(url)
                const pars = await driver.wait(until.elementLocated(By.xpath("//div[contains(@itemprop, 'description')]")), 5000)
                const p = await pars.findElement(By.css('p')).getText()
                uMaps.push({url, description: p})
            }
            catch (e) {
                uMaps.push({url, description: ""})
            }
        }
        await driver.close();
        csvWriter
            .writeRecords(uMaps)
            .then(()=> console.log('The CSV file was written successfully'));
//        console.log("uMaps", uMaps)
    })


})()