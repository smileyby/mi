$(function()
{
/*顶导航开始*/
var shop=$(".beijing");
var shopx=$(".gouwuxiala");
var shopword=$(".texiao:first");
shop.hover(function()
	{
		shop.css({"background-image":"url(./image/che.jpg)"});
		shopx.animate({height:98});
		shopword.css({"color":"#ff6700"});
	},function()
	{
		shop.css({"background-image":"url(./image/che1.jpg)"});
		shopx.animate({height:0});
		shopword.css({"color":"#b0b0b0"});
	})
/*顶导航结束*/
/*主导航开始*/
/*var xiala=$(".mainword-xialabox");
var mainword=$(".main-word");
mainword.hover(function()
	{
		$(this).find(".mainword-xialabox").animate({height:229},200);
		$(this).find(".mainword-xialabox").css("border-top","1px solid #e0e0e0");
	},function()
	{
		$(this).find(".mainword-xialabox").animate({height:0},200);
		$(this).find(".mainword-xialabox").css("border-top","none");
	})*/
/*主导航结束*/
/*search begin*/
var search=$(".main-rightbox");
var texts=$(".main-right-a");
var sou=$(".main-right-b");
var mi=$(".mi");
var flag=true;
search.hover(function()
	{
		if(flag)
		{
			texts.css({"border-color":"#b0b0b0"});
            sou.css({"border-color":"#b0b0b0"});
		}
	},function()
	{
		if(flag)
		{
			texts.css({"border-color":"#eee"});
            sou.css({"border-color":"#eee"});
		}
	})
mi.hover(function()
	{
		$(this).css({"background":"#ff6700"});
		$(this).find("a").css("color","#fff");
	},function()
	{
		$(this).css({"background":"#eee"});
		$(this).find("a").css("color","#333");
	});
var text=$(".wenbenkuang");
var searchxiala=$(".searchxiala");
text.focus(function()
{
	flag=false;
	texts.css({"border-color":"#ff6700"});
    sou.css({"border-color":"#ff6700"});
    searchxiala.css("display","block");
    mi.each(function(i,obj)
    {
    	$(obj).css("display","none");
    })
})
text.blur(function()
{
	flag=true;
	texts.css({"border-color":"#eee"});
    sou.css({"border-color":"#eee"});
    searchxiala.css("display","none");
    mi.each(function(i,obj)
    {
    	$(obj).css("display","block");
    })
})
var searchwords=$(".searchxiala-li");
searchwords.hover(function()
{
   $(this).css("background-color","#f4f4f4");
},function()
{
   $(this).css("background-color","#fff");
})
/*search over*/
/*banner nav begin*/
var bannerwords=$(".banner-left-ul-li");
bannerwords.hover(function()
	{
		$(this).find(".axiala").show();
	},function()
	{
		$(this).find(".axiala").hide();
	});
var wordsColor=$(".a-li-worda a");
wordsColor.hover(function()
	{
		$(this).css("color","#ff6700");
	},function()
	{
		$(this).css("color","#333");
	});
var xuangou=$(".xuangou");
xuangou.hover(function()
	{
		$(this).find("a").css("color","#fff");
		$(this).css("background","#ff6700");
	},function()
	{
		$(this).find("a").css("color","#ff6700");
		$(this).css("background","#fff");
	})
/*banner nav end*/
/*banner lb brgin*/
var btn=$(".xiaoyuandian-ul-li");
var imgs=$(".datu");
var banner=$(".banner");
var imgsnum=0;
var index;
var nonum;
function bannerlb(type)
{
	if(type=="r")
	{
		imgsnum++;
	    if(imgsnum>4)
	    {
	    	imgsnum=0;
	    }
	}
	if(type=="l")
	{
		imgsnum--;
	    if(imgsnum<0)
	    {
	    	imgsnum=4;
	    }
	}
	imgs.css("z-index","1");
	btn.css("background","#344e53");
    imgs.eq(imgsnum).css("z-index","2");
    btn.eq(imgsnum).css("background","rgba(255,255,255,0.6)");
    nonum=imgsnum;
    
}
var bannert=setInterval(function()
	{
		bannerlb("r");
	},3000);
banner.hover(function()
{
	clearInterval(bannert);
},function()
{
	bannert=setInterval(function()
	{
		bannerlb("r");
	},3000);
})
btn.click(function()
{
	index=$(this).index();
	imgsnum=index;
	imgs.css("z-index","1");
	imgs.eq(index).css("z-index","2");
	btn.css("background","#344e53");
	btn.eq(index).css("background","rgba(255,255,255,0.6)")
	nonum=index;
})
btn.hover(function()
{
	btn.eq(nonum).css("background","rgba(255,255,255,0.6)");
	$(this).css("background","rgba(255,255,255,0.6)");
},function()
{
	btn.css("background","#344e53");
	btn.eq(nonum).css("background","rgba(255,255,255,0.6)");
})
/*banner lb end*/
})