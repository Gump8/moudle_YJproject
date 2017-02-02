;$(function () {
    var $Hcarousel = $('.Hcarousel');

    var $carouselIMG = $('.carouselIMG', '.Hcarousel');
    var $carSmall = $('.carSmall', '.Hcarousel');

    var $bul = $('ul', $carouselIMG);
    var $sul = $('ul', $carSmall);

    var $carP = $('span',$carouselIMG);

    var a = 0, b = 0;
    var btimer = setInterval(bcar, 2000);

    function bcar() {

        $bul.animate({left: '-=720'}, function () {
            a++;
            if (a == 2) {
                a = 0;
                $bul.css('left', '0px')
            }
        });

    }

    $('span','#carp').on('mouseenter',function () {
        console.log(2);
        $(this).siblings().css({
            'background-color':'#eee'
        });
        $(this).css({
            'font-weight':'bolder',
            'background-color':'red'
        });

        if($(this).index() == 0){
            $bul.stop();
            clearInterval(btimer);

            $bul.animate({left: '0'},200,function () {
                $bul.stop();
                btimer = setInterval(bcar, 2000);
            })
        }else {
            $bul.stop();
            clearInterval(btimer);

            $bul.animate({left: '-720'},200,function () {
                $bul.stop();
                btimer = setInterval(bcar, 2000);
            })
        }

    });


    var stimer = setInterval(scar, 4500);
    function scar() {

        $sul.animate({left: '-=360'}, function () {
            b++;
            if (b == 2) {
                b = 0;
                $sul.css('left', '0px')
            }
        });
    }

    $('#sleft').on('click',function () {
        $sul.stop();
        clearInterval(stimer);
        $sul.animate({left: '-=360'},200,function () {
            $sul.stop();
            stimer = setInterval(scar, 2000);
        })
    });

    $('#sright').on('click',function () {
        $sul.stop();
        clearInterval(stimer);
        $sul.animate({left: '+=360'},200,function () {
            $sul.stop();
            stimer = setInterval(scar, 2000);
        })
})
});
