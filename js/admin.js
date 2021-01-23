// let arr = document.getElementsByTagName('label');
// arr[0].innerHTML = "hello";
// arr[1].innerHTML = "hello";

const item = {
    id: 1,
    problem: "1 + 1 = ",
    options: {
        a: {
            opt: "A",
            answer: "1"
        },
        b: {
            opt: "B",
            answer: "2"
        },
        c: {
            opt: "C",
            answer: "3"
        },
        d: {
            opt: "D",
            answer: "4"
        }   
    },
    key: "b"
};

// function item(id, problem, options, key) {
//     this.id = id;
//     this.problem = problem;
//     this.options = options;
//     this.key = key;
// }

localStorage.setItem("q1", JSON.stringify(item));
const q = localStorage.getItem("q1");

console.log(q);
// console.log(e.lastElementChild.previousElementSibling);

