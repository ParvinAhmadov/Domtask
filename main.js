// console.log(window.document)

const list = document.getElementById("myList");
// console.log(list)
const items = list.getElementsByTagName("li")[3];
console.log(items);
// for (let i = 0; i < items.length; i++) {
// console.log(items[i].textContent)
// }

const inputs = document.getElementsByName("myInput"); //[2]
console.log(inputs);

// for (let i = 0; i < inputs.length; i++) {
// console.log(inputs[i].textContent)
// }
const inputs1 = document.getElementsByName("myInput");
for (let i = 0; i < inputs.length; i++) {
  console.log(`index: ${i}, Value: ${inputs1[i].value}`);
}

const paragraphs = document.getElementsByTagName("p"); //[2]
console.log(paragraphs);
// for (let i = 0; i < paragraphs.length; i++) {
//   console.log(paragraphs[i].textContent);
// }

const paragraphs1 = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
  console.log(`index: ${i}, Content: ${paragraphs1[i].textContent}`);
}

const buttons = document.getElementsByClassName("myButton"); //[2]
console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
  console.log(buttons[i].textContent);
}

for (let i = 0; i < buttons.length; i++) {
  console.log(`index: ${i}, Text: ${buttons[i].textContent}`);
}

const h1 = document.getElementsByTagName("h1");
console.log(h1);

let len = h1.length;
for (let i = 0; i < len; i++) {
  console.log(h1[i]);
}

[...h1].forEach((item) => {
  console.log(item);
});

const example = document.getElementById("example");

const textContentValue = example.textContent;
const innerHTMLValue = example.innerHTML;

console.log("textContent:", textContentValue);
console.log("innerHTML:", innerHTMLValue);

const button = document.getElementById("myButton");
const message = document.getElementById("message");

//addEventListener
button.addEventListener("click", function () {
  message.textContent = "Siz düyməni basdınız!";
  console.log("düymənə basıldı");
});

//querySelector

const introParagraph = document.querySelector(".intro");
console.log(introParagraph);
console.log(introParagraph.textContent);

const fistListItem = document.querySelector("#myList2 li:nth-child(1)");
console.log(fistListItem);
console.log(fistListItem.textContent);

const btnButton = document.querySelectorAll(".btn"); //[2]
console.log(btnButton);

const card = document.querySelector(".card");
console.log(card);
const firstChild = card.firstElementChild;
console.log(firstChild);
const lastChild = card.lastElementChild;
console.log(lastChild);

const cardBody = card.querySelector(".card-body");
console.log(cardBody);
const cardBodyFirstChild = cardBody.firstElementChild;
console.log(cardBodyFirstChild);
const cardBodyLastChild = cardBody.lastElementChild;
console.log(cardBodyLastChild);

const imgElement = document.querySelector(".card-img");
console.log(imgElement);
const imgSrc = imgElement.getAttribute("src");
console.log(imgSrc);
const imgTitle = imgElement.getAttribute("alt");
console.log(imgTitle);

// const btn = document.querySelector(".btn")
// console.log(btn.previousElementSibling.previousElementSibling)
// console.log(btn.parentNode)

const btn = document.querySelector(".card-body:nth-child(2)")
console.log(btn)


