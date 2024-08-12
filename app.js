function sub(){
    var first = document.getElementById('first').value
    var last = document.getElementById('last').value
    var email = document.getElementById('email').value
    var pass = document.getElementById('pass').value 
   
    if(email === ""){
        alert("Email id is required")
    
    }
    else if(pass === ""){
        alert("Enter your password")
    }
    else{
         
    console.log(first)
    console.log(last)
    console.log(email)
    console.log(pass)
    alert("your form has been submit")
    }
   
}