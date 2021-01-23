// const item = {
//     id: 1,
//     problem: "1 + 1 = ",
//     options: {
//         a: {
//             opt: "A",
//             answer: "1"
//         },
//         b: {
//             opt: "B",
//             answer: "2"
//         },
//         c: {
//             opt: "C",
//             answer: "3"
//         },
//         d: {
//             opt: "D",
//             answer: "4"
//         }   
//     },
//     key: "b"
// };

function Option(opt, answer) {
    this.opt = opt;
    this.answer = answer;
}

function Options(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

function Item(id, problem, options, key) {
    this.id = id;
    this.problem = problem;
    this.options = options;
    this.key = key;
}

let optA = new Option("A", "1");
let optB = new Option("B", "2");
let optC = new Option("C", "3");
let optD = new Option("D", "4");

let options = new Options(optA, optB, optC, optD);

let item = new Item(1, "1 + 1 = ", options, "b");

localStorage.setItem("q1", JSON.stringify(item));
const q = localStorage.getItem("q1");

console.log(q);
// console.log(e.lastElementChild.previousElementSibling);

