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

// let optA = new Option("A", "1");
// let optB = new Option("B", "2");
// let optC = new Option("C", "3");
// let optD = new Option("D", "4");

// let options = new Options(optA, optB, optC, optD);

// let item = new Item(1, "1 + 1 = ", options, "b");


// localStorage.setItem("q1", JSON.stringify(item));
// const q = localStorage.getItem("q1");

// console.log(q);
// console.log(e.lastElementChild.previousElementSibling);

let items = [];
let id = 0;

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



function whichChkd() {
    let optA = document.getElementById('optA').checked;
    let optB = document.getElementById('optB').checked;
    let optC = document.getElementById('optC').checked;
    let optD = document.getElementById('optD').checked;

    if(optA){
        console.log("A");
        return {opt: "A", chkd: optA};
    }
    else if(optB){
        console.log("B");
        return {opt: "B", chkd: optB};
    }
    else if(optC){
        console.log("C");
        return {opt: "C", chkd: optC};
    }
    else if(optD){
        console.log("D");
        return {opt: "D", chkd: optD};
    }
    else {
        window.alert("MUST SET A KEY!");
        return {opt: "x", chkd: false};
    }
}

function createItem() {
    const optA = "A";
    const optB = "B";
    const optC = "C";
    const optD = "D";

    let chkd = whichChkd();

    if(chkd) { 
        let problem = document.getElementById('problem').value;
        let answerA = document.getElementById('answerA').value;
        let answerB = document.getElementById('answerB').value;
        let answerC = document.getElementById('answerC').value;
        let answerD = document.getElementById('answerD').value;
        
        let a = new Option(optA, answerA);
        let b = new Option(optB, answerB);
        let c = new Option(optC, answerC);
        let d = new Option(optD, answerD);

        let options = new Options(a,b,c,d);

        ++id;
        let item = new Item(id, problem, options, chkd["opt"]);

        console.log(problem);
        console.log(answerA);
        console.log(item);

        return item;
    }
}


function viewMCQ(item) {
    let problem = item["problem"];

    let a1 = item["options"]['a']['answer'];
    let a2 = item["options"]['b']['answer'];
    let a3 = item["options"]['c']['answer'];
    let a4 = item["options"]['d']['answer'];

    let e = document.getElementById("box");
    let sibling = e.lastElementChild.previousElementSibling;

    if(sibling){
        console.log(sibling);
    } else {
        let para0 = document.createElement("P");
        let para1 = document.createElement("P");
        let para2 = document.createElement("P");
        let para3 = document.createElement("P");
        let para4 = document.createElement("P");
        
        let node0 = document.createTextNode("Question:" + problem);
        let node1 = document.createTextNode("A. " + a1);
        let node2 = document.createTextNode("B. " + a2);
        let node3 = document.createTextNode("C. " + a3);
        let node4 = document.createTextNode("D. " + a4);


        para0.appendChild(node0);
        para1.appendChild(node1);
        para2.appendChild(node2);
        para3.appendChild(node3);        
        para4.appendChild(node4);

        let myDiv = document.createElement("DIV");
        myDiv.appendChild(para0);
        myDiv.appendChild(para1);
        myDiv.appendChild(para2);
        myDiv.appendChild(para3);
        myDiv.appendChild(para4);

        let box = document.getElementById("box");
        box.insertBefore(myDiv, box.childNodes[0]);
    }

    

}

function addBtnHandler() {
    let item =  createItem();
    let k = id.toString();
    localStorage.setItem(k, JSON.stringify(item));
    const q = localStorage.getItem("q");
    viewMCQ(item);
}

document.getElementById("add").onclick = addBtnHandler;
