function Register(event) {
    alert("working")
    event.preventDefault();

    var Name = document.getElementById("username").value;
    console.log(Name)
    var Email = document.getElementById("useremail").value;
    console.log(Email)
    var Password = document.getElementById("userpassword").value;
    console.log(Password)
    var ConfirmPassword = document.getElementById("userconfirmpassword").value;
    console.log(ConfirmPassword)


    if(Name && Email && Password && ConfirmPassword){
        if(Password.length >=8 && ConfirmPassword.length >=8){
            if(Password == ConfirmPassword){

                var Ls = JSON.parse(localStorage.getItem("Users")) || [];
                var flag = false;
                for (var i=0;i<Ls.length;i++){
                    if(Ls[i].userEmail == Email){
                        flag = true
                    }
                }
                if(!flag) {
                    var userdata = {userName:Name, userEmail:Email, userPassword:Password, userConfirmPassword:ConfirmPassword}
                    Ls.push(userdata);
                    localStorage.setItem("Users",JSON.stringify(Ls));
                    alert("Register Successfull");
                    window.location.href = './Login.html'
                    document.getElementById("userName").value="";
                    document.getElementById("userEmail").value="";
                    document.getElementById("userPassword").value="";
                    document.getElementById("userConfirmPassword").value="";
                }

            }else {
                ("Password not matched")
            }
        }else {
            ("Minimum 8 charcters require")
        }
    }else {
        ("All fields are mandatory")
    }
}