
define(['jquery'],function ($) {
    return {
        loadHF:function (callbackfn) {

            $("#index_header").load("Header.html?_"+Math.random(),callbackfn);

            $("#index_footer").load("Footer.html?_"+Math.random());

        }
    };
});
