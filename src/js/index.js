import "../scss/style.scss";
import { saunaData, foodData, goodsData } from "./data";

const button = document.getElementById("pc-button");
const title = document.getElementById("title");
const image = document.getElementById("image");
const iconImage = document.getElementById("icon-image");
const text = document.getElementById("text");
const radio = document.getElementsByName("choise");
let val = "";

const choiseDetail = (value ) => {
  title.innerHTML = value.title;
  text.innerHTML = value.text;
  image.setAttribute("src", value.image);
  iconImage.setAttribute("src", value.icon);
  button.textContent = value.button;
  console.log(value.image);
};

for (const btn of radio) {
  btn.addEventListener("change", () => {
    val = btn.value;
    if (btn.checked === true) {
      if (val === "sauna")return choiseDetail(saunaData);
      if (val === "food") return choiseDetail(foodData);
      if (val === "goods") return choiseDetail(goodsData);
      if (val === "") return;
    }
  });
}
