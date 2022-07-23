document.querySelector("form").addEventListener("submit",myfun)
let Array=JSON.parse(localStorage.getItem("signup")) || []
function myfun(event)
{
    event.preventDefault();
    console.log("answerde")
   let obj={
    email : document.querySelector("#eml").value,
    password : document.querySelector("#Psswd").value,
    name : document.querySelector("#name").value,
   } 
   Array.push(obj);
   localStorage.setItem("signup",JSON.stringify(Array))
   if(obj.email=="" || obj.password=="" || obj.name==""){
    alert("Fill all Input first")
   }
   else{
    alert("Sign Up Successfull")
    window.location.href="login.html"
   }
}