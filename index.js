const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes=document.querySelectorAll(".no-of-notes")

const availableNotes=[2000, 500, 200, 100, 50,20, 10,5, 1]

checkButton.addEventListener("click", function BillAndCashAmount() {
  hideMessage();
  if (Number(billAmount.value) < 0||Number(cashGiven.value)<0) {
    showErrorMessage("Invalid Amount Entered")
  }
  else if (Number(cashGiven.value) >= (Number(billAmount.value)) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      showErrorMessage(amountToBeReturned);
      calculateChange(amountToBeReturned);
    } else {
      showErrorMessage("Error!");
    }
  
});

function calculateChange(amountToBeReturned) {

  for(let i=0;i<availableNotes.length;i++){
    
    const numberOfNotes= Math.trunc(amountToBeReturned/availableNotes[i])
    amountToBeReturned = amountToBeReturned%availableNotes[i]
     noOfNotes[i].innerText=numberOfNotes;
  }

}

function hideMessage() {
    errorMessage.style.display = "none";
}

function showErrorMessage(msg) {
  errorMessage.style.display = "block";
  errorMessage.innerText = msg;
}
