let registerbtn=document.querySelector(".account-form .registerbtn");
let loginbtn=document.querySelector(".account-form .login-btn");
registerbtn.onclick= () =>{
    registerbtn.classList.add('active');
    loginbtn.classList.remove('active');
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("bar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("bar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}