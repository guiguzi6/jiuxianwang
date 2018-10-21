$(function(){
    var oNav = $("#head-icon");
    var oPop = $("#head-pop");
    oNav[0].onmouseover = function(){
        oPop[0].style.display = "block"
    }
    var timer = null;
    oNav[0].onmouseout = function(){
        timer = setTimeout(()=>{
           oPop[0].style.display = "none"
        },3000)
    }
    oPop[0].onmouseover=()=>{
        clearTimeout(timer)
        oPop[0].style.display = "block"
    }
    oPop[0].onmouseout=()=>{
       oPop[0].style.display = "none"
    }  
})
