const container = document.querySelector(".container");
console.log(container);

// TODO 1.
const h1_1 = document.querySelectorAll("h1")[0];
console.log(h1_1);

// TODO 2.
const gambar = document.querySelector(".container img");
console.log(gambar);

// TODO 3.
const h1_2 = document.querySelectorAll("h1")[1];
console.log(h1_2);

// TODO 4.
const pilih = document.getElementById("pilih");
const btnGamau = document.querySelector("#gamau");
const btnMau = document.querySelector("#mau");
console.log(pilih);
console.log(btnGamau);
console.log(btnMau);

// TODO 5. Logika

// ? jika mau
btnMau.addEventListener("click", function () {
  alert("Hari ini kita pacaran yaa");
  h1_1.innerHTML = "";
  gambar.setAttribute("src", "img4.gif");
  h1_2.innerHTML = "Aku Sayang Kamu";
  pilih.remove();
  const gambar2 = document.createElement("img");
  gambar2.setAttribute("src", "img3.gif");
  container.appendChild(gambar2);
  gambar2.style.marginTop = "-20px";
});

// ? jika gamau
btnGamau.addEventListener("click", function () {
  var i = Math.floor(Math.random() * 300 + 2);
  var j = Math.floor(Math.random() * 80) + btnMau.offsetTop;
  btnGamau.style.position = "absolute";
  console.log("left:" + i);
  console.log("top:" + j);
  btnGamau.style.left = i + "px";
  btnGamau.style.top = j + "px";
});

// function gamau(id) {
//   var gamau = document.getElementById("mau");
//   var i = Math.floor(Math.random() * 200 + 2);
//   var j = Math.floor(Math.random() * 80) + gamau.offsetTop;
//   id.style.left = i + "px";
//   id.style.top = j + "px";
// }
