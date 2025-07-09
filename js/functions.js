/**
  * Toggles between the light theme and dark theme style sheets.
  * Automatically called whenever the theme toggle is flipped.
  */
function ToggleTheme() {
  const themeCheckbox = document.getElementById("theme-toggle");

  if (themeCheckbox.checked == true) {
    SetDarkTheme();
  }
  else {
    SetLightTheme();
  }
}

/**
  * Sets the theme to dark.
  */
function SetDarkTheme() {
  const themeCheckbox = document.getElementById("theme-toggle");
  const themeStylesheet = document.getElementById("theme-style");
  
  themeCheckbox.checked = true;
  themeStylesheet.setAttribute("href", "css/dark-theme.css");
  SetCookie("theme", "dark")
}

/**
  * Sets the theme to light.
  */
function SetLightTheme() {
  const themeCheckbox = document.getElementById("theme-toggle");
  const themeStylesheet = document.getElementById("theme-style");

  themeCheckbox.checked = false;
  themeStylesheet.setAttribute("href", "css/light-theme.css");
  SetCookie("theme", "light")
}

/**
  * Checks what theme is stored in the cookies and uses that theme.
  * If the cookie doesn't exist, defaults to dark mode.
  */
function CheckTheme() {
  // If the cookie already exists, swap to that theme.
  if (CheckCookie("theme")) {
    let theme = GetCookie("theme");

    if (theme == "light") {
      SetLightTheme();
    }
    else {
      SetDarkTheme();
    }
  }
  // If the cookie doesn't exist, default to dark mode.
  else {
    SetDarkTheme();
  }
}

/**
  * Sets the value of a desired cookie.
  *
  * @param name the name of the cookie.
  * @param value the value of the cookie.
  * @param days the number of days until the cookie expires.
  * @param path the path to store the cookie in.
  */
function SetCookie(name, value, days=365, path="/") {
  let cookie = name + "=" + value;
  
  d = new Date();
  d.setTime(d.getTime() + days*24*60*60*1000) // Date works with milliseconds.

  document.cookie = cookie + "; expires=" + d + "; path=" + path;
}

/**
  * Gets the value of a desired cookie.
  *
  * @param name the name of the cookie.
  * @return the value of the cookie, or null if it doesn't exist.
  */
function GetCookie(name) {
  let cookies = document.cookie;
  
  // Forms an array of the individual cookies.
  cookies = cookies.split(";");

  for (let cookie of cookies) {
    cookie = cookie.split("=");
    
    // If we have found the desired cookie, return its value.
    if (cookie[0] == name) {
      return cookie[1];
    }
  }
  
  // If the cookie is not found, return null.
  return null;
}

/**
  * Checks if a desired cookie exists or not.
  *
  * @param name the name of the cookie.
  * @return a boolean cotaining whether the cookie exists.
  */
function CheckCookie(name) {
  let cookie = GetCookie(name);
  
  if (cookie == null) {
    return false;
  }
  else {
    return true;
  }
}
