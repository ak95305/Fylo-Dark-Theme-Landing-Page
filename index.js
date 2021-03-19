let input = document.querySelector("input");
let emailBtn = document.querySelector("#email-btn");
let errorMsg = document.querySelector("#error");


emailBtn.addEventListener("click", emailFunction);

function emailFunction(){
    let arr = input.value.split("");
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === "@"){
            errorMsg.setAttribute("style", "display: none !important;");
        } else{
            errorMsg.style.display = "flex";
        }
    }
    input.value = "";
}