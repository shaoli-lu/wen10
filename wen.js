let pic = document.getElementById("usd");
const apt = "Apartment+for+Rent+";
let myForm = document.getElementById('myForm');
let action_src = "https://www.bing.com/" + "search?q=";

function search(){
   
    action_src = action_src + apt + document.getElementsByName("q")[0].value;
  
    myForm.action = action_src ;
}