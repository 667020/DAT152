const date1=document.getElementById('date1');
const date2 =document.getElementById('date2');
const calculateButton = document.getElementById('calculateButton');
const output = document.getElementById('result')

calculateButton.addEventListener("click", ()=> {
  const firstDate = date1.valueAsNumber;
  const secondDate = date2.valueAsNumber;

  const differenceMilliseconds = Math.abs(firstDate - secondDate);
  const milliSecondsPerDay = 1000 * 60 * 60 *24;

  const differenceInDays = differenceMilliseconds/milliSecondsPerDay;

  console.log(firstDate, secondDate);

  output.textContent = `Dager i mellom: ${differenceInDays}`;

})
