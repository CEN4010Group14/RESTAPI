var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//import 'module-alias/register';
import * as fs from "fs";
import * as path from "path";
// eslint-disable-next-line @typescript-eslint/no-var-requires
//const parse = require("csv-parse").parse
import {parse} from "csv-parse"
// var selenium_webdriver_1 = require("selenium-webdriver");
// eslint-disable-next-line @typescript-eslint/no-var-requires
import {createObjectCsvWriter} from "csv-writer"
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const CastingContext = require("@modules/csv-parse").CastingContext
// eslint-disable-next-line @typescript-eslint/no-var-requires
import {Builder, Browser, By, until, WebDriver} from "selenium-webdriver";

// const Builder = require('selenium-webdriver').Builder;
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const Browser = require('selenium-webdriver').Browser;
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const By = require('selenium-webdriver').By;
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const Key = require('selenium-webdriver').Key
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const until = require('selenium-webdriver').until;
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const WebDriver = require('selenium-webdriver').WebDriver;
// import { parse } from 'csv-parse';
//import {Builder, Browser, By, Key, until, WebDriver} from 'selenium-webdriver';
//import {CastingContext} from "@modules/csv-parse";
//import {createObjectCsvWriter} from 'csv-writer';
// import * as pressAnyKey  from "press-any-key"
// eslint-disable-next-line @typescript-eslint/no-var-requires
//const pressAnyKey = require('press-any-key');
// import { ObjectMap } from "csv-writer/src/lib/lang/object";
const csvWriter = createObjectCsvWriter({
    path: 'outAuthor.csv',
    header: [
        { id: 'ISBN', title: 'ISBN' },
        { id: 'biography', title: 'biography' },
    ]
});
function sleep(m) {
    return new Promise(resolve => setTimeout(resolve, m));
}
const keypress = () => __awaiter(void 0, void 0, void 0, function* () {
    process.stdin.setRawMode(true);
    return new Promise(resolve => {
        process.stdin.once('data', () => {
            process.stdin.setRawMode(false);
            resolve();
        });
    });
});
(function scrapeBio() {
    return __awaiter(this, void 0, void 0, function* () {
        const csvFilePath = './books.csv';
        const headers = ['ISBN', 'name', 'URL', 'price', 'Author', 'genre', 'pub', 'year', 'copies', 'description'];
        const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });
        // @ts-ignore
        let driver;
        // const isbns: string[] = []
        // const authors:string[] = []
        const books = [];
        parse(fileContent, {
            delimiter: ',',
            columns: headers,
            fromLine: 2,
            on_record: (line) => {
                books.push(line);
                // authors.push(line.Author)
                return;
            },
        }, (error, result) => __awaiter(this, void 0, void 0, function* () {
            if (error) {
                console.error(error);
            }
            console.log("Result", result);
            //         const uMaps:urlMap[] = [];
            //const ibMap:bioMap[] = [];
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const bioMap = [];
            driver = yield new Builder().forBrowser(Browser.FIREFOX).build();
            yield driver.manage().setTimeouts({ pageLoad: 96000 });
            yield driver.get("https://www.amazon.com/");
            console.log("press a key");
            yield keypress();
            for (const book of books) {
                let st = "";
                try {
                    yield sleep(1500);
                    const authors = book.Author.split(",");
                    const search = yield driver.wait(until.elementLocated(By.id("twotabsearchtextbox")), 5000);
                    yield search.clear()
                    yield search.sendKeys("ISBN " + book.ISBN + '\n');
                    const submit = yield driver.wait(until.elementLocated(By.id("nav-search-submit-button")));
                    yield submit.click();
                    // const span = await driver.wait(until.elementLocated(By.id("contributorLink")), 4000)
                    // await span.click()
                    yield sleep(2000)
//                    yield driver.wait(until.elementLocated(By.xpath(`//*[text()='${book.name.trim()}']`)), 8000);
                    for (const author of authors) {
                        let i
                        const aa = yield driver.wait(until.elementsLocated(By.xpath(`//*[contains(text(),'${author.trim()}')]`)), 7000);
                        const ml = Math.min(aa.length, 2)
                        for (i = 0; i < ml; i++) {
                            const a = yield aa[i]
                            yield a.click();
                            try {
                                try {
                                    yield driver.wait(until.elementLocated(By.xpath("//*[text()='Read full bio']")), 5000).click();
                                }
                                catch (e) {
                                    yield sleep(1000)
                                    const na = yield driver.wait(until.elementLocated(By.xpath(`//a[.//span[text()='${author.trim()}']]`)), 7000);
                                    yield na.click()
                                    yield sleep(1000)
                                    yield driver.wait(until.elementLocated(By.xpath("//*[text()='Read full bio']")), 5000).click();
                                }
                                const div = yield driver.wait(until.elementLocated(By.className("AuthorBio__author-bio__author-biography__WeqwH")), 7000);
                                // const ps = yield div.findElements(By.css("p"))
                                const text = yield div.getText()
                                // for (const p of ps) {
                                //     const text = yield p.getText();
                                st = st.concat(text);
                                // }
                                yield driver.navigate().back();
                                yield driver.navigate().back();
                                break;
                            }
                            catch (e) {
                                continue;
                            }
                        }
                    }
                    bioMap.push({ ISBN: book.ISBN, biography: st });
                }
                catch (e) {
                    bioMap.push({ ISBN: book.ISBN, biography: st });
                }
            }
            try {
                yield driver.close();
            }
            catch (e) {
                console.log(`driver.close failed: ${e}`);
            }
            csvWriter
                .writeRecords(bioMap)
                .then(() => {
                console.log('The CSV file was written successfully');
                process.exit(0);
            });
            //        console.log("uMaps", uMaps)
        }));
    });
})();
