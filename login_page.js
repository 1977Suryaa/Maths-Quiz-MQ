function login(){
var value1=document.getElementById("username1").value
var value2=document.getElementById("username2").value
    localStorage.setItem("username1",value1)
localStorage.setItem("username2",value2)
window.location="game_page.html"

}