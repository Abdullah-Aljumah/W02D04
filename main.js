const body = document.querySelector("body");
const fH1 = document.createElement("h1");
fH1.innerHTML = "todo List";
body.append(fH1);

const ul1 = document.createElement("ul");
ul1.id = "UL1";
body.append(ul1);

const toDo = ["wake up", "eat breakfast", "code"];
const renderList = () => {
  for (i = 0; i < toDo.length; i++) {
    const li1 = document.createElement("li");
    const buttons1 = document.createElement("button");
    buttons1.style.width = "70px";
    buttons1.style.margin = "5px";
    const buttons4 = document.createElement("button");
    buttons4.style.width = "70px";

    buttons1.innerHTML = "Delete";
    buttons4.innerHTML = "Update";
    li1.innerHTML = toDo[i];
    ul1.append(li1);
    li1.append(buttons1);
    li1.append(buttons4);
    buttons1.addEventListener("click", () => {
      li1.remove();
    });
    buttons4.addEventListener("click", () => {
      const text1 = prompt("Enter your update");
      li1.innerHTML = text1;
      li1.append(buttons1);
      li1.append(buttons4);
    });
  }
};
renderList();

const input1 = document.createElement("input");
input1.innerHTML = "add";
input1.id = "inp1";
body.append(input1);

const button1 = document.createElement("button");
button1.innerHTML = "invoke";
button1.id = "btn1";
body.append(button1);

button1.addEventListener("click", () => {
  if (input1.value == "") {
    alert("no input");
  } else {
    const newItem = document.createElement("li");
    newItem.innerHTML = input1.value;
    const buttons2 = document.createElement("button");
    buttons2.style.width = "70px";
    buttons2.style.margin = "5px";

    const buttons5 = document.createElement("button");
    buttons5.style.width = "70px";

    buttons2.innerHTML = "Delete";
    buttons5.innerHTML = "Update";

    ul1.append(newItem);
    newItem.append(buttons2);
    newItem.append(buttons5);

    buttons2.addEventListener("click", () => {
      newItem.remove();
    });
    buttons5.addEventListener("click", () => {
      const text2 = prompt("Enter your update");
      newItem.innerHTML = text2;
      newItem.append(buttons2);
      newItem.append(buttons5);
    });
  }
});
