/***
date:1116
by:Huixian
****/

var manifest;//图片预加载变量
var preload;//图片预加载变量

$(function(){
	setupManifest();//图片资源加载
	startPreload();//图片资源加载
})

//定义相关JSON格式文件列表
function setupManifest() {
    manifest = [
    	 {src:'img/a_4_car.png',id:'a_4_car'},
    	 {src:'img/a_car.png',id:'a_car'},
    	 {src:'img/a_car_5.png',id:'a_car_5'},
    	 {src:'img/a_center.png',id:'a_center'},
    	 {src:'img/a_dots.png',id:'a_dots'},
    	 {src:'img/b-car-1.png',id:'b-car-1'},
    	 {src:'img/b-car-2.png',id:'b-car-2'},
         {src:'img/btn_01.png',id:'btn_01'},
         {src:'img/car.png',id:'car'},
         {src:'img/car_00.png',id:'car_00'},
         {src:'img/car_inner_02.png',id:'car_inner_02'},
         {src:'img/car_logo_01.png',id:'car_logo_01'},
         {src:'img/car_logo_03.png',id:'car_logo_03'},
         {src:'img/car-title-02.png',id:'car-title-02'},
         {src:'img/car-title-2.png',id:'car-title-2'},
         {src:'img/c-car-1.png',id:'c-car-1'},
         {src:'img/c-car-cen.png',id:'c-car-cen'},
         {src:'img/clause.png',id:'clause'},
         {src:'img/clause_select.png',id:'clause_select'},
         {src:'img/close.png',id:'close'},
         {src:'img/code-2.png',id:'code-2'},
         {src:'img/c-title.png',id:'c-title'},
         {src:'img/c-title2.png',id:'c-title2'},
         {src:'img/eye.png',id:'eye'},
         {src:'img/first_01.png',id:'first_01'},
         {src:'img/first_02.png',id:'first_02'},
         {src:'img/first_03.png',id:'first_03'},
         {src:'img/first_04.png',id:'first_04'},
         {src:'img/first_05.png',id:'first_05'},
         {src:'img/first_06.png',id:'first_06'},
         {src:'img/first_07.png',id:'first_07'},
         {src:'img/first_08.png',id:'first_08'},
         {src:'img/first_btn.png',id:'first_btn'},
         {src:'img/flooer.png',id:'flooer'},
         {src:'img/last_text.png',id:'last_text'},
         {src:'img/form_boy.png',id:'form_boy'},
         {src:'img/form_city.png',id:'form_city'},
         {src:'img/form_email.png',id:'form_email'},
         {src:'img/form_girl.png',id:'form_girl'},
         {src:'img/form_jin.png',id:'form_jin'},
         {src:'img/form_name.png',id:'form_name'},
         {src:'img/form_pho.png',id:'form_pho'},
         {src:'img/form_sex.png',id:'form_sex'},
         {src:'img/form_sheng.png',id:'form_sheng'},
         {src:'img/form_tiao.png',id:'form_tiao'},
         {src:'img/form_title.png',id:'form_title'},
         {src:'img/form_tj.png',id:'form_tj'},
         {src:'img/form_yinsi.png',id:'form_yinsi'},
         {src:'img/last1_text.png',id:'last1_text'},
         {src:'img/last_car1.png',id:'last_car1'},
         {src:'img/last_car2.png',id:'last_car2'},
         {src:'img/s1.png',id:'s1'},
         {src:'img/s2.png',id:'s2'},
         {src:'img/s3.png',id:'s3'},
         {src:'img/s4.png',id:'s4'},
         {src:'img/s5.png',id:'s5'},
         {src:'img/s6.png',id:'s6'},
         {src:'img/s7.png',id:'s7'},
         {src:'img/s8.png',id:'s8'},
         {src:'img/s9.png',id:'s9'},
         {src:'img/s10.png',id:'s10'},
         {src:'img/s11.png',id:'s11'},
         {src:'img/lei_pic.png',id:'lei_pic'},
         {src:'img/lei_pic00.png',id:'lei_pic00'},
         {src:'img/lei_round.png',id:'lei_round'},
         {src:'img/link_btn1.png',id:'link_btn1'},
         {src:'img/load-car.png',id:'load-car'},
         {src:'img/loadimg_1.png',id:'loadimg_1'},
         {src:'img/loading.png',id:'loading'},
         {src:'img/logo.png',id:'logo'},
         {src:'img/money.png',id:'money'},
         {src:'img/my-center.png',id:'my-center'},
         {src:'img/p6-viedo-1.png',id:'p6-viedo-1'},
         {src:'img/p6-viedo-2.png',id:'p6-viedo-2'},
         {src:'img/page_02.png',id:'page_02'},
         {src:'img/page_03.png',id:'page_03'},
         {src:'img/page_04.png',id:'page_04'},
         {src:'img/page_05.png',id:'page_05'},
         {src:'img/page_06.png',id:'page_06'},
         {src:'img/page_022.png',id:'page_022'},
         {src:'img/price_img.png',id:'price_img'},
         {src:'img/skip.png',id:'skip'},
         {src:'img/sound.png',id:'sound'},
         {src:'img/text.png',id:'text'},
         {src:'img/text_0.png',id:'text_0'},
         {src:'img/text_01.png',id:'text_01'},
         {src:'img/text_02.png',id:'text_02'},
         {src:'img/text_2.png',id:'text_2'},
         {src:'img/text_03.png',id:'text_03'},
         {src:'img/text_03_1.png',id:'text_03_1'},
         {src:'img/text_03_bottom.png',id:'text_03_bottom'},
         {src:'img/text_03_left.png',id:'text_03_left'},
         {src:'img/text_03_right.png',id:'text_03_right'},
         {src:'img/text_03_top.png',id:'text_03_top'},
         {src:'img/text_04_1.png',id:'text_04_1'},
         {src:'img/text_04_2.png',id:'text_04_2'},
         {src:'img/text_4.png',id:'text_4'},
         {src:'img/text_05_1.png',id:'text_05_1'},
         {src:'img/text_5.png',id:'text_5'},
         {src:'img/text_6.png',id:'text_6'},
         {src:'img/text_7.png',id:'text_7'},
         {src:'img/text_8.png',id:'text_8'},
         {src:'img/text_9.png',id:'text_9'},
         {src:'img/text_10.png',id:'text_10'},
         {src:'img/p1.png',id:'p1'},
         {src:'img/p2.png',id:'p2'},
         {src:'img/p3.png',id:'p3'},
         {src:'img/p4.png',id:'p4'}
    ];

    // for(var i=1; i<=36; i++)
    // {
    // 	manifest.push({src:'img/'+i+'.png',id:'car_'+i});
    // }


}

//开始预加载
function startPreload() {
    preload = new createjs.LoadQueue(true);
    //注意加载音频文件需要调用如下代码行
    preload.installPlugin(createjs.Sound);         
    preload.on("fileload", handleFileLoad);
    preload.on("progress", handleFileProgress);
    preload.on("complete", loadComplete);
    preload.on("error", loadError);
    preload.loadManifest(manifest);
 
}

//处理单个文件加载
function handleFileLoad(event) {
    //console.log("文件类型: " + event.item.type);
    /*if(event.item.id == "logo"){
        console.log("logo图片已成功加载");
    }*/
}
 
//处理加载错误：大家可以修改成错误的文件地址，可在控制台看到此方法调用
function loadError(evt) {
    console.log("加载出错！",evt.text);
}
 
//已加载完毕进度 
function handleFileProgress(event) {
    $('#loadpro').text((preload.progress*100|0) + "%");
}

//全度资源加载完毕
function loadComplete(event) {
    //console.log("已加载完毕全部资源");
     $(".warp").show();
     $('.loading').hide();
     window.page_add();
}

