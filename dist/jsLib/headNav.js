
// define (['jquery'],function ($) {
    
});
;$(function () {
    setTimeout(function () {
        var $ul = $('ul','.allgoods');
        $ul.not('.firstUl').css('display','none');
        $('p','.allgoods').on('click',function (e) {
            $ul.hide('fast');
            $(e.target).next().show('fast');
        });

        var $li = $('li',$ul);
        $li.on('mouseenter',function (e) {
            var e =  $(e.target);

            e.css({
                'border': '1px solid red',
                'border-right': 'none',
                'border-left': 'none',
                'background-color': 'white',
                'width': '208px'
            }).siblings('li').css({
                'border': 'none',
                'background-color': 'transparent'
            });
            $li.next().css('display','block')

            $li.on('mouseout',function () {
                $li.css({
                    'border': 'none',
                    'width': '205px'
                }).siblings('div').css('display','none')
            })
        })

    },800)
})