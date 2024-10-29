import "./style.css"; /*  for importing style.css */

window.onload = () => {
  const array = document.querySelectorAll(".skeleton");
  setTimeout(() => {
    array.forEach((arr) => arr.classList.remove("skeleton"));
  }, 5000);
};
