$(document).ready(function() {
// 메인페이지 함수
    // 헤더 함수
    var headerEl = $('#header')
    var gnbBarEl = $('#header .gnb_wrap .gnb_bar')
    var searchEl = $('#header .search_wrap')
    
    $('#header .gnb').on('mouseenter', function() {
        headerEl.addClass('on on2');
    }).on('mouseleave', function() {
        headerEl.removeClass('on2');
        
        if ($(window).scrollTop() === 0) {
            headerEl.removeClass('on');
        }
    });
    
    $(window).scroll(function() {
        // 스크롤바의 위치를 변수에 대입
        var _scrollTop = $(this).scrollTop();
        
        // 스크롤바에 on클래스 추가 조건부여
        if (_scrollTop >= 100) {
            headerEl.addClass('on');
        } else {
            headerEl.removeClass('on');
        }
    });
    
    // gnb 막대 애니메이션
    $('#header .gnb_wrap .gnb>li').on('mouseenter', function() {
        var posY = $(this).position().left + 35;
        var _width = $(this).width();
        gnbBarEl.stop().animate({'left':posY,'width':_width,'opacity':1},250);
    });
    // gnb에서 mouseleave 시  막대 사라지기
    $('#header .gnb').on('mouseleave', function() {
        gnbBarEl.stop().animate({'opacity':0},100);
    });
    
    // 검색창
    $('.btn_search').on('click', function() {
        searchEl.stop().slideDown();
    });
    $('#header .search_wrap .close').on('click', function() {
        searchEl.stop().slideUp();
    });


    
    // 메인 슬라이더
    var mySwiper = new Swiper('.main_slider', {
        // direction: 'vertical',
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 5000,
        },
        speed: 1200,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletElement: 'button',
        }
    });
    
    // 메인 슬라이더 hover 시 자동실행 중지
    $('#main .main_slider .btn_toggle').on('click', function() {
        $(this).toggleClass('on');
        
        if($(this).hasClass('on')) {
            mySwiper.autoplay.stop();
        } else {
        mySwiper.autoplay.start();
        }
    });
    
    
    // 신제품 슬라이더
    var mySwiper2 = new Swiper('.product_slider', {
        // direction: 'vertical',
        slidesPerView: 'auto',
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletElement: 'button',
        }
    });
    
    // 푸터 함수
    var family_wrapEl = $('#footer .family_wrap');
    
    $('#footer .family_wrap .btn_family').on('click', function() {
        family_wrapEl.toggleClass('on');
        family_wrapEl.find('.family_box').stop().slideToggle();;
    });
//     이벤트 막기 
    $('a').on('click', function(e) {
        e.preventDefault();
    });
     
     
     
// 서브 페이지 과자상식백과
    $('#container .sub_section1 .history .txt button').on('click', function() {
        $(this).siblings().show();
    });
    
    $('#container .sub_section1 .history .txt .info button').on('click', function() {
        
        $(this).parent('.info').hide();
    });
});