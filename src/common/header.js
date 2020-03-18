$(function(){
    let $navBar = $(".Header .navBar");
    let $toggle = $("#menu_toggle");
    let toggle = false;
    
    $toggle.on("click",function(){
        toggle = !toggle
        if(toggle){
            $toggle.children().addClass("closeBtn");
            $navBar.css("height",350);
        }else{
            $toggle.children().removeClass("closeBtn");
            $navBar.css("height",0);
        }
    })

    $navBar.find(".col-lg .button").on("click",function(){
        if($(this).hasClass("act")){
            $(this).removeClass("act");
            $(this).siblings(".child").css("height",0);
        }else{
            $(this).addClass("act");
            $(this).siblings(".child").css("height","auto");
        }
    })

    // $(window).resize(function(){
    //     toggle = false;
    //     $toggle.children().removeClass("closeBtn");
    //     $navBar.css("height","auto");
    // })
})