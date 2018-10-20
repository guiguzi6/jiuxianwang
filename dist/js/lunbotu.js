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
            $(".bbigUl2").css({"left":2*-268},1000)
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

    $(".indexTuanList1").mouseenter(function(){
        clearInterval(timer)
    })
    $(".btnBox .btnBg2").mouseenter(function(){
        clearInterval(timer)
    })
    $(".indexTuanList1").mouseout(function(){
        clearInterval(timer)
        timer=setInterval(rightFunc,2000)
    })
})

