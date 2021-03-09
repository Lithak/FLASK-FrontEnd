//LOADER
var myVar;
function myLoader() {
  myVar = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

//NAVIGATION
var count=0;
function openNav() {
  if(count==0){
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("Navicon").innerHTML = "&#9874;";
  if(document.getElementById("logo").style.color = "#000"){
  document.getElementById("logo").style.color = "#fff";
  }
  count++;
}else{
document.getElementById("Navicon").innerHTML = "&#9776;";
document.getElementById("mySidenav").style.width = "0";
count=0;
}
}


//SCROLL EVENT
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
  document.getElementById("Navicon").style.color = "#000";
  document.getElementById("Navicon").style.borderColor = "#000";
  if(document.getElementById("mySidenav").style.width == "250px"){
  document.getElementById("logo").style.color = "#fff";
  }else{
    document.getElementById("logo").style.color = "#000";
    
    
  }}else{
  document.getElementById("logo").style.color = "#fff";
  document.getElementById("Navicon").style.color = "#fff";
   document.getElementById("Navicon").style.borderColor = "#fff";
  }
}