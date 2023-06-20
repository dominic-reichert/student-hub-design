const selectElementTime = document.querySelector(".timemodel");
const timeResult = document.querySelector(".timeResult");

selectElementTime.addEventListener("change", (event) => {
  timeResult.textContent = `${event.target.value}`;
});

const selectElementClass = document.querySelector(".classmonth");
const classResult = document.querySelector(".classResult");

selectElementClass.addEventListener("change", (event) => {
  classResult.textContent = `${event.target.value}`;
});
