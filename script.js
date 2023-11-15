let inputCheckbox = document.getElementById("checkbox");
console.log(inputCheckbox);

let inputText = document.getElementsByClassName("textfield");
console.log(inputText);

let inputButton = document.getElementsByTagName("button");
console.log(inputButton);

let divfield = document.querySelectorAll("div.div");
console.log(divfield);

myBtnElement = document.getElementById("myBtn");
myBtnElement.addEventListener("click", function(){
    console.log("Knappen klickades på!");
    targetFunction()
});


function targetFunction(){
    let text = inputText;
    document.getElementById("div_element").innerHTML = text;
}


