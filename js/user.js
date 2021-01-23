
    let q1 = JSON.parse(localStorage.getItem("q"));
    console.log(q1);

    if(!Object.entries){
        console.log("hi");
    Object.entries = function(q1){
let qq1 = Object.keys(q1);
console.log(qq1);
document.getElementById("question").appendChild(qq1);
};  }     
