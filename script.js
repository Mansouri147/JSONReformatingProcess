const finance = require("./finance.json");
const fs = require("fs");
const path = require("path");
const { Console } = require("console");

// let finance = [
//     { "date": "1959:01", "1": 138.89, "2": 139.39, "3": 139.74, "4": 139.69, "5": 140.68, "6": 141.17 },
//     { "date": "1959:07", "1": 141.7, "2": 141.9, "3": 141.01, "4": 140.47, "5": 140.38, "6": 139.95 },
//     { "date": "1960:01", "1": 139.98, "2": 139.87, "3": 139.75, "4": 139.56, "5": 139.61, "6": 139.58 },
//     { "date": "1960:07", "1": 140.18, "2": 141.31, "3": 141.18, "4": 140.92, "5": 140.86, "6": 140.69 },
//     { "date": "1961:01", "1": 141.06, "2": 141.6, "3": 141.87, "4": 142.13, "5": 142.66, "6": 142.88 },
//     { "date": "1961:07", "1": 142.92, "2": 143.49, "3": 143.78, "4": 144.14, "5": 144.76, "6": 145.2 },
//     { "date": "1962:01", "1": 145.24, "2": 145.66, "3": 145.96, "4": 146.4, "5": 146.84, "6": 146.58 },
//     { "date": "1962:07", "1": 146.46, "2": 146.57, "3": 146.3, "4": 146.71, "5": 147.29, "6": 147.82 },
//     { "date": "1963:01", "1": 148.26, "2": 148.9, "3": 149.17, "4": 149.7, "5": 150.39, "6": 150.43 },
//     { "date": "1963:07", "1": 151.34, "2": 151.78, "3": 151.98, "4": 152.55, "5": 153.65, "6": 153.29 },
//     { "date": "1964:01", "1": 153.74, "2": 154.31, "3": 154.48, "4": 154.77, "5": 155.33, "6": 155.62 },
//     { "date": "1964:07", "1": 156.8, "2": 157.82, "3": 158.75, "4": 159.24, "5": 159.96, "6": 160.3 },
//     { "date": "1965:01", "1": 160.71, "2": 160.94, "3": 161.47, "4": 162.03, "5": 161.7, "6": 162.19 },
//     { "date": "1965:07", "1": 163.05, "2": 163.68, "3": 164.85, "4": 165.97, "5": 166.71, "6": 167.85 }
// ]
// class Data {
//   constructor(year) {
//     for (let year in years)
//     class Fin {
//       constructor(year, month, vals) {
//         this.year = year;
//         this.year.month = month;
//         this.year.value = vals;
//       }
//     }
//   }
// }

// let month = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// let vals = [55256, 46848];

// let financeObj = { ...finance };

const finder = (regEx, array) => {
  let condition = new RegExp(regEx);
  let result = array.filter((item) => condition.test(item.date));
  return result;
};

let splitem = [];
for (let i = 0; i < finance.length; i++) {
  splitem.push(finance[i].date.split(":")[0]);
}

let firstHalfRegEx = /[0-9]{4}:01/g;
let secondHalfRegEx = /[0-9]{4}:07/g;

let firstHalf = finder(firstHalfRegEx, finance);
let secondHalf = finder(secondHalfRegEx, finance);

let a = {};

// for (let i = 0; i < firstHalf.length; i++) {
//     a = a.values()
// }

// for (let item of firstHalf.values()) {a += item}
// const getYear = yearParam => ({ year: yearParam.split(":")[0]})
// const getSemester = semesterParam => ({semester: semesterParam.split(":")[1] > 6 ? 2 : 1 });

// for (let [key, value] of secondHalf.entries()) console.log(`{${key} : ${value.date} }`)

let totalValues = {};

// for (let item of finder(secondHalfRegEx, finance).values()) {
//   totalValues = item;
// }

// console.log(totalValues.date)

let uniqueYears = Array.from(new Set(splitem));

// console.log(uniqueYears)

// let statistics = new Fin(uniqueYears, month, vals);

// console.log(statistics)

let object;
// for (let [key, value] of object.entries()) key = +[...month];

// console.log(object);

// console.log(plan.year[0].January)

// let plan = {
//   year: {
//     1956: {
//       January: "extreme",
//       February: value,
//       March: value,
//       April: value,
//       May: value,
//       June: value,
//       July: value,
//       August: value,
//       September: value,
//       October: value,
//       November: value,
//       December: value,
//     },
//     1956: {
//       January: value,
//       February: value,
//       March: value,
//       April: value,
//       May: value,
//       June: value,
//       July: value,
//       August: value,
//       September: value,
//       October: value,
//       November: value,
//       December: value,
//     },
//     1956: {
//       January: value,
//       February: value,
//       March: value,
//       April: value,
//       May: value,
//       June: value,
//       July: value,
//       August: value,
//       September: value,
//       October: value,
//       November: value,
//       December: value,
//     },
//     1956: {
//       January: value,
//       February: value,
//       March: value,
//       April: value,
//       May: value,
//       June: value,
//       July: value,
//       August: value,
//       September: value,
//       October: value,
//       November: value,
//       December: value,
//     },
//   },
// };

// let wholeYear = {};
// // for (let i = 0; i < firstHalf.length; i++) {
// for (let j = 0; j < secondHalf[0].length; j++) {
//   wholeYear.concat(secondHalf[0][j]);
// }
// }

// console.log(wholeYear);

// let January = {};
// for (let i = 1; i < 6; i++) {
//     January += firstHalf[0][i]
//     wholeYear.push(January)
// }

// for (let i = 1; i < 6; i++) {
//   for (let j = 1; j < 5; j++) console.log(firstHalf[i][j]);
// }
// console.log(firstHalf[0][);

// let ten;
// for (let i = 1; i < 6; i++) {
//   ten  new Object(firstHalf[0][i]);
// }

// console.log(ten)
// let firstObj = {};
// let secondObj = {};
// for (let obj of firstHalf) {
//   const year = obj["date"].split(":")[0];
//   firstObj = { ...obj };

// }
// let f = 0
// for (let obj of secondHalf) {
//   const year = obj["date"].split(":")[0];
//   secondObj[year] = { ...firstObj} +{...obj};
//   //   delete formated[year]["date"];
//   f + 1
// }
//______________________________________________________________
// const formated = {};
// let month = {};
// let i = 0
// let m = 1
// for (let obj of finance) {
//   const year = obj["date"].split(":")[0];
//   // month[m] = obj[`${m}`]
//   month = m
  
//   // month = {...month}
//   value = month[0]
//   console.log('this is the value >>>>>>>>>>' + value)
//   formated[i] = {year ,month}
//   // delete formated[year]["date"];
//   if (i % 2 !== 0){ m++}
//   i++
//   if (m > 2 ) {m = 1}
// }

// console.log(formated,"<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>", month);

// fs.writeFileSync(
//   path.resolve(__dirname, "Try1.json"),
//   JSON.stringify(formated)
// );


// const formated = {};

// for (let obj of finance) {
//   const year = obj["date"].split(":")[0];
//   formated[year] = { ...obj };
//   delete formated[year]["date"];
// }

// console.log(formated);

// // console.log( secondObj);
// fs.writeFileSync(path.resolve(__dirname, "Try1.json"), JSON.stringify(transform(dates)));
// let arr = {};
// let i = 0;

// for (obj in uniqueYears) {
//   i += 2;
//   if (i % 2 === 0) {
//     arr += finance[i].concat(finance[i + 1])
//     console.log(year)
//   }
// }

// console.log(finance[i+1]);
// const formated = [];
// let i = 0;
// let arr = {}
// let years = finance
// console.log(typeof result)
// for (let obj of years) {
//     const year = obj["date"].split(":")[0];
//     formated[i] ={...obj};
//     delete formated[i]['date']

//     if(i % 2 !== 0)
//     {
//         arr[year] = Object.assign({},formated[i-1],formated[i])
//     }
//     i += 1;

// }

// // for(let j = 0; j < formated.length; j + 2) {

// // }
//  console.log(arr)

// let formated = new Object();

// let values;
// let i = 1;
// const Data = async () => {
//   for (let obj of finance) {

//     const year = obj["date"].split(":")[0];
//     console.log(finance.length)
//     for (let r = 0; r < finance.length; r++) {
      
//       const formatingData = (year, month, value) => {
//         month = obj
//         year = obj["date"].split(":")[0];
//         for (let d = 1; d < year.length; d++) {
//           formated[year] = { year, month, value };
//         }
//       };
//       await formatingData(year, month, values)
//       i++;
//     }
//   }
// }

// Data();
// console.log(formated);

// fs.writeFileSync(
//   path.resolve(__dirname, "Try1.json"),
//   JSON.stringify(formated)
// );



// var myObj = new Object(),
//     str = 'myString',
//     rand = Math.random(),
//     obj = new Object();

// myObj.type              = 'Dot syntax';
// myObj['date created']   = 'String with space';
// myObj[str]              = 'String value';
// myObj[rand]             = 'Random Number';
// myObj[obj]              = 'Object';
// myObj['']               = 'Even an empty string';

// console.log(myObj);
// =======
const formulated = arr => arr.
  map(obj => {
  const year = obj["date"].split(":")[0];
  const semester = obj["date"].split(":")[1] > 6 ? 2 : 1 ;

  let results = []

  for (let item in obj) {
    if (parseInt(item)) {
      results.push({
        year,
        month: semester === 1 ? parseInt(item) : parseInt(item) + 6,
        value: obj[item]
      })
    }
  }

  return results
  }).flat()

formulated(finance)
fs.writeFileSync(path.resolve(__dirname, "Try2.json"), JSON.stringify(formulated(finance)));

