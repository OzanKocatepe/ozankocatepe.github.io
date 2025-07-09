function ToggleTheme() {

  var themeStylesheet = document.getElementById("theme-style");
  var themeCheckbox = document.getElementById("theme-toggle");

  if (themeCheckbox.checked === true) {
    themeStylesheet.setAttribute("href", "css/dark-theme.css");
  }
  else {
    themeStylesheet.setAttribute("href", "css/light-theme.css");
  }
}
