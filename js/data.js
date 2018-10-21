var data = [
    {
    image:"http://img10.jiuxian.com/2013/1109/217f5c4647c6463081c99ab36707eb074.jpg",
    price:"￥86.00",
    title:"52°五粮液50ml10到15个工作日发货",
     pingjia:"已有867人评价",
     danpin:"单品加价购",
     xianshi:"限时抢购",
     car:"加入购物车"
    },
    {
        image:"http://img07.jiuxian.com/2018/0517/b17f73f5277e4a16962ef55e640a2e024.png",
        price:"￥198.00",
        title:"52°五粮液100ml精致小酒版 限量收藏秒杀！",
        pingjia:"已有583人评价",
        danpin:"单品加价购",
        xianshi:"限时抢购",
        car:"加入购物车"
    },
    {
        image:"http://img07.jiuxian.com/2018/0613/7cbaa17b4ba441ec83cb0e2aa2b75c464.jpg",
        price:"￥388.00",
        title:"52°五粮国宾酒（珍藏）500ml(双瓶装)",
        pingjia:"已有657人评价",
        danpin:"单品加价购",
        xianshi:"限时抢购",
        car:"加入购物车"
    },
    {
        image:"http://img09.jiuxian.com/2017/0627/88198b54335f4eb38313e9b7d86099e94.jpg",
        price:"￥9.00",
        title:"五粮液股份A级佳宾级小酒版125ml",
        pingjia:"已有17035人评价",
        danpin:"单品加价购",
        xianshi:"限时抢购",
        car:"加入购物车"
    },
    {
        image:"http://img08.jiuxian.com/2017/0207/29734058e1bc427b93e7ebda4973494f4.jpg",
        price:"￥10.50",
        title:"50°五粮液尖庄酒475ml尖庄老酒,实惠口粮酒,整箱12瓶装,建议12瓶起购,可整箱发",
        pingjia:"已有923人评价",
        danpin:"单品加价购",
        xianshi:"限时抢购",
        car:"加入购物车"
    },
    {
        image:"http://img08.jiuxian.com/2018/1017/3ff44a2b2a50406b8166cb0795e059ef4.jpg",
        price:"￥29.00",
        title:"52°五粮液股份公司富贵天下浓香型白酒整箱装500ml*6",
        pingjia:"已有532人评价",
        danpin:"单品加价购",
        xianshi:"限时抢购",
        car:"加入购物车"
    },
    {
        image:"http://img06.jiuxian.com/2018/0922/ac4bebb9aba54bda93f336d35ab398344.jpg",
        price:"￥588.00",
        title:"52°五粮液股份百年传奇佳品浓香型白酒整箱500ml*6",
        pingjia:"已有221人评价",
        danpin:"单品加价购",
        xianshi:"限时抢购",
        car:"加入购物车"
    },
    {
        image:"http://img09.jiuxian.com/2016/1205/a9cc3fcbf80a4939b905e2fc0e4ca43b4.jpg",
        price:"￥29.00",
        title:"52°五粮液富贵天下藏品级富贵黄2000ml京东快递全国七仓直配 部分城市当日达 ",
        pingjia:"已有2841人评价",
        danpin:"单品加价购",
        xianshi:"限时抢购",
        car:"加入购物车"
    },
    
]
var oUl = document.querySelector(".proListSearch ul");
window.onload = function(){
    var html = "";
    for(var i = 0; i < data.length;i++){
        html +=`
                <li>
                    <div class="content clearfix">
                        <div class="collect_box">
                            <a class="img clearfix" href="javascript:void(0)">
                                <img src="${data[i].image}" alt="">
                            </a>
                        </div>
                        <div class="priceArea clearfix">
                            <p class="price">
                                ${data[i].price}
                            </p>
                        </div>
                        <a class="proName" href="javascript:void(0)">
                            ${data[i].title}
                        </a>
                        <a class="judge" href="javascript:void(0)">
                            ${data[i].pingjia}
                        </a>
                        <div class="projx">
                            <i class="sIcon"></i>
                        </div>
                        <div class="activity">
                            <span class="yh">${data[i].danpin}</span>
                            <span class="yh">${data[i].xianshi}</span>
                        </div>
                        <div class="buyArea clearfix">
                            <a class="cart clearfix prtlt_btn2" href="javascript:void(0)">
                                ${data[i].car}
                            </a>
                        </div>
                    </li>    
                `
    }
    oUl.innerHTML = html;
}
oUl.onclick=function(){
    
}