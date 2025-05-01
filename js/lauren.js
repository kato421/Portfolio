 $(window).scroll(function (){
        $('.text').each(function(){
            var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
    
                if (scroll > elemPos - windowHeight + 150){
                    $(this).addClass('scrollin');
                }
        });
    });
    $(window).scroll(function (){
        $('.kasou').each(function(){
            var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
    
                if (scroll > elemPos - windowHeight + 150){
                    $(this).addClass('scrollin');
                }
        });
    });


    $(window).scroll(function (){
        $('.profile').each(function(){
            var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
    
                if (scroll > elemPos - windowHeight + 150){
                    $(this).addClass('scrollin');
                }
        });
    });

    $(window).scroll(function (){
        $('.kategori1').each(function(){
            var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
    
                if (scroll > elemPos - windowHeight + 150){
                    $(this).addClass('scrollin');
                }
        });
    });

    $(window).scroll(function (){
        $('.kategori2').each(function(){
            var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
    
                if (scroll > elemPos - windowHeight + 150){
                    $(this).addClass('scrollin');
                }
        });
    });

    $(window).scroll(function (){
        $('.kategori3').each(function(){
            var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
    
                if (scroll > elemPos - windowHeight + 150){
                    $(this).addClass('scrollin');
                }
        });
    });

    $(window).scroll(function (){
        $('.kategori4').each(function(){
            var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
    
                if (scroll > elemPos - windowHeight + 150){
                    $(this).addClass('scrollin');
                }
        });
    });

    $(window).scroll(function (){
        $('.kategori5').each(function(){
            var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
    
                if (scroll > elemPos - windowHeight + 150){
                    $(this).addClass('scrollin');
                }
        });
    });




    (function($) {
        var $nav   = $('#navArea');
        var $btn   = $('.toggle_btn');
        var $mask  = $('#mask');
        var open   = 'open'; // class
        // menu open close
        $btn.on( 'click', function() {
          if ( ! $nav.hasClass( open ) ) {
            $nav.addClass( open );
          } else {
            $nav.removeClass( open );
          }
        });
        // mask close
        $mask.on('click', function() {
          $nav.removeClass( open );
        });
      } )(jQuery);
    
    


      $(function () {
        $('#js-slider-3').slick({
          arrows: true, // 前・次のボタンを表示する
          dots: true, // ドットナビゲーションを表示する
          appendDots: $('.dots-3'), // ドットナビゲーションの生成位置を変更
          speed: 1000, // スライドさせるスピード（ミリ秒）
          slidesToShow: 1, // 表示させるスライド数
          centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
          variableWidth: true, // スライド幅の自動計算を無効化
        });
      });

      $(function () {
        $('#js-slider-4').slick({
          arrows: true, // 前・次のボタンを表示する
          dots: true, // ドットナビゲーションを表示する
          appendDots: $('.dots-4'), // ドットナビゲーションの生成位置を変更
          speed: 1000, // スライドさせるスピード（ミリ秒）
          slidesToShow: 1, // 表示させるスライド数
          centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
          variableWidth: true, // スライド幅の自動計算を無効化
        });
      });

      $(function () {
        $('#js-slider-5').slick({
          arrows: true, // 前・次のボタンを表示する
          dots: true, // ドットナビゲーションを表示する
          appendDots: $('.dots-5'), // ドットナビゲーションの生成位置を変更
          speed: 1000, // スライドさせるスピード（ミリ秒）
          slidesToShow: 1, // 表示させるスライド数
          centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
          variableWidth: true, // スライド幅の自動計算を無効化
        });
      });
