
document.addEventListener("DOMContentLoaded", function () {
    const localStorageTheme = localStorage.getItem("theme");
    const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
    
    let currentThemeSetting = calculateSettingAsThemeString({ 
        localStorageTheme, systemSettingDark 
    });

    document.querySelector("html").setAttribute("data-theme", currentThemeSetting);

    let checkBox = document.querySelector("[data-theme-toggle]")

    if(currentThemeSetting === "dark") {
        checkBox.setAttribute("checked", "checked")
    }

    checkBox.addEventListener("click", () => {

        let theme = document.querySelector("html").getAttribute("data-theme")

        if(theme === "light") {
            theme = "dark"
        } else {
            theme = "light"
        }

        // update theme attribute on HTML to switch theme in CSS
        document.querySelector("html").setAttribute("data-theme", theme);

        // update in local storage
        localStorage.setItem("theme", theme);
        
    });
})

function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
      return localStorageTheme;
    }
  
    if (systemSettingDark.matches) {
      return "dark";
    }
  
    return "light";
  }
  
 