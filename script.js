document.addEventListener("DOMContentLoaded", function () {

  const bind = (id, fn) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", fn);
  };

  bind("enterBtn", showActivities);

  bind("activity1Btn", activity1);
  bind("activity2Btn", activity2);
  bind("activity3Btn", activity3);
  bind("activity4Btn", activity4);
  bind("activity5Btn", activity5);
  bind("activity6Btn", activity6);
  bind("activity7Btn", activity7);
  bind("activity8Btn", activity8);
  bind("activity9Btn", activity9);
  bind("activity10Btn", activity10);
  bind("activity11Btn", activity11);
  bind("activity12Btn", activity12);
  bind("activity13Btn", activity13);
  bind("activity14Btn", activity14);
  bind("activity15Btn", activity15);

    document.getElementById("weekSelect").addEventListener("change", function () {

    const intro = document.getElementById("intro");
    const activities = document.getElementById("activities");
    const week1 = document.getElementById("week1");
    const week2 = document.getElementById("week2");

    if (this.value === "home") {
      activities.style.display = "none";
      intro.style.display = "flex";
    }

    if (this.value === "week1") {
      intro.style.display = "none";
      activities.style.display = "block";
      week1.style.display = "grid";
      week2.style.display = "none";
    }

    if (this.value === "week2") {
      intro.style.display = "none";
      activities.style.display = "block";
      week1.style.display = "none";
      week2.style.display = "grid";
    }
  });
});

function showActivities() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("activities").style.display = "block";
}

/* ================= WEEK 1 ================= */

function activity1() {
  console.clear();
  alert("Welcome to JavaScript!");
  console.log("This is my first JS program.");
}

function activity2() {
  console.clear();
  let name = "Ariane";
  let age = 24;
  let isStudent = true;

  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Is Student:", isStudent);
  console.log(`My name is ${name}, I am ${age} years old.`);
}

function activity3() {
  console.clear();
  let num1 = 48;
  let num2 = 10;

  console.log("Sum:", num1 + num2);
  console.log("Difference:", num1 - num2);
  console.log("Product:", num1 * num2);
  console.log("Quotient:", num1 / num2);
}

function activity4() {
  console.clear();
  let userName = prompt("Enter your name:");
  let favNumber = prompt("Enter your favorite number:");
  if (userName && favNumber) {
    alert(`Hello ${userName}! Your favorite number is ${favNumber}.`);
  }
}

function activity5() {
    console.clear();

    let age = parseInt(prompt("Enter your age:"));

    if (isNaN(age)) {
        alert("Please enter a valid number.");
    } else if (age >= 18) {
        alert("You are eligible.");
    } else {
        alert("You are not eligible.");
    }
}

function activity6() {
    console.clear();

    console.log("For loop 1 to 10:");
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }

    console.log("While loop 10 to 1:");
    let j = 10;
    while (j >= 1) {
        console.log(j);
        j--;
    }
}

function activity7() {
  console.clear();
  alert("Button Clicked!");
}

/* ================= WEEK 2 ================= */

/* Activity 8 – 3 Different Colors */
let colorIndex = 0;
const colors = ["#1e3c72", "#8e44ad", "#16a085"];

function activity8() {
  console.clear();
  document.body.style.background = colors[colorIndex];
  document.body.style.backgroundImage = "none";
  colorIndex = (colorIndex + 1) % colors.length;
}

/* Activity 9 – Dark Mode Toggle with Background Restore */
let dark = false;

function activity9() {
  console.clear();
  dark = !dark;

  if (dark) {
    document.body.style.background = "#111";
    document.body.style.backgroundImage = "none";
  } else {
    document.body.style.background = "";
    document.body.style.backgroundImage = "url('images.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";
  }
}

function activity10() {
  console.clear();
  const ul = document.getElementById("listArea");
  const li = document.createElement("li");
  li.textContent = "Item " + (ul.children.length + 1);
  ul.appendChild(li);
}

function activity11() {
  console.clear();
  const p = document.getElementById("paraToRemove");
  if (p) p.remove();
}

function activity12() {
  console.clear();
  const text = document.getElementById("activity12Input").value;
  const output = document.getElementById("activity12Output");

  if (text.trim() !== "") {
    output.textContent = "Characters typed: " + text.length;
  } else {
    output.textContent = "Please type something first.";
  }
}

function activity13() {
  console.clear();
  const a = Number(document.getElementById("num1").value);
  const b = Number(document.getElementById("num2").value);
  const output = document.getElementById("activity13Output");

  if (!isNaN(a) && !isNaN(b)) {
    output.textContent = "Sum: " + (a + b);
  } else {
    output.textContent = "Please enter valid numbers.";
  }
}

function activity14() {
  console.clear();
  const img = document.getElementById("myImage");
  const random = Math.floor(Math.random() * 10000);
  img.src = `https://picsum.photos/150?random=${random}`;
}

function activity15() {
  console.clear();
  const input = document.getElementById("todoInput");
  const ul = document.getElementById("todoList");

  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;
  ul.appendChild(li);
  input.value = "";
}