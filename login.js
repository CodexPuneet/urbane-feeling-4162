document.querySelector("form").addEventListener("submit",myfun)
let Array=JSON.parse(localStorage.getItem("signup")) || []
function myfun(event)
{
    event.preventDefault();
    let email = document.querySelector("#eml").value;
    let password = document.querySelector("#psswd").value; 
    if(email=="" || password=="")
    {
        alert("Input First")
    }
    else{
        let count=false;
        for(i=0;i<Array.length;i++)
        {
           if(Array[i].email==email && Array[i].password==password)
           {
            count=true;
           }
        }
        if(count== false)
        {
            alert("Wrong Credintials")
        }
        else
        {
            alert("Sign In Sucessfully")
            window.location.href="homepage.html"
        }
    }
}