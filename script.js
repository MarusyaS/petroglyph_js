const canvas = document.getElementsByTagName("canvas")[0];
console.log(canvas); 
// console.log(canvas.getContext('2d'));

const ctx = canvas.getContext('2d', { willReadFrequently: true });
// ctx.willReadFrequently(true);


// const obj = JSON.parse(text);

// const jokes = require('legs.json');
// console.log(jokes[0].value);


const fs = require('fs');
const jokesFile = fs.readFileSync('legs.json', 'utf8');
const jokes = JSON.parse(jokesFile);

console.log(jokes.nodes.id[1]);




// let legs_json = {
//     "nodes": [
//         {
//             "id": "1-1-1",
//             "surface_number": "1-1",
//             "png": "1-1-1",
//             "multi_figured_composition": 1.0,
//             "other_creatures": 0.0
//         },
//         {
//             "id": "1-2-1",
//             "surface_number": "1-2",
//             "png": "1-2-1",
//             "multi_figured_composition": 1.0,
//             "other_creatures": 1.0
//         },
//         {
//             "id": "1-3-1",
//             "surface_number": "1-3",
//             "png": "1-3-1",
//             "multi_figured_composition": 1.0,
//             "other_creatures": 1.0
//         },
//         {
//             "id": "1-3-2",
//             "surface_number": "1-3",
//             "png": "1-3-2",
//             "multi_figured_composition": 1.0,
//             "other_creatures": 1.0
//         }],
//         "links": [
//             {
//                 "source": "1-1-1",
//                 "target": "1-2-1",
//                 "weight": 5.0
//             },
//             {
//                 "source": "1-1-1",
//                 "target": "1-3-1",
//                 "weight": 4.0
//             },
//             {
//                 "source": "1-1-1",
//                 "target": "1-3-2",
//                 "weight": 3.0
//             }]};