
function WaterFull() { };
WaterFull.prototype.init = function () {
    this.ul = document.querySelector(".pubuliu-con ul");
    this.page_num = 0;
    this.rendering = false;
    this.loadJson()
        .then(function (data) {
            // console.log(this.json)
            // console.log(data)
            this.renderPage();
        }.bind(this));
    this.handleEvent();
}
WaterFull.prototype.handleEvent = function () {
    onscroll = this.ifRender.bind(this);
}
WaterFull.prototype.ifRender = function () {
    // 如果 自己元素没有创建那么就终止判定功能执行;
    var children = this.ul.children;
    // 如果正在渲染 ,那我终止判定功能;
    if (this.rendering) return 0;
    if (children.length == 0) return 0;
    // 卷动高度;
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    // 屏幕高度;
    var clientHeight = document.documentElement.clientHeight;
    // 最后一个内容
    var lastChildren = children[children.length - 1];
    var lastTop = lastChildren.offsetTop;
    if (clientHeight + scrollTop > lastTop) {
        // console.log("加载数据");
        this.rendering = true;
        this.page_num++;
        this.renderPage();
    }

}
WaterFull.prototype.loadJson = function () {
    return new Promise(function (success) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "js/data.json");
        xhr.send(null);
        xhr.onload = function () {
            if(xhr.status){
                this.json = JSON.parse(xhr.response);
                success(xhr.response);
            }
        }.bind(this);
    }.bind(this));
}
WaterFull.prototype.renderPage = function () {
    var html = "";
    var list = this.json.subjects;
    // console.log(list)
    for (var i = this.page_num * 20; i <= this.page_num * 20 + 19; i++) {
        html += `<li class="wrap">
                    <a href="#">
                        <img src="${list[i].images.small}" alt="">
                        <p>${list[i].title}</p>
                    </a>
                </li>`;
    }
    this.ul.innerHTML += html;
    this.rendering = false;
}
var waterFull = new WaterFull();
waterFull.init();	