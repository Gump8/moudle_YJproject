requirejs(['config'],function () {

    requirejs(['HeadFoot'],function (HF) {

        HF.loadHF(function () {
            $('.allgoods').css('display', 'none');
        });

    });

});