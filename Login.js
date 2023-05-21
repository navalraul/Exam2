function Login(event) {
    alert("working")
    event.preventDefault();

    var userEmail = document.getElementById("useremail").value;
    console.log(userEmail);
    var userPassword = document.getElementById("userpassword").value;
    console.log(userPassword);

    var Ls = JSON.parse(localStorage.getItem("Users"));
    var currentUsers;
    var flag = false;
    for(var i=0;i<Ls.length;i++){
        if(Ls[i].userEmail == userEmail && Ls[i].userPassword == userPassword){
            flag = true
            currentUsers = Ls[i]
        }
    }
    if(flag == true) {
        localStorage.setItem("currentUsers",JSON.stringify(Ls));
        alert("Login successful")
        window.location.href = './Home.html'
    }else{
        ("Credential not matched")
    }
}