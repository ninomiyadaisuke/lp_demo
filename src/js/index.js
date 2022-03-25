import "../scss/style.scss";
import { saunaData, foodData, goodsData } from "./data";

const button = document.getElementById("pc-button");
const title = document.getElementById("title");
const image = document.getElementById("image");
const iconImage = document.getElementById("icon-image");
const text = document.getElementById("text");
const radio = document.getElementsByName("choise");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputSubject = document.getElementById("subject");
const inputMessage = document.getElementById("message");
const contactButton = document.getElementById("contact-button");
const inputCheck = document.getElementById("check");
let val = "";

const choiseDetail = (value) => {
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
      if (val === "sauna") return choiseDetail(saunaData);
      if (val === "food") return choiseDetail(foodData);
      if (val === "goods") return choiseDetail(goodsData);
      if (val === "") return;
    }
  });
}

contactButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputCheck.checked) {
    if (inputName.value === "") {
      inputName.classList.add("form-invalid");
      return;
    } else {
      inputName.classList.remove("form-invalid");
    }
    if (inputEmail.value === "") {
      inputEmail.classList.add("form-invalid");
      return;
    } else {
      inputEmail.classList.remove("form-invalid");
    }
    if (inputSubject.value === "") {
      inputSubject.classList.add("form-invalid");
      return;
    } else {
      inputSubject.classList.remove("form-invalid");
    }
    if (inputSubject.value === "") {
      inputMessage.classList.add("form-invalid");
      return;
    } else {
      inputMessage.classList.remove("form-invalid");
    }
    const contact = {
      name: inputName.value,
      email: inputEmail.value,
      subject: inputSubject.value,
      message: inputMessage.value,
    };
  } else {
    alert('チェックを入れてください')
  }
});
