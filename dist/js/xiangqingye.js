$.ajax({
        type:"get",
        url:"js/data1.json",
        async:true,
        success:function(arr){
            var oImg1 = document.querySelector(".show-pic .img1")
            var oImg2 = document.querySelector(".show-pic .img2")
            var oImg3 = document.querySelector(".show-pic .img3")
            var oImg4 = document.querySelector(".show-pic .img4")
            var oImg5 = document.querySelector(".show-pic .img5")
            var sImg1 = document.querySelector(".show-list-con .img1")
            var sImg2 = document.querySelector(".show-list-con .img2")
            var sImg3 = document.querySelector(".show-list-con .img3")
            var sImg4 = document.querySelector(".show-list-con .img4")
            var sImg5 = document.querySelector(".show-list-con .img5")
            var title = document.querySelector(".comName h1")
            var price = document.querySelector(".infoPri strong")
            var res ="";
            if(res = cookie("goodsId")){
                oImg1.src= arr[res].img.one;
                oImg2.src= arr[res].img.two;
                oImg3.src= arr[res].img.three;
                oImg4.src= arr[res].img.four;
                oImg5.src= arr[res].img.five;

                sImg1.src= arr[res].images.one;
                sImg2.src= arr[res].images.two;
                sImg3.src= arr[res].images.three;
                sImg4.src= arr[res].images.four;
                sImg5.src= arr[res].images.five;
                title.innerHTML = arr[res].title;
                price.innerHTML = arr[res].jiage;
            }
        }
    })




// 图片部分选项卡

 $(".show-list-con ul li").each(function(index){
     $(this).mouseenter(function(){
         $(".show-list-con ul li").removeClass("on");
         $(this).addClass("on");
         $(".instroShow .show-pic img:eq("+index+")").show()
        .siblings().hide()
        // $(".Magnifier img").attr("src","$()")
     })
 })



//  放大镜

var oSmall = document.querySelector(".instroShow .show-pic");
var oSmall_img = oSmall.children[0];
var oBig = document.querySelector(".instroShow .Magnifier");
var oFrame = document.querySelector(".instroShow .frame");
var oBig_img = oBig.children[0];
oSmall.onmouseenter = function(){
    //大小框都显示
    oBig.style.display = "block";
    oFrame.style.display = "block";
    // 让图片模糊;
    oSmall_img.style.opacity = "0.3";
}
oSmall.onmouseleave = function(){
    //大小框都隐藏
    oBig.style.display = "none";
    oFrame.style.display = "none";
    oSmall_img.style.opacity = "1";
}
oSmall.onmousemove = function(event){
    //获取定位的x，y值
    var e = event || window.event;
    var offsetX = e.offsetX;
    var offsetY = e.offsetY;
    //给元素设置的left值和top值
    var nLeft = offsetX - 70;
    var nTop = offsetY- 70;
    //检测边界
    //最小值
    nLeft = nLeft < 0 ? 0 : nLeft;
    nTop = nTop < 0 ? 0 : nTop;
    //最大值
    var maxLeft = oSmall.offsetWidth - oFrame.offsetWidth;
    var maxTop = oSmall.offsetHeight - oFrame.offsetHeight;

    nLeft = nLeft > maxLeft ? maxLeft : nLeft;
    nTop = nTop > maxTop ? maxTop : nTop;

    oFrame.style.left = nLeft + "px";
    oFrame.style.top = nTop + "px";

    var propX = oBig.offsetWidth / oFrame.offsetWidth;
    var propY = oBig.offsetHeight / oFrame.offsetHeight;

    oBig_img.style.left = -nLeft * propX + "px";
    oBig_img.style.top = -nTop * propY + "px";

}
    
   