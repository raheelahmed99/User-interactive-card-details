var cardName = document.querySelector("#name");
var cardNumber = document.querySelector("#number");
var cardMonth = document.querySelector("#month");
var cardYear = document.querySelector("#year");
var cardCvc = document.querySelector("#cvc");

var displayName = document.querySelector("#displayname");
var displayNum = document.querySelector("#displaynum");
var displayMonth = document.querySelector("#displaymon");
var displayYear = document.querySelector("#displayyr");
var displayCvc = document.querySelector("#displaycvc");

// on click input, data will display on specific area
cardName.oninput = () => {
  displayName.innerText = cardName.value;
  cardName.classList.remove("error");
}
cardNumber.oninput = () => {
  displayNum.innerText = cardNumber.value.replace(/[^\dA-Z]/g, "")
  .replace(/(.{4})/g, "$1 ")
  .trim();;
  cardNumber.classList.remove("error");
}
cardMonth.oninput = () => {
  displayMonth.innerText = cardMonth.value;
  cardMonth.classList.remove("error");
}
cardYear.oninput = () => {
  displayYear.innerText = cardYear.value;
  cardYear.classList.remove("error");
}
cardCvc.oninput = () => {
  displayCvc.innerText = cardCvc.value;
  cardCvc.classList.remove("error");
}

let submit=document.getElementById("submit");
submit.addEventListener('click',displayValues);
function displayValues() {

  //condition for checking any field is not empty
  if(!cardName.value || !cardNumber.value || !cardMonth.value || !cardYear.value || !cardCvc.value){
    
    // thanks section replace with form section after submit data 
    document.getElementById("formId").style.display="flex";
    document.getElementById("thanks").style.display="none";
  }
  else{
    document.getElementById("formId").style.display="none";
     document.getElementById("thanks").style.display="flex"
  }
    
}


function back() {

  // back to form section
    document.getElementById("thanks").style.display="none";
    document.getElementById("formId").style.display="flex";
  
    //inputted values in field blank
  document.forms['myForm']['name'].value = '';
  document.forms['myForm']['number'].value = '';
  document.forms['myForm']['month'].value = '';
  document.forms['myForm']['year'].value = '';
  
document.forms['myForm']['cvc'].value = '';
}

displayValues();
back();