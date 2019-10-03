// javascript
// Variables
var cont_sidebar = document.getElementById("cont_sidebar");
var btn_settings = document.getElementById("cont_settings");
console.log(cont_sidebar);
console.log(btn_settings); //not functioning. not showing up in console

//event listeners
btn_settings.addEventListener("click", function(){
    console.log("User clicked on btn_settings");
    cont_sidebar.classList.toggle("active");
});

cont_sidebar.addEventListener("dblclick", function(){
    console.log("User double clicked on cont_sidebar");
    cont_sidebar.classList.toggle("active");
});


