$(function () {
    //获取小按钮
    var $oLi = $(".btnBox span em");
    //获取图片的宽度
    var imgW = $(".indexTuanList ul  li").width();

    $($oLi[0]).addClass("on");
    //点击小按钮，图片移动，并给小按钮设置背景颜色
    $oLi.on("click", function () {
        //将活动的小按钮添加一个类
        $(this).addClass("on").siblings().removeClass("on");
        //获取索引
        var num = $(this).index();
        $(".indexTuanList ul").eq(0).animate({
            left: -num * imgW + "px"
        }, 300);
    });

    //循环播放
    var timeId = setInterval(function () {
        //判断小按钮中哪个按钮是活动的
        var num;
        $oLi.each(function () {
            //将ul向右移动
            if($(this).hasClass("on")) {
                //得到活动的索引,然后加1
                num = $(this).index() + 1;
                //让图片移动
                $(".indexTuanList ul").animate({
                    left: -num * imgW + "px"
                }, 300);

                //到达最后一张，让ul从头开始
                if(num== $oLi.length) {
                    $(".indexTuanList ul").animate({
                        left: "0px"
                    }, 0);
                    num = 0;
                }
            }
        });
        //小按钮的背景色相应的改变
        $($oLi[num]).addClass("on").siblings().removeClass("on");
    }, 1000);
})


//近日推荐轮播图
// function Jrtj(){}
// $.extend(Jrtj.prototype,{
//     init:function(options){
//         //所有图片
//         this.item_list = $(options.item_list)
//         //按钮列表
//         this.btn_list = $(options.btn_list);
//         this.nowindex = 0;
//         this.item_num = this.item_list.length

//         this.wrap = $("#indexTuanBox");

//         this.ul = $(".indexTuanList .bigUl")
//         //获取列表中第一个元素的宽度值
//         this.item_width = this.item_list.width()
//         if(this.btn_list.length == 0){
//             this.autoplay();
//             return 0;
//         }
//         this.bindEvent();
//     },
//     bindEvent:function(){
//         this.btn_list.click($.proxy(this.toIndex , this));
//         this.wrap.onmouseenter = this.stopPlay.bind(this);
//         this.wrap.onmouselever = this.autoplay.bind(this);
//     },
//     toIndex:function(event){
//         var target = event.target || event.srcElement;
//         this.nowindex = $(target).index();
//         this.animate();
//     },
//     animate:function(){
//         this.ul.stop().animate({
//             left:-this.item_width*this.nowindex
//         })
//         var index = this.nowindex == this.item_num - 1 ? 0 : this.nowindex;
//         this.btn_list.eq(index).addClass("on")
//         .siblings("em").removeClass("on")
//     },
//     autoPlay(){
//         this.autoTimer = setInterval(function(){
//             this.toIndex();
//         }.bind(this),2000)
//     },
//     stopPlay(){
//         clearInterval(this.autoTimer)
//     }
// })
// var jrtj = new Jrtj();
// jrtj.init({
//     item_list: ".indexTuanList li",
//     btn_list : ".btnBg em"
// });
// jrtj.autoplay();