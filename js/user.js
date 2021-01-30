// an array for storing the javascript object Item, which is defined in admin.js
let items = [];

// reads localStorage and parse the JSON objects in the storage
function getItems() {

    for(let i = 0; i < localStorage.length; ++i) {
        items[i] = JSON.parse(localStorage.getItem(i+1));
        // console.log(items[i]);
    }

}

// helper function to get each question and its answers
function getQA() {
    
    for(let i = 0; i < items.length; ++i) {
        displayItem(items[i]);        
    }
}

// display one question with 4 answers after div with id after-me
function displayItem(item) {
    let area = document.getElementById("after-me");
    area.insertAdjacentHTML("afterend", 
    "<div><p>Question:<p>"
    + "<p>" + item.problem + ": </p>" 
    + "<p>A. " + item.options.a["answer"] + "</p>" 
    + "<p>B. " + item.options.b["answer"] + "</p>" 
    + "<p>C. " + item.options.c["answer"] + "</p>" 
    + "<p>D. " + item.options.d["answer"] + "</p>" 
    + "</div>");
}

function start() {

    if(localStorage.length > 0){
        getItems();
        getQA();
    } else {
        window.alert("Please go to admin and add some qeustions.");
    }

}

start();