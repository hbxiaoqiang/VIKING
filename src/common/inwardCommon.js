$(function(){
    let $banner = $(".Banner .tit");
    let $conent = $banner.children();
    let h = $conent.height();
    let w = $conent.width();

    $(window).resize(function(){
        h = $conent.height();
        w = $conent.width();
        pos(h,w);
    });
    pos(h,w);
    function pos(h,w){
        $conent.css({marginTop:-(h/2),marginLeft:-(w/2),top:"50%",
            left:"50%"})
    }
})