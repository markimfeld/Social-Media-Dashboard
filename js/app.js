document.addEventListener("DOMContentLoaded", function() {

    const darkTheme = "dark";
    const lightTheme = "light";

    const body = document.getElementsByTagName("body")[0];

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
        } else {
            body.classList.replace(lightTheme , darkTheme);
            newTheme = darkTheme;
        }
        localStorage.clear();
        localStorage.setItem("theme", newTheme);
    }
}); 
