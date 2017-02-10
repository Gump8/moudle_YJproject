;$(function () {
    var $second = $('.second');
    var $secondP = $('.secondHead',$second);

    $secondP.on('mouseenter','span',function () {

        var spanIndex = $(this).index();

        var $ul = $('.mainULcontent ul', $second);

        $ul.css('display','none');
        $(this).siblings().css('border-bottom','none');

        $(this).css('border-bottom','2px solid red');
        $ul.eq(spanIndex).css('display','block')
    })

    var $floorRight = $('.floorRight','.thirdFloor');
    var $floorP = $('.secondHead',$floorRight);

    $floorP.on('mouseenter','span',function () {

        var spanIndex = $(this).index();

        var $ul = $('.mainULcontent ul', $floorRight);

        $ul.css('display','none');
        $(this).siblings().css({
            'border':'none',
            'top': '0px'
        });

        $(this).css({
            'border':'1px solid #a9a9a9',
            'border-bottom':'none',
            'top': '2px'
        });
        $ul.eq(spanIndex).css('display','block')
    })
});