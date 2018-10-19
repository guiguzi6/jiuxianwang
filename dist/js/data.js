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
                                <img src="${data[i].image}" alt="" data-id =${i}>
                            </a>
                        </div>
                        <div class="priceArea clearfix">
                            <p class="price">
                                ${data[i].price}
                            </p>
                        </div>
                        <a class="proName" href="javascript:void(0)" data-id=${i}>
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
oUl.onclick=function(evt){
    var e = evt || window.event;
    var img = document.querySelectorAll(".proListSearch img");
    var imgArry = Array.from(img);
    var title = document.querySelectorAll(".proListSearch .proName");
    var titleArry = Array.from(title);
    var target = e.target || e.srcElement;
    if(imgArry.indexOf(target) != -1 ||  titleArry.indexOf(target) != -1){
        cookie("goodsId",target.getAttribute("data-id"));
        location.href= "http://www.baidu.com";
    }
}


 function Pagination(){}
Pagination.prototype.init=function(){
    this.wrap=document.querySelector(".proListSearch1 ul")
    this.page_wrap = document.querySelector("#page-item");
    //是否已经渲染按钮
    this.has_button =false;
    //显示当前页码
    this.now_page = 0;
    // 调用
    this.loadJson()
    .then(function(json){
        this.data = json;
        this.renderPage();
    }.bind(this))
    this.handleEvent();
}
//因为加载数据是异步；
//又因为整个功能没有数据就没正常执行，所以把其余代码要放在数据加载加载成功的回调函数里=>promise
Pagination.prototype.loadJson =function(){
    return new Promise(function(success,error){
        var xhr = new XMLHttpRequest();
        xhr.open("GET","js/data.json");
        xhr.send(null);
        xhr.onload=function(){
            if(xhr.status == 200){
                var json = typeof xhr.response == "string" ? JSON.parse(xhr.response) : xhr.response;
                success(json);
            }else{
                error("请求出错");
            }
        }
    })
}
Pagination.prototype.renderPage =function(){
    var list = this.data.subjects;
    console.log(list)
    var html = "";
    for(var i = 20 * this.now_page;i <=20*this.now_page+19;i++){
        html +=`
                <li>
                    <div class="content clearfix">
                        <div class="collect_box">
                            <a class="img clearfix" href="javascript:void(0)">
                                <img src="${list[i].images.small}" alt="" data-id =${i}>
                            </a>
                        </div>
                        <div class="priceArea clearfix">
                            <p class="price">
                                ${"￥998"}
                            </p>
                        </div>
                        <a class="proName" href="javascript:void(0)" data-id=${i}>
                            ${list[i].title}
                        </a>
                        <a class="judge" href="javascript:void(0)">
                            ${"已有80条评论"}
                        </a>
                        <div class="projx">
                            <i class="sIcon"></i>
                        </div>
                        <div class="activity">
                            <span class="yh">${"单品加价购"}</span>
                            <span class="yh">${"限时抢购"}</span>
                        </div>
                        <div class="buyArea clearfix">
                            <a class="cart clearfix prtlt_btn2" href="javascript:void(0)">
                                ${"加入购物车"}
                            </a>
                        </div>
                    </li>    
                `
    }
    this.wrap.innerHTML = html;
    if(this.has_button){return 0};
    this.has_button =true;
    var count = this.data.count;
    var page = Math.ceil(count / 20);
    var button_html = "";
    for(var i = 0; i < page; i++){
        button_html += `<button data-id=${i} > ${ i +1}</button>`
    }
    this.page_wrap.innerHTML = button_html;
}
 Pagination.prototype.handleEvent = function(){
    this.page_wrap.onclick = this.changePage.bind(this);
 }
 Pagination.prototype.changePage = function(event){
        // 更换页码; => 委托;
        var e = event || window.event;
        var target = e.target || e.srcElement;
        var button = Array.from(this.page_wrap.children);
        // 如果子集元素不存在,那么直接跳出;
        if(button.length == 0){return 0};
        // 如果事件源不是想要的子集元素,那么直接跳出;
        if(button.indexOf(target) == -1){return 0};
        // console.log(target.getAttribute("data-id"));
        this.now_page = target.getAttribute("data-id");
        this.renderPage();// 我没有json;
        //  rederPage => 1. 加载数据结束之后; 一定会有数据;
        //            => 2. 改变页数的时候;
    }   
var pagination = new Pagination();
pagination.init();


