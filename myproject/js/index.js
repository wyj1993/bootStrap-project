
    (function(){
        // 轮播图
    function banner(){
    var li=document.querySelector(".banner>.banner_left>ul:first-child>li.open");
    li.className="";
    if(li.nextElementSibling!=null){
        li.nextElementSibling.className="open";
    }else{
        li.parentElement.children[0].className="open";
    }
 }
    var n=setInterval(banner,8000)
    var bannerUl=document.querySelector(".banner>.banner_left>ul:first-child");
    bannerUl.onmouseover=function(){
        clearInterval(n);
    }
    bannerUl.onmouseout=function(){
        n=setInterval(banner,3000);
    }
})()