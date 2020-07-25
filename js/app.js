document.addEventListener("DOMContentLoaded", function() {

    const darkTheme = "file:///home/marcos/Documents/programming/frontend-challenges/social-media-dashboard-with-theme-switcher-master/css/dark-theme.css";
    const lightTheme = "file:///home/marcos/Documents/programming/frontend-challenges/social-media-dashboard-with-theme-switcher-master/css/light-theme.css";
    
    const styles = document.getElementById("styles-theme"); 

    const currentTheme = localStorage.getItem("css");

    styles.href = currentTheme;

    const btnThemeSwitcher = document.getElementById("btn-theme-switcher");


    btnThemeSwitcher.addEventListener("click", () => {
        changeTheme(); 
    });

    const changeTheme = () => {
        if(styles.href === darkTheme) {
            styles.href = lightTheme;
        } else {
            styles.href = darkTheme;
        }

        localStorage.clear();
        localStorage.setItem("css", styles.href);
    }
}); 

