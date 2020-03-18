import 'bootstrap/scss/bootstrap.scss';
import 'animate.css';
import './index.scss'
import '../common/header';

$(function(){
    const parent = $(".News_Contact .news_items");
        let newItem = parent.children();
        const newSq = $(".footer .new_sq");
        let timer = null;
        let counter = 0;
        let bgCounter = 0;
        const img = $(".Banner .content .img");
        const bgContent = $(".Banner .content");
        const slideInArr = ["bounceInLeft","bounceInRight","bounceInDown"];
    
        const about = $(".About");
        const strength = $(".Strength");
        const sevices = $(".Sevices");
        const cases = $(".Case");
        let wTop=$(window).height();
        let dTop = $(document).scrollTop();
        let aboutTop,strengthTop,sevicesTop,casesTop;
        setTimeout(function(){
            aboutTop=about.offset().top;
            strengthTop = strength.offset().top;
            sevicesTop = sevices.offset().top;
            casesTop = cases.offset().top;
            aboutAni();
            strengthAni();
            sevicesAni();
            casesAni();
        },100)
        
        bannerResize();
        $(window).resize(function(){
            bannerResize();
            wTop=$(window).height()
            aboutTop=about.offset().top;
            strengthTop = strength.offset().top;
            sevicesTop = sevices.offset().top;
            casesTop = cases.offset().top;
        })
        
        $(window).scroll(function(){
            dTop = $(document).scrollTop();
            aboutAni();
            strengthAni();
            sevicesAni();
            casesAni();
          });
    
        setInterval(autoPlayBg,5000)
        cutAniWz(0);
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
            let ch = img.eq(0).height()
            bgContent.height(ch);
            
            for(let i=0;i<img.length;i++){
                let wz = img.eq(i).find(".wz")
                let h = wz.outerHeight();
                wz.css({"marginTop":(ch/2-h/2)})
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
            cutAniWz(index)
        }
    
        function cutAniWz(index){
            setTimeout(function(){
                let lastIndex = index?index-1:slideInArr.length-1;
                img.eq(lastIndex).children(".ani").removeClass(slideInArr[lastIndex]);
                img.eq(index).children(".ani").addClass(slideInArr[index]);
            },1000);
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
    
        function aboutAni(){
            console.log("ab--d:"+dTop+" wTop:"+wTop+" aboutTop:"+aboutTop);
            if(dTop+wTop-200 > aboutTop){
                about.find(".ani").addClass("fadeInLeft");
                about.find(".ani1").addClass("fadeInRight");
            }
        }
    
        function strengthAni(){
            console.log("strengthTop--d:"+dTop+" wTop:"+wTop+" aboutTop:"+strengthTop);
            if(dTop+wTop-300 > strengthTop){
                strength.find(".ani").addClass("fadeInUp");
            }
        }
    
        function sevicesAni(){
            console.log("sevicesTop--d:"+dTop+" wTop:"+wTop+" aboutTop:"+sevicesTop);
            if(dTop+wTop-300 > sevicesTop){
                sevices.find(".ani").addClass("lightSpeedIn");
            }
        }
        function casesAni(){
            console.log("casesTop--d:"+dTop+" wTop:"+wTop+" aboutTop:"+casesTop);
            if(dTop+wTop-300 > casesTop){
                cases.find(".ani").addClass("bounceIn");
            }
        }
  
})