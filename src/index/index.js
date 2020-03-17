import 'bootstrap/scss/bootstrap.scss';
import 'animate.css';
import './index.scss'

$(function(){
    let parent = $(".News_Contact .news_items");
    let newItem = parent.children();
    let newSq = $(".footer .new_sq");
    let timer = null;
    let counter = 0;
    let bgCounter = 0;
    let img = $(".Banner .content .img");
    let bgContent = $(".Banner .content");
    
    bannerResize();

    $(window).resize(function(){
        bannerResize();
    })

    
    setInterval(autoPlayBg,5000)
    if(newItem.length>0){
        newItem.map((index)=>{
            let dom = "";
            if(index === 0){
                newItem.eq(index).addClass("active");
                dom=`<div class="sq active"></div>`
            }else{
                dom=`<div class="sq"></div>`
            }
            if(newItem.length>1){
                newSq.append(dom)
                if(!timer) timer = setInterval(autoPlay,5000)
            }
            
        })
    }

    function bannerResize(){
        bgContent.height(img.eq(0).height());
        for(let i=0;i<img.length;i++){
            let wz = img.eq(i).children(".wz")
            let h = wz.outerHeight();
            let w = wz.outerWidth();
            wz.css({"marginTop":-(h/2),"marginLeft":-(w/2)})
        }
    }

    function autoPlay(){
        counter++;
        if(counter>=newItem.length){
            counter=0;
        }
        cutAni(counter);
    }

    function cutAni(index){
        newSq.children().removeClass("active");
        newItem.removeClass("active");
        newSq.children().eq(index).addClass("active");
        newItem.eq(index).addClass("active");
    }


    function autoPlayBg(){
        bgCounter++;
        if(bgCounter>=img.length){
            bgCounter=0;
        }
        cutAniBg(bgCounter);
    }

    function cutAniBg(index){
        img.removeClass("active");
        img.eq(index).addClass("active");
    }


    newSq.on("click",".sq",function(){
        clearInterval(timer);
        timer = setInterval(autoPlay,5000)
        if($(this).hasClass("active")) return;
        newSq.children().removeClass("active");
        newItem.removeClass("active");
        let counter = $(this).index();
        cutAni(counter);
    })
})