// 点击事件
var loginbtn = document.getElementsByClassName("main-right-tab")[0].children;
var login = document.getElementsByClassName("login");
for (var i = 0; i < login.length; i++) {
    login[i].style.display = "none";
    login[0].style.display = "block";
}
for (var i = 0; i < loginbtn.length; i++) {
    loginbtn[i].onclick = function () {
        for (var j = 0; j < login.length; j++) {
            login[j].style.display = "none";
        }
        login[this.dataset.num].style.display = "block";
    }
}
// 登录交互
document.forms[0].onsubmit = function (e) {
    // 取消表单提交默认跳转事件
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        console.log(xhr)
        if(xhr.readyState == 4 && xhr.status == 200){
            alert(xhr.response);
        }
        if(xhr.response == "登录成功"){
            location.href = "./index.html"
        }
    }
    xhr.open("POST",this.action);
    // 5.发送
    xhr.send(new FormData(this)); 
}