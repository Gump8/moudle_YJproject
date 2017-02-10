requirejs.cofig({

    //基始路径
    baseUrl: 'js',

    //设置路径 别名
    paths : {

        //别名
        'jquery': '../assets/jquery-3.1.1',
        'home': 'mdHome',
        'list': 'mdList',
        'detail': 'mdDetail'
    },

    //设置加载非difine的 普通文件
    shim: {
        'zoom': {
            deps: ["jquery"],
            exports:'jqzoom'
        }
    }

});