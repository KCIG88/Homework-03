var generateBtn = document.querySelector("#generate");
var lwrCase = "abcdefghijklmnopqrstuvwxyz";
var upprCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var specCharac = "~!@#$%^&*()_+";
var lngth;
var lwrCaseOption = true
var upprCaseOption = true
var numbersOption = true
var specCharacOption = true
var string = ''
var arr = string.split('')
var newArr = []
var askForLength;



generateBtn.addEventListener("click", function (){

    lngth = (prompt("Choose password length between 8-128"));
    lwrCaseOption = confirm("Do you want lower case letters?");  
    upprCaseOption = confirm("Do you want upper case letters?");
    numbersOption = confirm("Do you want numbers?");
    specCharacOption = confirm("Do you want special characters?");

}
//function whichCharacters(){
    
    if (lwrCaseOption) {
        string += (lwrCase)
    
    }
    if(upprCaseOption){
        string += upprCase
    }
    if (numbersOption){
        string += (num)
    }
    if (specCharacOption){
        string += (specCharac)
    }
}
// Write password to the #password input
// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");
  
//     passwordText.value = password;
  
//   }
  function writePassword(){}
    




var arr = string.split('')
var newArr = []
for  (var i = 0; i < arr.length; i++){
    newArr[i] = arr[Math.floor(Math.random() * arr.length)]
}  

// console.log(newArr)
// console.log(newArr.splice(0, length))
// console.log(string)
// console.log(arr)