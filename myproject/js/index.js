
    (function(){
        /****banner */
        /*
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
    }*/
    /*****  sub-nav *** */
    $(".sub-nav").children().hide();
    $("[data-toggle=nav]").mouseenter(
        function(){
           var id= $(this).attr("data-target");
           $(id).css("zIndex",10).show();
        }
    )
    .mouseleave(
        function(){
            var $a=$(this);
            function task(){
                var id= $a.attr("data-target"); 
                if(!$(id).is(':hover')) $(id).hide()
            }
            var n=setTimeout(task,100)
        }
    )
    $(".sub-nav").mouseleave(
        function (){
            $(this).children().hide();
        }
    )








})()