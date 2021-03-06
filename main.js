// Tasks todo

// Body
const body = document.querySelector("body");
body.style.margin = "10rem 55rem";
body.style.boxShadow = "-1px -2px 117px 6px rgba(0,0,0,0.74);";

// H1
const fH1 = document.createElement("h1");
fH1.innerHTML = "todo List";
fH1.style.fontFamily = "cursive";
body.append(fH1);
fH1.style.display = "flex";
fH1.style.justifyContent = "center";

//Ul
const ul1 = document.createElement("ul");
ul1.id = "UL1";
body.append(ul1);
ul1.style.boxShadow = "-1px -2px 117px 6px black";
ul1.style.backgroundColor = "#e6e6f0";
ul1.style.width = "50rem";

const toDo = ["wake up", "eat breakfast", "code"];

// Render List
const renderList = () => {
  for (i = 0; i < toDo.length; i++) {
    const li1 = document.createElement("li");
    li1.style.fontSize = "2.5rem";
    li1.style.fontFamily = "cursive";
    // Buttons 1
    const buttons1 = document.createElement("button");
    buttons1.className = "btn btn-danger ";
    buttons1.style.margin = "5%";
    buttons1.style.flexDirection = "row";
    
    // Buttons 4
    const buttons4 = document.createElement("button");
    buttons4.style.width = "90px";
    buttons4.className = "btn btn-primary";

    buttons1.innerHTML = "Delete";

    buttons4.innerHTML = "Update";

    li1.innerHTML = toDo[i];

    // Append li and buttons
    ul1.append(li1);
    li1.append(buttons1);
    li1.append(buttons4);

    // Function Delete Item
    buttons1.addEventListener("click", () => {
      li1.remove();
    });

    // Function Update Item
    buttons4.addEventListener("click", () => {
      const text1 = prompt("Enter your update");
      li1.innerHTML = text1;
      li1.append(buttons1);
      li1.append(buttons4);
    });
  }
};

renderList();

// Input Items
const input1 = document.createElement("input");
input1.innerHTML = "add";
input1.border;
input1.style.width = "25rem";
input1.style.height = "3rem";
input1.id = "inp1";
input1.style.margin = "1rem";
body.append(input1);

// Button 1 For Input
const button1 = document.createElement("button");
button1.innerHTML = "invoke";
button1.style.fontFamily = "cursive";
button1.style.margin = "1rem";
button1.style.width = "10rem";
button1.className = "btn btn-success";
button1.id = "btn1";
body.append(button1);

// Function Input Items
button1.addEventListener("click", () => {
  if (input1.value == "") {
    alert("no input");
  } else {
    const newItem = document.createElement("li");
    newItem.innerHTML = input1.value;

    newItem.style.fontSize = "2.5rem";

    // Buttons 2 to remove
    const buttons2 = document.createElement("button");
    buttons2.style.width = "90px";
    buttons2.style.margin = "5px";
    buttons2.className = "btn btn-danger";
    buttons2.style.margin = "5%";

    // Button 5 to Update
    const buttons5 = document.createElement("button");
    buttons5.style.width = "90px";
    buttons5.className = "btn btn-primary";
    buttons5.style.margin = "5%";

    buttons2.innerHTML = "Delete";
    buttons5.innerHTML = "Update";

    ul1.append(newItem);
    newItem.append(buttons2);
    newItem.append(buttons5);

    // Function Remove Item
    buttons2.addEventListener("click", () => {
      newItem.remove();
    });

    // Function Update Item
    buttons5.addEventListener("click", () => {
      const text2 = prompt("Enter your update");
      newItem.innerHTML = text2;
      newItem.append(buttons2);
      newItem.append(buttons5);
    });
  }
});

// let retItem = localStorage.getItem("testNewItem");
// let retItemParse = JSON.parse(retItem);
// document.querySelector(".item").innerHTML = retItemParse;
