// $(function () {
//     //获取小按钮
//     var $oLi = $(".btnBox span em");
//     //获取图片的宽度
//     var imgW = $(".indexTuanList ul  li").width();

//     $($oLi[0]).addClass("on");
//     //点击小按钮，图片移动，并给小按钮设置背景颜色
//     $oLi.on("click", function () {
//         //将活动的小按钮添加一个类
//         $(this).addClass("on").siblings().removeClass("on");
//         //获取索引
//         var num = $(this).index();
//         $(".indexTuanList ul").eq(0).animate({
//             left: -num * imgW + "px"
//         }, 300);
//     });

//     //循环播放
//     var timeId = setInterval(function () {
//         //判断小按钮中哪个按钮是活动的
//         var num;
//         $oLi.each(function () {
//             //将ul向右移动
//             if($(this).hasClass("on")) {
//                 //得到活动的索引,然后加1
//                 num = $(this).index() + 1;
//                 //让图片移动
//                 $(".indexTuanList ul").animate({
//                     left: -num * imgW + "px"
//                 }, 300);

//                 //到达最后一张，让ul从头开始
//                 if(num== $oLi.length) {
//                     $(".indexTuanList ul").animate({
//                         left: "0px"
//                     }, 0);
//                     num = 0;
//                 }
//             }
//         });
//         //小按钮的背景色相应的改变
//         $($oLi[num]).addClass("on").siblings().removeClass("on");
//     }, 1000);
// })


// 今日抢购轮播图
function Banner(){}
Object.assign(Banner.prototype , {
    init(){
        // 初始化;
        // 当前显示的图片下标;
        this.nowIndex = 0;
        // 元素;
        // this.btn_left = document.querySelector("#left");
        // this.btn_right = document.querySelector("#right");
        
        this.btn_list = document.querySelectorAll(".btnBg em");

        this.show_list = document.querySelectorAll(".indexTuanList .bigUl li");
        this.ul = document.querySelector(".indexTuanList .bigUl");

        this.wrap =document.querySelector(".indexTuanList")

        this.itmeNum = this.show_list.length;
        this.bindEvent()
    },  
    bindEvent(){
        // this.btn_left.onclick = this.prev.bind(this);
        // this.btn_right.onclick = this.next.bind(this);
        for(var i = 0 ; i < this.btn_list.length ; i ++){
            this.btn_list[i].index = i;
            this.btn_list[i].onclick = this.toIndex.bind(this);
        }     
        //  this.wrap.onmouseenter = this.stopPlay().bind(this);
        //  this.wrap.onmouseleave = this.autoPlay().bind(this);       
    },
    next(){
        if(this.nowIndex == this.itmeNum - 1){
            // 到了最后一张;
            this.ul.style.left = 0;
            this.nowIndex = 1;
        }else{
            this.nowIndex ++;
        }
        this.animate();
    },
    prev(){
        if(this.nowIndex == 0){
            // 到了第一张;
            this.ul.style.left = -(this.itmeNum - 1) * 268 + "px";
            this.nowIndex = this.itmeNum - 2;
        }else{
            this.nowIndex --;
        }
        this.animate();
    },
    toIndex(event){
        var e = event || window.event
        var target = e.target || e.srcElement;
        this.nowIndex = target.index;
        this.animate();
    },
    animate(){
        // console.log(this.nowIndex);
        // 1. li 的动画;
        // 2. button 的动画;
        // this.ul.style.left = - this.nowIndex * 100 + "px";
        // jquery dom 调用 animate方法;
        $(this.ul).stop().animate({
            left:- this.nowIndex * 268 
        })
        
        $(this.btn_list).removeClass("on");

        if(this.nowIndex == this.itmeNum - 1){
            this.btn_list[0].className = "on"
        }else{
            this.btn_list[this.nowIndex].className = "on";
        }
    },
    autoPlay(){
        this.autoTimer = setInterval(function(){
            this.next();
        }.bind(this),2000)
    },
    // stopPlay(){
    //     clearInterval(this.autoTimer)
    // }
})
var banner = new Banner();
banner.init();
banner.autoPlay();

// // 大坛专区轮播图
// function Banner(){}
// Object.assign(Banner.prototype , {
//     init(){
//         // 初始化;
//         // 当前显示的图片下标;
//         this.nowIndex = 0;
//         // 元素;
//         // this.btn_left = document.querySelector("#left");
//         // this.btn_right = document.querySelector("#right");
        
//         this.btn_list = document.querySelectorAll(".smallUl .btnBg em");

//         this.show_list = document.querySelectorAll(".indexTuanList .bigUl li");
//         this.ul = document.querySelector(".indexTuanList .bigUl");

//         this.wrap =document.querySelector(".indexTuanList")

//         this.itmeNum = this.show_list.length;
//         this.bindEvent()
//     },  
//     bindEvent(){
//         // this.btn_left.onclick = this.prev.bind(this);
//         // this.btn_right.onclick = this.next.bind(this);
//         for(var i = 0 ; i < this.btn_list.length ; i ++){
//             this.btn_list[i].index = i;
//             this.btn_list[i].onclick = this.toIndex.bind(this);
//         }     
//          this.wrap.onmouseenter = this.stopPlay().bind(this);
//          this.wrap.onmouseleave = this.autoPlay().bind(this);       
//     },
//     next(){
//         if(this.nowIndex == this.itmeNum - 1){
//             // 到了最后一张;
//             this.ul.style.left = 0;
//             this.nowIndex = 1;
//         }else{
//             this.nowIndex ++;
//         }
//         this.animate();
//     },
//     prev(){
//         if(this.nowIndex == 0){
//             // 到了第一张;
//             this.ul.style.left = -(this.itmeNum - 1) * 268 + "px";
//             this.nowIndex = this.itmeNum - 2;
//         }else{
//             this.nowIndex --;
//         }
//         this.animate();
//     },
//     toIndex(event){
//         var e = event || window.event
//         var target = e.target || e.srcElement;
//         this.nowIndex = target.index;
//         this.animate();
//     },
//     animate(){
//         // console.log(this.nowIndex);
//         // 1. li 的动画;
//         // 2. button 的动画;
//         // this.ul.style.left = - this.nowIndex * 100 + "px";
//         // jquery dom 调用 animate方法;
//         $(this.ul).stop().animate({
//             left:- this.nowIndex * 268 
//         })
        
//         $(this.btn_list).removeClass("on");

//         if(this.nowIndex == this.itmeNum - 1){
//             this.btn_list[0].className = "on"
//         }else{
//             this.btn_list[this.nowIndex].className = "on";
//         }
//     },
//     autoPlay(){
//         this.autoTimer = setInterval(function(){
//             this.next();
//         }.bind(this),2000)
//     },
//     stopPlay(){
//         clearInterval(this.autoTimer)
//     }
// })
// var banner = new Banner();
// banner.init();
// banner.autoPlay();


// logo墙轮播图
// function Banner(){}
// Object.assign(Banner.prototype , {
//     init(){
//         // 初始化;
//         // 当前显示的图片下标;
//         this.nowIndex = 0;
//         // 元素;
//         // this.btn_left = document.querySelector("#left");
//         // this.btn_right = document.querySelector("#right");
        
//         this.show_list = document.querySelectorAll(".indexTuanList ul");
  
//         this.logo = document.querySelector(".logoFirstbd");

//         this.btnLeft = document.querySelector(".prevPage")
        
//         this.btnRight = document.querySelector(".nextPage")

//         this.wrap =document.querySelector(".logoBox")

//         this.itmeNum = this.show_list.length;
//         this.bindEvent()
//     },  
//     bindEvent(){
//         this.btnLeft.onclick = this.prev.bind(this);
//         //点击右边显示下一个
//         this.btnRight.onclick = this.next.bind(this);
//         // this.btn_left.onclick = this.prev.bind(this);
//         // this.btn_right.onclick = this.next.bind(this);
//         for(var i = 0 ; i < this.show_list.length ; i ++){
//             this.btn_list[i].index = i;
//             this.btn_list[i].onclick = this.toIndex.bind(this);
//         }     
//          this.wrap.onmouseenter = this.xianshi().bind(this);
//          this.wrap.onmouseleave = this.yincang().bind(this);       
//     },
//     next(){
//         if(this.nowIndex == this.itmeNum - 1){
//             // 到了最后一张;
//             this.ul.style.left = 0;
//             this.nowIndex = 1;
//         }else{
//             this.nowIndex ++;
//         }
//         this.animate();
//     },
//     prev(){
//         if(this.nowIndex == 0){
//             // 到了第一张;
//             this.logo.style.left = -(this.itmeNum - 1) * 268 + "px";
//             this.nowIndex = this.itmeNum - 2;
//         }else{
//             this.nowIndex --;
//         }
//         this.animate();
//     },
//     toIndex(event){
//         var e = event || window.event
//         var target = e.target || e.srcElement;
//         this.nowIndex = target.index;
//         this.animate();
//     },
//     animate(){
//         $(this.ul).stop().animate({
//             left:- this.nowIndex * 268 
//         })
        
//     },
//     xianshi(){
//         this.btnLeft.style.display = "block"
//         this.btnRight.style.display = "block"
//     },
//     yincang(){
//         this.btnLeft.style.display = "none"
//         this.btnRight.style.display = "none"
//     }
// })
// var banner = new Banner();
// banner.init();
