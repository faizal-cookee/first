$(function(){
    const colorArray=['bg-primary', 'bg-light', 'bg-success', 'bg-dark', 'bg-danger', 'bg-warning'];

    function fg(){
        console.log("kjdhkgj");
    }
    $.fn.randomColor=function(){
        
        let r = Math.floor(Math.random()* 6);
        return colorArray[r];
    }

    $.fn.getBgClass=function(id){
        let bgClass="";
        let classList=$(id).attr("class");
        let x=classList.split(" ");
        for(i of x){
            if(i.startsWith("bg")){
                bgClass=i;
                break;
            }
        }
        if(bgClass == ""){
            console.log("class not found");
        }
        else{return bgClass;}
    }

    $.fn.changeBg=function(id){
        id='#'+id;
        let currentBg= $.fn.getBgClass(id);
        let changeColor=$.fn.randomColor();

        $(id).removeClass(currentBg);
        $(id).addClass(changeColor);
    }

    $("#btn1").click(function(){
        $.fn.changeBg("div1");});

    $("#btn2").click(function(){
        $.fn.changeBg("div2");});

    $("#btn3").click(function(){
        $.fn.changeBg("div3");});

    $("#btn4").click(function(){
        $.fn.changeBg("div4");});

    $("#btn5").click(function(){
        $.fn.changeBg("div5");});

    $("#btn6").click(function(){
        $.fn.changeBg("div6");});

    $("#btn7").click(function(){
        $.fn.changeBg("div7");});

    $("#btn8").click(function(){
        $.fn.changeBg("div8");});

    $("#btn9").click(function(){
        $.fn.changeBg("div9");});

    $("#btn10").click(function(){
        $.fn.changeBg("div10");});
        
    
})