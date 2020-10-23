let counter = 0;

window.addEventListener("DOMContentLoaded", () => {
  const counterElement = document.getElementById("counter");

  const increment = document.getElementById("increment");
  increment.addEventListener("click", () => {
    counter++;
    counterElement.innerText = counter;
  });

  const decrement = document.getElementById("decrement");
  decrement.addEventListener("click", () => {
    counter--;
    counterElement.innerText = counter;
  });
});
