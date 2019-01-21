
    $(function(){
        /****banner ******/
    var $Ul=$("[data-toggle=banner]");
    function banner(){
    var $li=$("li.open");
    $li.removeClass("open");
    if($li.next().is("li")){
        $li.next().addClass("open") 
    }else{
        $Ul.children(":first")
        .addClass("open")
    }
 }
    var n=setInterval(banner,1000)
    $Ul.mouseenter(function(){
        clearInterval(n)
    })
    $Ul.mouseleave(function(){
        n=setInterval(banner,3000)
    })
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







    })
