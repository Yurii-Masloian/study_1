/*document.querySelector("#search-form").style = "display: none";
document.querySelector("#search-button").addEventListener("click", function() {
  var searchbar = document.querySelector("#search-form");
  if (searchbar.style === "display: none") {
      searchbar.style = "display: block";
  } else {
      searchbar.style = "display: none";
  }
});*/




document.querySelector("#close-icon").addEventListener("click", function() {
  var searchbar = document.querySelector("#search-form");
  searchbar.style = "display: none";
});

document.querySelector("#search-button").addEventListener("click", function() {
  var searchbar = document.querySelector("#search-form");
  searchbar.style = "display: block";
});

document.querySelector("#register").addEventListener("click", function() {
  alert("Форма регистрации");

});

document.querySelector("#readMore_button").addEventListener("click", function() {
  alert("Проверка кнопки");

});
document.querySelector("#readMore_button2").addEventListener("click", function() {
  alert("Проверка кнопки");

});

document.querySelector("#subscribe").addEventListener("click", function() {
  alert("Проверка кнопки");

});

subscribe