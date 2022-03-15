import "../scss/style.scss";

const text = document.getElementById("test");
const check = document.getElementsByName("check");
const length = check.length;
for (let i = 0; i < length; i++) {
  const value = check[i].value;
    text.innerHTML = "saunaです";
  check[i].addEventListener('change', () => {
    if(value === "sauna") {
      text.innerHTML = "saunaです";
    }
    if(value === "food") {
      text.innerHTML = "foodです";
    }
    if(value === "goods") {
      text.innerHTML = "goodsです";
    }
  })
}
