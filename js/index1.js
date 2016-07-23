$(function(){
	$(".shanchu").click(function(){
		$(".topimg").css({display:"none",height:0})
	})
	// $(".llllb>.llllb1").trigger(function(){
	// 	$(".llllb>llllb2").css({display,"block"})
	// 	$(".llllb").css({background-color:"#EF194A",border-top:"2px solid #9E0D3D"})
	// })
	//banner轮播
	var $banner=$(".banner1");
	var $imga=$(".banner1>a");
	var $btn=$(".banner1>.btn");
	$btn_l=$(".banner1>.btn>.btn_l");
	$btn_r=$(".banner1>.btn>.btn_r");
	var $btn2=$(".banner1>.btn2>li");
	var num=0;
	var flag=true;
	$btn2.eq(0).css("background","#C81623");
	$imga.css("opacity",0).eq(0).css("opacity",1)
	$btn2.mouseover(function(){
		if(!flag){return};
		flag=false;
		var i=$(this).index();
		$btn2.css("background","#666").eq(i).css("background","#C81623");
		$imga.css("opacity",0).eq(i).animate({opacity:1},function(){
			flag=true;
		});
		num=i;
	})
	var t=setInterval(move,2000);
	$banner.mouseover(function(){
		clearInterval(t);
		$btn.css("display","block")
	})
	$banner.mouseout(function(){
		t=setInterval(move,2000);
		$btn.css("display","none")
	})
	$btn_l.click(function(){
		move1();
	})
	$btn_r.click(function(){
		move();
	})
	function move(){
		if(!flag){return;};
		flag=false;
		num++;
		if(num==$imga.length){
			num=0;
		}
		$btn2.css("background","#666").eq(num).css("background","#C81623");
		$imga.css("opacity",0).eq(num).animate({opacity:1},function(){
			flag=true;
		});
	}
	function move1(){
		if(!flag){return;};
		flag=false;
		num--;
		if(num<0){
			num=$imga.length-1;
		}
		$btn2.css("background","#666").eq(num).css("background","#C81623");
		$imga.css("opacity",0).eq(num).animate({opacity:1},function(){
			flag=true;
		});
	}
	//品牌盛典右侧轮播
	var $ppsd2=$(".ppsd>.ppsd2");
	var $ppsd3=$(".ppsd>.ppsd2>.ppsd3");
	var $btn1=$(".ppsd2>.btn1");
	var $btnl1=$(".ppsd2>.btn1>.btn_l1");
	var $btnr1=$(".ppsd2>.btn1>.btn_r1");
	var sflag=true;
	$ppsd2.mouseover(function(){
		$btn1.css("display","block")
	}).mouseout(function(){
		$btn1.css("display","none")
	});
	$btnr1.click(function(){
		if(!sflag){return};
		sflag=false;
		$ppsd3.animate({left:"-1000px"},1000,function(){
			for(var i=0;i<4;i++){
				var first=$(".ppsd3>a:first");
				$ppsd3.append(first);
				$ppsd3.css("left",0)
				sflag=true;
			}
		})
	})
	$btnl1.click(function(){
		if(!sflag){return};
		sflag=false;
		for(var i=0;i<4;i++){
			var last=$(".ppsd3>a:last");
			$ppsd3.prepend(last);
		}
		$ppsd3.css("left","-1000px").animate({left:0},1000,function(){
			sflag=true;
		})
	})
})
$(function(){
	//楼层顶部选项卡
	var $floor=$(".floor");
	$floor.each(function(i){
		var $lia=$floor.eq(i).find(".table li");
		var $span=$floor.eq(i).find(".table span");
		var $fs2=$floor.eq(i).find(".fsn")
		$fs2.eq(0).css("display","block");
		$lia.eq(0).attr("id","lia");
		$span.eq(0).css("display","none");
		$lia.mouseover(function(){
			var index=$(this).index();
			$fs2.css("display","none").eq(index).css("display","block");
			$span.css("display","none").eq(index).css("display","block");
			$lia.attr("id"," ").eq(index).attr("id","lia");
		})
	})
	//楼层轮播
})