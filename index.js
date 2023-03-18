var color_blue="#0078bb";
var color_yellow="#fbde67";
var login_div=document.getElementById("done");
var icon=document.getElementById("logo_move");
var icon_1=document.getElementById("logo_forw");
var login_text=document.getElementById("login_text");
icon.style.marginRight="4px";
login_text.style.position="absolute";
icon_1.style.zIndex=5;
login_text.style.zIndex=6;
icon.style.zIndex=1;
icon.style.color=color_blue;
var sc=0;
login_div.addEventListener('mouseenter',function(){
    for(var i=0;i<40;i++){
        icon.style.scale=i;
    }
    icon.style.transition="1s ease-in-out";
    icon.style.transform="rotate(100deg)";
    
    login_div.style.color=color_yellow;
    login_text.style.color=color_yellow;
});
function colback(){
    // setTimeout(function(){
        login_text.style.color=color_blue;
        login_div.style.color=color_blue;
    // }, 800);
    
}
login_div.addEventListener('mouseleave',function(){
    icon.style.scale=1;
    icon.style.transform="rotate(-100deg)";
    icon.style.transition="0.5s ease-in-out";
    colback();
});


var user_name=document.getElementById("user_name");
var user_pass=document.getElementById("user_pass");
var cont_notification=document.getElementById("rem");
var noti_cont=document.getElementById("info");
var flag_noti=1;
user_name.addEventListener("keypress",function(event){
    // console.log(event.key);
    if(event.key=="Enter"){
        if(user_name.value==""&&flag_noti==1){
            noti_cont.innerText="Enter User Name First";
            cont_notification.style.backgroundColor="red";
            notify();
        }
        else{
            console.log(user_name.value);
            user_pass.focus();
        }
    }
})

function notify(){
var anim_not = setInterval(popside, 15);
var left=100;
flag_noti=0;
function popside() {
    if (left== 83) {
        setTimeout(()=>{
            popback();
        }, 3000);
        clearInterval(anim_not);
    } else {
        cont_notification.style.left = left + '%';
        left--;
    }
}
var finish_notification=document.getElementById("cut");
finish_notification.addEventListener("click",popback);
function popback(){
    var back=setInterval(() => {
        if (left==101) {
            popback();
            flag_noti=0;
            clearInterval(back);
        } else {
            cont_notification.style.left = left + '%';
            left++;
        }
    }, 15);
}
}
