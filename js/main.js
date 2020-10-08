// main.js
/*
1. 메인 페이지 슬라이더 뷰
2. 서브 페이지 갤러리 뷰
3. 2단계 메뉴(CSS)
*/

// 메인 페이지 슬라이더 뷰
// $(function(){

//   var top = 0; //y축 위치
//   var duration = 1000; // 재생시간
//   var interval_time = 3000; // 슬라이드 인터벌 시간 (5초권장)

//   setInterval(function(){
//     // 조건 : -1500(-500*3 마지막) 위치이면 0으로 돌아감
//     if(top <= -1500) {
//       top = 0; // 초기값
//     } else {
//       top = top - 500; // 다음 이미지 위치
//     }

//     $('#content > .left')
//       .animate({marginTop: top},1000);
//   },interval_time); //몇초마다 실행  

//   // var top2 = 0;
//   // setInterval(function(){
//   //   if(top2 <= 1500) {
//   //     top2 = 0; // 초기값
//   //   } else {
//   //     top = top + 500; // 다음 이미지 위치
//   //   }

//   //   $('#content > .right')
//   //     .animate({marginTop: top2},1000);
//   // },interval_time); //몇초마다 실행  
// });

// // $(function(){

// //   var top = 0; //y축 위치
// //   var duration = 500; // 재생시간
// //   var interval_time = 3000; // 슬라이드 인터벌 시간 (5초권장)

// //   setInterval(function(){
// //     // 조건 : -1500(-500*3 마지막) 위치이면 0으로 돌아감
// //     if(top <= -1500) {
// //       top = 0; // 초기값
// //     } else {
// //       top = top - 500; // 다음 이미지 위치
// //     }

// //     $('#content > .right')
// //       .animate({marginTop: top},1000);
// //   },interval_time); //몇초마다 실행  
// // });

// $(function(){
//   var bottom = 2000;           // y축 위치
//   var duration = 1000;     // 재생시간
//   var interval_time = 3000;   // 슬라이드 인터벌 시간

//   setInterval(function(){
//       if(bottom <= -1500) {
//           bottom = 2000;             // 초기값
//       } else {
//           bottom = bottom - 500;     // 두번째 값
//           }
          
//       $('#content > .right')
//           .animate({marginBottom: bottom}, duration);
//   }, interval_time);
// })



$(function(){

  // el(요소명) | top(시작위치) | duration(재생시간) | interval_time(인터벌 시간)
  function mySlider(el, top, duration, interval_time) {
    $(el).css({marginTop: top}); 

    setInterval(function(){
      // 조건: -500(마지막) 위치 이면 0으로 돌아감
      if(top <= -1500) {
        top = 0;  // 초기값
      } else {
        top = top - 500;  // 다음 이미지 위치
      }
     
      $(el)
        .animate({marginTop: top}, duration);
    }, interval_time);
  
  }

  function mySlider2(el, top, duration, interval_time) {
    $(el).css({marginTop: top}); 

    setInterval(function(){
      // 조건: -500(마지막) 위치 이면 0으로 돌아감
      if(top >= 0) {
        top = -1500;  // 초기값
      } else {
        top = top + 500;  // 다음 이미지 위치
      }
     
      $(el)
        .animate({marginTop: top}, duration);
    }, interval_time);
  
  }

  mySlider('.left.slider', 0, 1000, 2500);
  mySlider2('.right.slider', -1500, 1000, 2500);

})

// fashion - Gallery(은영코드)
// $(function(){
//   var img = document.querySelector('figure > #main')
//   // console.log(img.src)
  
//   const img1 = document.querySelector('.img_list > li:nth-child(1)');
//   img1.addEventListener('click', function(){
//     img.setAttribute('src','https://source.unsplash.com/GQnmAPbcC-Y/1000x500');
//   });
//   const img2 = document.querySelector('.img_list > li:nth-child(2)');
//   img2.addEventListener('click', function(){
//     img.setAttribute('src','https://source.unsplash.com/RC7bYyG5PUs/1000x500');
//   });
//   const img3 = document.querySelector('.img_list > li:nth-child(3)');
//   img3.addEventListener('click', function(){
//     img.setAttribute('src','https://source.unsplash.com/faStDXKctu0/1000x500');
//   });
//   const img4 = document.querySelector('.img_list > li:nth-child(4)');
//   img4.addEventListener('click', function(){
//     img.setAttribute('src','https://source.unsplash.com/nwy_9hd6X8U/1000x500');
//   });
//   const img5 = document.querySelector('.img_list > li:nth-child(5)');
//   img5.addEventListener('click', function(){
//     img.setAttribute('src','https://source.unsplash.com/7O-V4VeJ6B0/1000x500');
//   });
//   const img6 = document.querySelector('.img_list > li:nth-child(6)');
//   img6.addEventListener('click', function(){
//     img.setAttribute('src','https://source.unsplash.com/Gy_fq_70ffE/1000x500');
//   });
//   const img7 = document.querySelector('.img_list > li:nth-child(7)');
//   img7.addEventListener('click', function(){
//     img.setAttribute('src','https://source.unsplash.com/Bgz6WeuuAgs/1000x500');
//   });
//   const img8 = document.querySelector('.img_list > li:nth-child(8)');
//   img8.addEventListener('click', function(){
//     img.setAttribute('src','https://source.unsplash.com/hBqtE-CfHS0/1000x500');
//   });
// });

//선생님 코드(훨씬 간단!)
$(function(){
  $('.img_list > li').click(function(){
    // 클릭한 이미지의 src값을 읽음
    var src = $(this).find('img').attr('src');
    console.log(src);

    // 대표이미지에 클릭한 이미지 표시
    $('figure > img').attr('src',src);
  })
})