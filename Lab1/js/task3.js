const dateInput = document.getElementById('date');
const localeInput = document.getElementById('localSelect');
const buttonClickity = document.getElementById('knapp');
const output = document.getElementById('output');

buttonClickity.addEventListener('click', ()=>{
  const date = new Date(dateInput.value);
  const locale = localeInput.value;

  if (isNaN(date.getTime()))  {

    output.textContent ="Please select a date";
    return;
  }

  output.textContent = date.toLocaleDateString(locale, { weekday: "long" });



})
