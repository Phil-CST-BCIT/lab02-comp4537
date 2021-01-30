// item structure:
// {
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

// the number of answers for each question
const NUM_OF_OPTIONS = 4;
let items = [];
let id = 0;

// ########################################################################
//                     CONSTRUCTORS
// ########################################################################

// constructor for Option object
function Option(opt, answer) {
    this.opt = opt;
    this.answer = answer;
}

// constructor for Options object, which contain 4 Option obj 
function Options(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

// construcor for Item object
function Item(id, problem, options, key) {
    this.id = id;
    this.problem = problem;
    this.options = options;
    this.key = key;
}
// ########################################################################


// checks which radio button among a, b, c, d is checked
// returns an object { option, boolean }
function whichChkd() {

    let opts = [];
    let res;

    for (var i = 0; i < NUM_OF_OPTIONS; ++i) {
        res = String.fromCharCode(65 + i);
        let id = "opt" + res;
        opts[i] = document.getElementById(id).checked;
    }
      
    if(opts[0]){
        // console.log("A");
        return {opt: "A", chkd: opts[0]};
    }
    else if(opts[1]){
        return {opt: "B", chkd: opts[1]};
    }
    else if(opts[2]){
        return {opt: "C", chkd: opts[2]};
    }
    else if(opts[3]){
        return {opt: "D", chkd: opts[3]};
    }
    else {
        window.alert("A key must be assigned");
        return {opt: "F", chkd: false};
    }
}

// a helper function for instantiation of an Item object
// returns an Item object
function createItem() {

    let item;
    let check = whichChkd();
    let answers = []; // stores 4 answers of a question, e.g. ( blah blah... )
    let opts = []; // stores 4 options of a question, e.g. ( A. blah blah.... )
    let res;

    if(check.chkd) { 

        // the question
        let problem = document.getElementById('problem').value;

        // dynamically assign a variable for one option
        for (var i = 0; i < NUM_OF_OPTIONS; ++i) {
            res = String.fromCharCode(65 + i);
            let id = "answer" + res;
            answers[i] = document.getElementById(id).value;
            opts[i] = new Option(res, answers[i]); // optionA == opts[0]
        }
        
        let options = new Options(opts[0],opts[1],opts[2],opts[3]);

        ++id; // when you save, it creates an item, so id increments by one

        item = new Item(id, problem, options, check["opt"]);

        return item;
    } else {
        return null;
    }
}

function clearForm() {
    // this is a bad way for clearing all the fields
    // we can use a loop to clear it.
    document.getElementById("problem").value = "";
    document.getElementById("answerA").value = "";
    document.getElementById("answerB").value = "";
    document.getElementById("answerC").value = "";
    document.getElementById("answerD").value = "";
}

// ??????????????????????????????????? NEED REFACTOR ??????????????????????????????????
// displays a quiz question above the form
function viewMCQ(item) {

    let problem = item["problem"];
    let res;
    let ax = [];
    let ps = [];
    let nodes = [];

    for (var i = 0; i < NUM_OF_OPTIONS; ++i) {
        res = String.fromCharCode(97 + i);
        ax[i] = item["options"][res]['answer'];
    }
    
    let b = document.getElementById("box");
    let sibling = b.lastElementChild.previousElementSibling;

    if(sibling){
        sibling.insertAdjacentHTML("afterend", 
                                    `<div><p>Question: ${problem}</p>
                                    <p>A. ${ax[0]} </p>
                                    <p>B. ${ax[1]} </p>
                                    <p>C. ${ax[2]} </p>
                                    <p>D. ${ax[3]} </p>
                                    </div>`);

    } else {

        /**
         * structure we need to dynamically create
         *  <div>
         *      <p>textNode</p>
         *      <p>textNode</p>
         *      <p>textNode</p>
         *      <p>textNode</p>
         *  </div>
         */

        // we creates the container <div> tag
        let myDiv = document.createElement("DIV");

        // we need to create 5 <p> tags. one for the question, 4 for the answers
        for (var i = 0; i < NUM_OF_OPTIONS + 1; ++i) {

            ps[i] = document.createElement("P"); 

            // if it is the first <p> tag we create a node for the first <p> tag
            if(i === 0) {
                nodes[i] = document.createTextNode(`Questions: ${problem}`);
            } else { // else we create 4 nodes for the answers
                res = String.fromCharCode(64 + i); 
                nodes[i] = document.createTextNode(res+ ". " + ax[i - 1]);
            }

            // we append each text node to the <p> 
            ps[i].appendChild(nodes[i]);

            // we append the 1 question <p> elements and 4 answer <p> elements to the <div>
            myDiv.appendChild(ps[i]);
        }

        // adds the structure to our html file
        let box = document.getElementById("box");
        box.insertBefore(myDiv, box.childNodes[0]);
    }
}
// ??????????????????????????????????? NEED REFACTOR ??????????????????????????????????


// when Add btn is clicked
function addBtnHandler() {
    
    let item;

    if(whichChkd().chkd){
        item =  createItem();
        let k = id.toString();
        localStorage.setItem(k, JSON.stringify(item));
        const q = localStorage.getItem("q");
        if(item 
            && item.problem
            && item.options.a.answer
            && item.options.b.answer
            && item.options.c.answer
            && item.options.d.answer) {
            // console.log(item);
            viewMCQ(item);
        } else {
            window.alert("Enter question and answers");
        }
    } 

    clearForm();

}

function delBtnHandler() {
    let len = document.getElementById("box").childElementCount;
    let storageLen = localStorage.length;

    if(len > 1){
        let box = document.getElementById("box");
        box.removeChild(box.childNodes[len - 2]);
    } 

    if(storageLen >= 1) {
        localStorage.removeItem(storageLen); 
        
        if(id >= 1) {
            --id;
        }
    }

}


function saveBtnHandler() {
    let len = document.getElementById("box").childElementCount;

    if(len > 1){
        let oldItem = document.getElementById("box").childNodes[len - 2];

        let problem = document.getElementById("problem").value;
        let answerA = document.getElementById("answerA").value;
        let answerB = document.getElementById("answerB").value;
        let answerC = document.getElementById("answerC").value;
        let answerD = document.getElementById("answerD").value;
        let key = whichChkd();
        let storageItem = localStorage.getItem(localStorage.length)
        let oldId = JSON.parse(storageItem).id;

        // console.log(oldId);

        oldItem.children[0].innerHTML = `Question: ${problem}`;
        oldItem.children[1].innerHTML = `A. ${answerA}`;
        oldItem.children[2].innerHTML = `B. ${answerB}`;
        oldItem.children[3].innerHTML = `C. ${answerC}`;
        oldItem.children[4].innerHTML = `D. ${answerD}`;

        let optA = new Option("A", answerA);
        let optB = new Option("B", answerB);
        let optC = new Option("C", answerC);
        let optD = new Option("D", answerD);
        let options = new Options(optA,optB,optC,optD);
        let newItem = new Item(oldId, problem, options, key.opt);

        const myItem = JSON.stringify(newItem);


        localStorage.setItem(oldId, myItem);

        clearForm();
    }

}

document.getElementById("add").onclick = addBtnHandler;
document.getElementById("delete").onclick = delBtnHandler;
document.getElementById("save").onclick = saveBtnHandler;