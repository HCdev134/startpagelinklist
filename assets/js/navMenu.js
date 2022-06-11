const toggleButton = document.getElementsByClassName("page-nav-togglebtn")[0]; 

const navbarLinks = document.getElementsByClassName("page-nav-links")[0]; 


toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
    navbarLinks.classList.add("page-menulink-animation")
});