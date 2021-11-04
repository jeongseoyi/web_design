$(document).ready(function(){

    // 네비게이션 메뉴
    $("header nav ul.gnb>li").hover(function(){
        $("ul.sub").stop().slideDown();
    },function(){
        $("ul.sub").stop().slideUp();
    });

    //  메인슬라이드  
        $(".slide ul.slide_all>li").eq(0).siblings().css("top", "-300px");

        var slideI=0;

        setInterval(function(){
               if(slideI<2){
                    slideI++;
               }else{
                slideI=0;
               }

           $(".slide ul.slide_all>li").eq(slideI).animate({"top":"-300px"}, 500);    
           $(".slide ul.slide_all>li").eq(slideI).animate({"top":"0"}, 500);    
        },3000);

    // 탭메뉴 공지사항 갤러리
        $(".contents .notice_gal h3").click(function(){
            $(".contents .notice_gal h3").removeClass("on");
            $(this).addClass("on");
            $(".contents .notice_gal ul").removeClass("on");
            $(this).next("ul").addClass("on");

        });
    //레이어팝업 
    $(".contents .notice_gal ul.notice li").eq(0).click(function(){
        $(".modal").fadeIn();
    })    

    $("button").click(function(){
        $(".modal").fadeOut();
    })   

});/*ready end*/