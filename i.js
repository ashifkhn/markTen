const billAmount=document.querySelector("bill-amount")
const cashGiven=document.querySelector("#cash-given")
const checkBtn=document.querySelector("check-btn")
const errorMsg=document.querySelector("error-msg")
const numberOfNotes=document.querySelector(".no-of-notes")


const notesAvailable=[2000,500,200,100,50,20,10,5,1]

checkBtn.addEventListener("click", function billAndCash(){
    hideMsg();
    if (Number(billAmount.value)<0 ||Number(cashGiven.value)<0){
        showMessage("Invalid Amount")
    }
    else if(Number(cashGiven.value)>=(Number(billAmount.value)){
        const returnAmount =cashGiven.value-billAmount.value;
        showMessage (returnAmount)
        calculateAmount(toBeReturned)
    }
    else{
        showMessage("Cash given is less then bill amount")
    }
})

function calculateAmount(toBeReturned){
    for(var i=0;i<notesAvailable.length;i++){
        const noOfNotes=Math.trunc(returnAmount/notesAvailable[i])
        toBeReturn=toBeReturn%notesAvailable[i]
        noOfNotes[i].innerText=noOfNotes;
    }
}



function showMessage(message){
    errorMsg.style.display="block"
    errorMsg.innerText=message;
}

function hideMsg(){
    errorMsg.style.display="none"
}
