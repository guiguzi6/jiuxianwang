var num = 0;
var spns = $(".smallBtn .smallUl li");
$(function() {

    // //当鼠标移至menu上时让弹窗显示
    // $(".menu").mouseover(function() {
    //     $(".bt").css("bottom", 0);
    // });
    // //当鼠标移至menu上时让弹窗消失
    // $(".menu").mouseleave(function() {
    //     $(".bt").css("bottom", "-40px");
    // });
    //当鼠标悬浮至span上时，停止计时器并获取当前位置下标
    $(".smallBtn .smallUl li").mouseover(function() {
        clearInterval(timer);
        var n = $(this).index(); //获取当前下标并赋值给n
        fx(n);
    })
    //当鼠标离开时 启动定时器
    $(".smallBtn .smallUl li").mouseleave(function() {
        timer = setInterval(fun, 3000);
    })

    //鼠标移入ul停止
    $(".bigImg .ban_cter").mouseover(function() {
        clearInterval(timer);
    })
    //当鼠标离开时 启动定时器
    $(".bigImg .ban_cter").mouseleave(function() {
        timer = setInterval(fun, 3000);
    })

    function fx(n) {
        //这里提供两种实现方式
        $(".smallBtn .smallUl li").removeClass("active").eq(n).addClass("active");
        $(".bigUl li").stop(true).fadeOut(500);
        $(".bigUl li").eq(n).stop(true).fadeIn(1000);

        // $("span").eq(n).addClass("on").siblings().removeClass("on")
        // $("img").eq(n).fadeIn(500).siblings().fadeOut(500)
    }


    var timer = setInterval(fun, 3000);
    // alert(spns.length)
    function fun() {
        num++;
        // console.log(num);
        if (num == spns.length) {
            num = 0
        };
        fx(num);
    }

})