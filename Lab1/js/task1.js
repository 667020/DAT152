// Liste med pop og push
let stack = []; // stack array

// Henter HTML elementer
const userInput = document.getElementById('inputText');
const pushButton = document.getElementById('buttonPush');
const popButton = document.getElementById('buttonPop');
const output = document.getElementById('output');


// Logic for push knappen
pushButton.addEventListener("click", () => {
  if (userInput.value !== "")  {
    stack.push(userInput.value)
    console.log('Pushed:', userInput.value);
    console.log('Current Stack:', stack);
    userInput.value = "";
}else {
    alert("Please enter som text before pushing")
}
})

//Logikk for pop knappen
popButton.addEventListener("click", () => {
  if(stack.length > 0 ) {
    const popValue = stack.pop();
    output.textContent = popValue;
    console.log('Popped:', popValue);
    console.log('Current Stack:', stack);
  }else {
    output.textContent = "Stack is empty"
  }
})
