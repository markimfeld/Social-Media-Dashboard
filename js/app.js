document.addEventListener("DOMContentLoaded", function() {

    const darkModeCircle = "circle-dark-mode";
    const lightModeCircle = "circle-light-mode";

    const darkTheme = "dark";
    const lightTheme = "light";

    const body = document.getElementsByTagName("body")[0];

    const labelToggle = document.getElementById("labelToggle");

    const circle = document.getElementById("circle");

    const currentTheme = localStorage.getItem("theme");

    console.log(currentTheme);
    
    if(currentTheme != null) {
        const oldTheme = body.getAttribute("class");
        body.classList.replace(oldTheme, currentTheme);
    }

    const btnThemeSwitcher = document.getElementById("btn-theme-switcher");

    btnThemeSwitcher.addEventListener("click", () => {
        changeTheme(); 
    });

    const changeTheme = () => {
        const currentTheme = body.getAttribute('class');
        let newTheme = currentTheme;

        if(currentTheme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            newTheme = lightTheme;
            labelToggle.innerText = "Light Mode"
            circle.classList.replace(darkModeCircle, lightModeCircle);
        } else {
            body.classList.replace(lightTheme , darkTheme);
            newTheme = darkTheme;
            labelToggle.innerText = "Dark Mode"
            circle.classList.replace(lightModeCircle, darkModeCircle);
        }
        localStorage.clear();
        localStorage.setItem("theme", newTheme);
    }
}); 
