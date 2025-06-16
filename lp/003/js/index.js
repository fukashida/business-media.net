
$(document).ready( function(){
  // ページ下部固定ボタン表示非表示
      $(window).on('load resize',function(){
          btnOffset = $('.btn-appear').offset().top;
          winH = $(window).height();
      });
      $(function() {
          var fixedbtn = $('.fixed__btn');
          fixedbtn.hide();
          $(window).scroll(function () {
              if ($(this).scrollTop() > btnOffset - winH) {
                  fixedbtn.fadeIn();
              } else {
                  fixedbtn.fadeOut();
              }
          });
      });
  });