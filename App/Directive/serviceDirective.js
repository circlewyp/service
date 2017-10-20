/**
 * Created by wangyaping on 2017/10/19.
 */
app.directive("serve", function () {
    return {
        templateUrl:"App/View/temp/server.html",
        controller:"serviceController",
        link: function ($scope, ele, attr, controller) {
            //js代码
            (function(doc,win){
                doc.documentElement.style.fontSize=doc.documentElement.clientWidth/375*50+"px";
            })(document,window)
            $(".head span>a").on("click", function () {
                $(this).addClass("bg").siblings().removeClass("bg");
            })
            $(".foot span").on("click", function () {
                $(this).addClass("bg").siblings().removeClass("bg");
            })
            var swiper = new Swiper(".banner",{
                loop:true,
                autoplay:1000,
                pagination:".pag"
            })
        }
    }
})