// 今日推荐轮播图
$(document).ready(function(){
    var nowimg=0;
    var timer=null;
    // 克隆第一张图片，并且放到最后
    $(" bigUl1 li:first").clone().appendTo('.bigUl1')
    //右按钮业务
    $(".you").click(rightFunc)
        function rightFunc(){

        if(nowimg<2){
            nowimg++
            $(".bigUl1").animate({"left":nowimg*-268},1000)
        }else{
            nowimg=0
            $(".bigUl1").animate({"left":3*-268},1000,function(){
                $(".bigUl1").css("left",0)

            })
        }
        $(".btnBg1 em").eq(nowimg).addClass('on').siblings().removeClass('on')

    }
    // 左按钮业务
    $(".zuo").click(function(){
        if(nowimg>0){
            nowimg--
            $(".bigUl1").animate({"left":nowimg*-268},1000)
        }else{
            nowimg=2
            $(".bbigUl1").css({"left":3*-268},1000)
            $(".bigUl1").animate({"left":nowimg*-268},1000)
        }
        $(".btnBg1 em").eq(nowimg).addClass('on').siblings().removeClass('on')
    })
    // 小圆点业务
    $(".btnBg1 em").click(function (){
         nowimg=$(this).index()
        $(".btnBg1 em").eq(nowimg).addClass("on").siblings().removeClass("on")
         $(".bigUl1").animate({"left":nowimg*-268}, 1000)
    });

    // 自动轮播

    timer=setInterval(rightFunc,2000)

    $(".indexTuanList").mouseenter(function(){
        clearInterval(timer)
    })
    $(".btnBox .btnBg1").mouseenter(function(){
        clearInterval(timer)
    })
    $(".indexTuanList").mouseout(function(){
        clearInterval(timer)
        timer=setInterval(rightFunc,2000)
    })
})


// 大坛专区轮播图
$(document).ready(function(){
    var nowimg=0;
    var timer=null;
    // 克隆第一张图片，并且放到最后
    $(" bigUl2 li:first").clone().appendTo('.bigUl2')
    //右按钮业务
    $(".you").click(rightFunc)
        function rightFunc(){

        if(nowimg<1){
            nowimg++
            $(".bigUl2").animate({"left":nowimg*-268},1000)
        }else{
            nowimg=0
            $(".bigUl2").animate({"left":2*-268},1000,function(){
                $(".bigUl2").css("left",0)

            })
        }
        $(".btnBg2 em").eq(nowimg).addClass('on').siblings().removeClass('on')

    }
    // 左按钮业务
    $(".zuo").click(function(){
        if(nowimg>0){
            nowimg--
            $(".bigUl2").animate({"left":nowimg*-268},1000)
        }else{
            nowimg=1
            $(".bigUl2").css({"left":2*-268},1000)
            $(".bigUl2").animate({"left":nowimg*-268},1000)
        }
        $(".btnBg2 em").eq(nowimg).addClass('on').siblings().removeClass('on')
    })
    // 小圆点业务
    $(".btnBg2 em").click(function (){
         nowimg=$(this).index()
        $(".btnBg2 em").eq(nowimg).addClass("on").siblings().removeClass("on")
         $(".bigUl2").animate({"left":nowimg*-268}, 1000)
    });

    // 自动轮播

    timer=setInterval(rightFunc,2000)

    $(".indexAdFocusList1").mouseenter(function(){
        clearInterval(timer)
    })
    $(".btnBox .btnBg2").mouseenter(function(){
        clearInterval(timer)
    })
    $(".indexAdFocusList1").mouseout(function(){
        clearInterval(timer)
        timer=setInterval(rightFunc,2000)
    })
})

// 优惠推荐轮播图

$(function(){
    var nowing = 0;
    var timer = null;
    $(".receBoxs  .raceList:first").clone().appendTo(".receBoxs");

    $(".raceListWrap .raceRight").click(function(){
        if(nowing < 2){
            nowing++
            $(".raceListWrap .receBoxs").animate({"left":nowing*-1190},1000);    
        }
        $(".rightNavBox span").eq(nowing).addClass("on").siblings().removeClass("on")
    })

    $(".raceListWrap .raceLeft").click(function(){
        if(nowing > 0){
            nowing--
            $(".raceListWrap .receBoxs").animate({"left":nowing*1190},1000);    
        }
        $(".rightNavBox span").eq(nowing).addClass("on").siblings().removeClass("on")
    })


    $(".rightNavBox span").click(function (){
        nowimg=$(this).index()
       $(".rightNavBox span").eq(nowimg).addClass("on").siblings().removeClass("on")
        $(".raceListWrap .receBoxs").animate({"left":nowimg*-1190}, 1000)
   });
})


//白酒馆轮播图
$(function(){
    var nowimg=0;
    var timer=null;
    // 克隆第一张图片，并且放到最后
    $(" bigUl3 li:first").clone().appendTo('.bigUl3')
    //右按钮业务
    $(".you").click(rightFunc)
        function rightFunc(){

        if(nowimg<2){
            nowimg++
            $(".bigUl3").animate({"left":nowimg*-210},1000)
        }else{
            nowimg=0
            $(".bigUl3").animate({"left":3*-210},1000,function(){
                $(".bigUl3").css("left",0)

            })
        }
        $(".btnBg3 em").eq(nowimg).addClass('on').siblings().removeClass('on')

    }
    // 左按钮业务
    $(".zuo").click(function(){
        if(nowimg>0){
            nowimg--
            $(".bigUl3").animate({"left":nowimg*-210},1000)
        }else{
            nowimg=2
            $(".bigUl3").css({"left":3*-210},1000)
            $(".bigUl3").animate({"left":nowimg*-210},1000)
        }
        $(".btnBg3 em").eq(nowimg).addClass('on').siblings().removeClass('on')
    })
    // 小圆点业务
    $(".btnBg3 em").click(function (){
         nowimg=$(this).index()
        $(".btnBg3 em").eq(nowimg).addClass("on").siblings().removeClass("on")
         $(".bigUl3").animate({"left":nowimg*-210}, 1000)
    });

    // 自动轮播

    timer=setInterval(rightFunc,2000)

    $(".bannerSlier .imgBox1").mouseenter(function(){
        clearInterval(timer)
    })
    $(".btnBox .btnBg3").mouseenter(function(){
        clearInterval(timer)
    })
    $(".bannerSlier .imgBox1").mouseout(function(){
        clearInterval(timer)
        timer=setInterval(rightFunc,2000)
    })
})

// 葡萄酒馆轮播图
$(function(){
    var nowimg = 0;
    var timer = 0;

    $(".bigUl4 li:first").clone().appendTo(".bigUl4")

    $(".you").click(rightFunc)
        function rightFunc(){

        if(nowimg<1){
            nowimg++
            $(".bigUl4").animate({"left":nowimg*-210},1000)
        }else{
            nowimg=0
            $(".bigUl4").animate({"left":2*-210},1000,function(){
                $(".bigUl4").css("left",0)

            })
        }
        $(".btnBg4 em").eq(nowimg).addClass('on').siblings().removeClass('on')

    }
    // 左按钮业务
    $(".zuo").click(function(){
        if(nowimg>0){
            nowimg--
            $(".bigUl4").animate({"left":nowimg*-210},1000)
        }else{
            nowimg=1
            $(".bigUl4").css({"left":2*-210},1000)
            $(".bigUl4").animate({"left":nowimg*-210},1000)
        }
        $(".btnBg4 em").eq(nowimg).addClass('on').siblings().removeClass('on')
    })
    // 小圆点业务
    $(".btnBg4 em").click(function (){
         nowimg=$(this).index()
        $(".btnBg4 em").eq(nowimg).addClass("on").siblings().removeClass("on")
         $(".bigUl4").animate({"left":nowimg*-210}, 1000)
    });

    // 自动轮播

    timer=setInterval(rightFunc,2000)

    $(".bannerSlier .imgBox2").mouseenter(function(){
        clearInterval(timer)
    })
    $(".btnBox .btnBg4").mouseenter(function(){
        clearInterval(timer)
    })
    $(".bannerSlier .imgBox2").mouseout(function(){
        clearInterval(timer)
        timer=setInterval(rightFunc,2000)
    })

})

// 洋酒馆轮播图
$(function(){
    var nowimg = 0;
    var timer = 0;

    $(".bigUl5 li:first").clone().appendTo(".bigUl5")

    $(".you").click(rightFunc)
        function rightFunc(){

        if(nowimg<1){
            nowimg++
            $(".bigUl5").animate({"left":nowimg*-210},1000)
        }else{
            nowimg=0
            $(".bigUl5").animate({"left":2*-210},1000,function(){
                $(".bigUl5").css("left",0)

            })
        }
        $(".btnBg5 em").eq(nowimg).addClass('on').siblings().removeClass('on')

    }
    // 左按钮业务
    $(".zuo").click(function(){
        if(nowimg>0){
            nowimg--
            $(".bigUl5").animate({"left":nowimg*-210},1000)
        }else{
            nowimg=1
            $(".bigUl5").css({"left":2*-210},1000)
            $(".bigUl5").animate({"left":nowimg*-210},1000)
        }
        $(".btnBg5 em").eq(nowimg).addClass('on').siblings().removeClass('on')
    })
    // 小圆点业务
    $(".btnBg5 em").click(function (){
         nowimg=$(this).index()
        $(".btnBg5 em").eq(nowimg).addClass("on").siblings().removeClass("on")
         $(".bigUl5").animate({"left":nowimg*-210}, 1000)
    });

    // 自动轮播

    timer=setInterval(rightFunc,2000)

    $(".bannerSlier .imgBox3").mouseenter(function(){
        clearInterval(timer)
    })
    $(".btnBox .btnBg5").mouseenter(function(){
        clearInterval(timer)
    })
    $(".bannerSlier .imgBox3").mouseout(function(){
        clearInterval(timer)
        timer=setInterval(rightFunc,2000)
    })

})

// 养生轮播图
$(function(){
    var nowimg = 0;
    var timer = 0;

    $(".bigUl6 li:first").clone().appendTo(".bigUl6")

    $(".you").click(rightFunc)
        function rightFunc(){

        if(nowimg<3){
            nowimg++
            $(".bigUl6").animate({"left":nowimg*-210},1000)
        }else{
            nowimg=0
            $(".bigUl6").animate({"left":4*-210},1000,function(){
                $(".bigUl6").css("left",0)

            })
        }
        $(".btnBg6 em").eq(nowimg).addClass('on').siblings().removeClass('on')

    }
    // 左按钮业务
    $(".zuo").click(function(){
        if(nowimg>0){
            nowimg--
            $(".bigUl6").animate({"left":nowimg*-210},1000)
        }else{
            nowimg=3
            $(".bigUl6").css({"left":4*-210},1000)
            $(".bigUl6").animate({"left":nowimg*-210},1000)
        }
        $(".btnBg6 em").eq(nowimg).addClass('on').siblings().removeClass('on')
    })
    // 小圆点业务
    $(".btnBg6 em").click(function (){
         nowimg=$(this).index()
        $(".btnBg6 em").eq(nowimg).addClass("on").siblings().removeClass("on")
         $(".bigUl6").animate({"left":nowimg*-210}, 1000)
    });

    // 自动轮播

    timer=setInterval(rightFunc,2000)

    $(".bannerSlier .imgBox4").mouseenter(function(){
        clearInterval(timer)
    })
    $(".btnBox .btnBg6").mouseenter(function(){
        clearInterval(timer)
    })
    $(".bannerSlier .imgBox4").mouseout(function(){
        clearInterval(timer)
        timer=setInterval(rightFunc,2000)
    })

})

// 食品轮播图
$(function(){
    var nowimg = 0;
    var timer = 0;

    $(".bigUl7 li:first").clone().appendTo(".bigUl7")

    $(".you").click(rightFunc)
        function rightFunc(){

        if(nowimg<1){
            nowimg++
            $(".bigUl7").animate({"left":nowimg*-210},1000)
        }else{
            nowimg=0
            $(".bigUl7").animate({"left":2*-210},1000,function(){
                $(".bigUl7").css("left",0)

            })
        }
    }
    // 左按钮业务
    $(".zuo").click(function(){
        if(nowimg>0){
            nowimg--
            $(".bigUl7").animate({"left":nowimg*-210},1000)
        }else{
            nowimg=1
            $(".bigUl7").css({"left":2*-210},1000)
            $(".bigUl7").animate({"left":nowimg*-210},1000)
        }
    }) 

    // 自动轮播

    timer=setInterval(rightFunc,2000)

    $(".bannerSlier .imgBox5").mouseenter(function(){
        clearInterval(timer)
    })
    $(".bannerSlier .imgBox5").mouseout(function(){
        clearInterval(timer)
        timer=setInterval(rightFunc,2000)
    })
})


// logo墙轮播图
$(function(){
    var nowimg = 0;
    var timer = 0;

    $(".logoFirstbd ul:first").clone().appendTo(".logoFirstbd")

    $(".nextPage").click(rightFunc)
        function rightFunc(){

        if(nowimg<1){
            nowimg++
            $(".logoFirstbd").animate({"left":nowimg*-1168},1000)
        }else{
            nowimg=0
            $(".logoFirstbd").animate({"left":2*-1168},1000,function(){
                $(".logoFirstbd").css("left",0)

            })
        }
    }
    // 左按钮业务
    $(".prevPage").click(function(){
        if(nowimg>0){
            nowimg--
            $(".logoFirstbd").animate({"left":nowimg*-1168},1000)
        }else{
            nowimg=1
            $(".logoFirstbd").css({"left":2*-1168},1000)
            $(".logoFirstbd").animate({"left":nowimg*-1168},1000)
        }
    }) 
})