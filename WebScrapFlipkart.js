// node WebScrapFlipkart.js --source="https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results" --dest="scores.csv"

let minimist = require("minimist");
let axios = require("axios");
let jsdom = require("jsdom");
let excel4node = require("excel4node");
let pdf = require("pdf-lib");
let fs = require("fs");
let path = require("path");

let args = minimist(process.argv);

//download using axios
let 

