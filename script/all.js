//swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 24,
  breakpoints: {
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    375: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


//panel slide
// $(document).ready(function() {
//   // 找到同層元素
//   $(".itms > .itm > h3").click(function(event) {
//     event.preventDefault();
//     var $panel = $(this).parent().find("p");
//     var $addIcon = $(this).find(".add-icon");
//     var $removeIcon = $(this).find(".remove-icon");

//     $panel.slideToggle();
//     $addIcon.toggleClass("d-none");
//     $removeIcon.toggleClass("add-icon");

//     // 收闔其他區塊
//     $(".itms > .itm > h3").not(this).parent().find("p").slideUp();
//     $(".itms > .itm > h3").not(this).find(".add-icon").removeClass("d-none");
//     $(".itms > .itm > h3").not(this).find(".remove-icon").addClass("d-none");
//   });
// });
$('.itm').click(function(e) {
  $(this).toggleClass('active');
  $(this).find('.add-icon').toggleClass('d-none');
  $(this).find('.remove-icon').toggleClass('d-block');
  $(this).find('.collapse-content p').toggleClass('show');
});
//back to top
$(document).ready(function () {
  $("#backToTop").click(function () {
    $("html,body").animate({ scrollTop: 0 }, "slow");
  });
});


