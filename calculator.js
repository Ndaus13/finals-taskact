function add() {
    const  firstNumber = parseInt(document.getElementById("firstNumber").value);
    const secondNumber = parseInt(document.getElementById("secondNumber").value);
    const result = firstNumber + secondNumber;
    document.getElementById("result").value = result;
   }
   
   function subtract() {
    const firstNumber = parseInt(document.getElementById("firstNumber").value);
    const secondNumber = ber = parseInt(document.getElementById("secondNumber").value);
    const result = firstNumber - secondNumber;
    document.getElementById("result").value = result;
   }
   
   function multiply() {
    const firstNumber = parseInt(document.getElementById("firstNumber").value);
    const secondNumber = parseInt(document.getElementById("secondNumber").value);
    const result = firstNumber * secondNumber;
    
    document.getElementById("result").value = result;
   }
   
   function divide() {
    const firstNumber = parseInt(document.getElementById("firstNumber").value);
    const secondNumber = parseInt(document.getElementById("secondNumber").value);
    const result = firstNumber / secondNumber;
    document.getElementById("result").value = result;
   }
   
   function clearFields() {
     {
    document.getElementById("firstNumber").value = "";
    document.getElementById("secondNumber").value = "";
    document.getElementById("result").value = "";
   }
   }
   function showAlert() {
    alert("WORK OF NIÑO G. DAUS");
   }
   