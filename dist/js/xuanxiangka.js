//疯狂抢购选项卡
var oLi = document.querySelectorAll(".indexTabNav li")
var oIndexTabCon = document.querySelectorAll(".indexTabCon")

function tab(index){
    for(var i = 0; i < oLi.length;i++){
        oLi[i].className =  "";
        oIndexTabCon[i].style.display = "none";
    }
    oLi[index].className = "on";
    oIndexTabCon[index].style.display = "block"
}
for(var i = 0; i <oLi.length; i++){
    oLi[i].index = i;
    oLi[i].onmouseenter=function(){
        tab(this.index)
    }
}

//公告选项卡
$(function(){
    $("#indexTabNewNav ul li").each(function(index) {//遍历选项卡
        $(this).mouseenter(function() {//注册每个选项卡点击事件
            $("#indexTabNewNav ul li").removeClass('on');
            $(this).addClass('on');//增加当前选中项样式
            //显示选项卡对应的内容并影藏不被选中的内容
            $(".indexTabNewCon div:eq("+index+")").show()
            .siblings().hide();
        });
    });
});