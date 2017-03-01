//首页的JQUERY效果
 ;$(function(){
 	//导航效果
 	$(".shopClass-item").hover(function(){
 		$(this).addClass("shopClass-active").parent().next().show();
 	},function(){ 
 		$(this).removeClass("shopClass-active").parent().next().hide();
 	});
 	//sidebar移动显示横条
 	$(window).scroll(function(){
 		var top = $(document).scrollTop();//获得窗口的滚动距离
 		var sidebar = $("#sidebar");
		var currentId ="";
		var lists = $(".shop-content");
		lists.each(function(){
			var listtop = $(this).offset().top;
			if (top > listtop-350) {
				currentId = "#" +$(this).attr("id");
			}else{return false;}
 		});
		var currentlink =sidebar.find(".current");
		if (currentId && currentlink.attr("href")!=currentId) {
			currentlink.removeClass("current");
			sidebar.find('[href =' + currentId +']').addClass("current");		
		}
		
		
 	})
 })
;$(function(){
	var index = 0;
	var len = $(".banner .bannerbar-big .imgNum a").length;
	var adTimer;
	$(".banner .banner-bar .imgNum a").mouseover(function(){
		index = $(".banner .banner-bar .imgNum a").index(this);
		showImg(index);
	}).eq(0).mouseover();
    $(".banner .bannerbar-big .imgbox").hover(function(){
    	if (adTimer) {clearInterval(adTimer);}
    },function(){
    	adTimer =setInterval(function(){
    		showImg(index);
    		index ++;
    		if (index ==len) {
    			index =0;
    		}
    	},5000);
    }).trigger("mouseleave");


	function showImg(index){
         var aheight = $(".banner .bannerbar-big").width();
         $(".banner .bannerbar-big .imgbox").stop(true,false)
                                             .animate({
                                             	"left":-aheight*index+"px"
                                             },1000);

         $(".banner .bannerbar-big .imgNum a").removeClass("active")
         .eq(index).addClass("active");
	}
})
//产品介绍页的产品图片放大镜效果 
$(function(){
    $('.jqzoom').jqzoom({
    	zoomType: 'standard',
        lens:true,
        preloadImages: false,
        alwaysOn:false
    	
    });
});
//颜色切换
$(function(){
         $("#colorchoose div").click(function(){
            $(this).addClass("here").siblings().removeClass("here");
         });
         $("#pattenselect div").click(function(){
            $(this).addClass("here").siblings().removeClass("here");
         })
})


























