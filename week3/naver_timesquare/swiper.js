// swiper 객체 생성
// auto play 참고 https://velog.io/@function_dh/JavaScript-Swiper-%EC%82%AC%EC%9A%A9%EB%B2%95-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C-%EA%B5%AC%ED%98%84
var swiper = new Swiper(".mySwiper", {
     loop: true,
     autoplay: {
         delay: 5000,
         disableOnInteraction: false  // // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
       },
     // buttons 컨트롤은 options 에 navigation 사용 혹은
     // swiper api 에 slidePrev, slideNext 함수 사용 가능
     navigation: {
       nextEl: "#timesquare .card_nav .btn_next",
       prevEl: "#timesquare .card_nav .btn_prev",
     },
   });
   
   // buttons 컨트롤 
   // $buttons = $('#timesquare').find('.card_nav .btn_nav');
   
   // $buttons.on('click', function () {
   //   isPrev = $(this).hasClass('btn_prev'); // prev 버튼이면 true, next 버튼이면 flase
   //   if (isPrev) {
   //     // prev 버튼을 눌렀을때
   //     swiper.slidePrev();
   //   } else {
   //     // next 버튼을 눌렀을때
   //     swiper.slideNext();
   //   }
    // });