
    let q1 = JSON.parse(localStorage.getItem(1));
    console.log(q1);
    let qq1 = q1.options.a.answer
    console.log(qq1);
    
   
    for (i = 1; i <= 1 ; i++){
        let question = JSON.parse(localStorage.getItem(i));
        let q = document.createElement("p");
        
        for(j = 1; j <= 4 ; j++){
            if (j ==1){
                let qOption = question.options.a.answer;
                let radio = document.createElement("input");
                radio.setAttribute("id", "option" + j);
                radio.setAttribute("type", "radio");
                let lable = document.createElement("lable");
                lable.innerHTML = qOption
                document.body.appendChild(radio);
                document.body.appendChild(lable);
                let br = document.createElement("br")
                document.body.appendChild(br);
            }
            if (j ==2){
                let qOption = question.options.b.answer;
                let radio = document.createElement("input");
                radio.setAttribute("id", "option" + j);
                radio.setAttribute("type", "radio");
                let lable = document.createElement("lable");
                lable.innerHTML = qOption
                document.body.appendChild(radio);
                document.body.appendChild(lable);
                let br = document.createElement("br")
                document.body.appendChild(br);
            }
            if (j ==3){
                let qOption = question.options.c.answer;
                let radio = document.createElement("input");
                radio.setAttribute("id", "option" + j);
                radio.setAttribute("type", "radio");
                let lable = document.createElement("lable");
                lable.innerHTML = qOption
                document.body.appendChild(radio);
                document.body.appendChild(lable);
                let br = document.createElement("br")
                document.body.appendChild(br);
            }
            if ( j== 4){ 
                let qOption = question.options.d.answer;
                let radio = document.createElement("input");
                radio.setAttribute("id", "option" + j);
                radio.setAttribute("type", "radio");
                let lable = document.createElement("lable");
                lable.innerHTML = qOption
                document.body.appendChild(radio);
                document.body.appendChild(lable);
                let br = document.createElement("br")
                document.body.appendChild(br);
            }



        }

    
        // document.createElement("input")

        // console.log(qq + "hi");
       // document.getElementById("test").innerHTML = qq;
    
    // Object.entries = function(q1){
    //     let qq1 = Object.entries(q1)
    //     // let qq1 = Object.keys("options");
    //     console.log(qq1);
    //     // document.getElementById("question").appendChild(qq1);
    // };

//     if(typeof(q1) == "object"){
//         Object.entries()
// ;  }
    }
