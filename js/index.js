$(window).ready(function(){
	//当页面滚动到 秒杀时让隐藏的第二个head显示
	$(function(){
		$(window).scroll(function () {
			if ($('#seckill').offset().top<$(document).scrollTop()) {
				$("#head").slideDown(500)
						  .css('position','fixed')
						  .css('top',0)
						  .css('z-index',22);
			}else {
				$("#head").slideUp(500);
			}
		});
	});
	//选项卡  促销 更多
	$(function(){
		//$('#fs .mod_tab_content_item').eq(0).css('display','block');
		//console.log($('.mod_tab_head_item:eq(0)'));
		$('#fs .mod_tab_item').each(function(e,ele){
			//var i = $(this).index();
			$(this).mouseover(function(){
			   // console.log(this);
				$('.mod_tab_content_item').removeClass('mod_tab_content_item_on');
				//$('#fs .mod_tab_content_item').hide();
				$('#fs .mod_tab_content_item').eq(e).addClass('mod_tab_content_item_on');
			});
		});
		$('.news_last').mouseenter(function(){
			$('.news_tab_active').css('left',60);
		});
		$('.news_first').mouseenter(function(){
			$('.news_tab_active').css('left',10);
		});
		
	});

	//楼层
	//左边悬浮框
	var isScroll=true;
	$('.leftul').css('top',$(window).height()/2-$('.leftul').height()/2)
	$('.leftitem').each(function(index){
		$(this).attr('index',index);
	});
	$(window).scroll(function(){
		
			if($(this).scrollTop()>=1200){
				$('.leftul').fadeIn();
			}else{
				$('.leftul').fadeOut();
			}
		if(isScroll){
			for(var i=0;i<10;i++){
				if($(window).scrollTop()>=1200+560*i && $(window).scrollTop()<1200+560*(i+1)){
					$('#leftmenuactive').removeAttr('id');
					$('.leftitem').eq(i).attr('id','leftmenuactive');
					break;
				}
			}
		}
	});
	$('.leftitem').click(function(){
		$('#leftmenuactive').removeAttr('id');
		$(this).attr('id','leftmenuactive');
		isScroll=false;
		var index=$(this).attr('index')*560+1200;
		$('html,body').stop().animate({scrollTop:index},1000)
	});
	$('.leftitemhead').click(function(){
		$('html,body').stop().animate({scrollTop:0},1000);
	})

	//右边的固定定位中的显示隐藏
	$(function(){
		$('.tabs-tip').css('display','none');
		$('.jdm-toolbar-tab').each(function(){
			//var i = $(this).index();
			$(this).mouseover(function(){
				$('.tabs-tip').eq($(this).index()).fadeIn('slow');
				$(this).css('background','#C81623');
			});
			$(this).mouseout(function(){
				$('.tabs-tip').eq($(this).index()).fadeOut('slow');
				$(this).css('background','#7A6E6E');
			})
		});
		$('.jdm-toolbar-footer').mouseover(function(){
			$('.jdm-toolbar-footer .tabs-tip').fadeIn('slow');
			$('.jdm-toolbar-footer').css('background','#C81623');
		});
		$('.jdm-toolbar-footer').mouseout(function(){
			$('.jdm-toolbar-footer .tabs-tip').fadeOut('slow');
			$('.jdm-toolbar-footer').css('background','#7A6E6E');
		});
		$('.jdm-toolbar-mini').mouseover(function(){
			$('.jdm-toolbar-mini .tabs-tip').fadeIn('slow');
			$('.jdm-toolbar-mini').css('background','#C81623');
		});
		$('.jdm-toolbar-mini').mouseout(function(){
			$('.jdm-toolbar-mini .tabs-tip').fadeOut('slow');
			$('.jdm-toolbar-mini').css('background','#7A6E6E');
		});
		$('.J-trigger').eq(7).click(function(){
			$('html,body').animate({scrollTop:0},2000);
		});	
	});

	//二级级联菜单
	$(function(){
		$('#fs .cate_menu_item').each(function(e,ele){
			//console.log(e);  li的下标
			//console.log(ele);  li
			
			$(this).mouseover(function(){
				$('.JS_popCtn').css({display:'block'});
				//console.log($('.cate_part').eq(e));
				$('.cate_part').eq(e).css('display','block');					 
				$(this).css('background','#999395');
			}).mouseout(function(){
				$('.JS_popCtn').css('display','none');
				$('.cate_part').css('display','none');
				$(this).css('background','#6E6568');
			});
		});
		
		$('.cate_part').mouseover(function(){
			$('.JS_popCtn').css('display','block');
			$(this).css('display','block');
		}).mouseout(function(){
			$('.JS_popCtn').css('display','none');
			$(this).css('display','none');
		});
	})
	//排行榜的选项卡
	$(function(){
		$('.J_tab_head_item').each(function(){
			$('.J_tab_head_item').mouseover(function(){
				var i = $(this).index();
				$('.top_tab_content').hide();
				$('.top_tab_content').eq(i).show();
				$('.top_tab_active').css('left',i*78);
			});
			
		});
	})
	
	
	var data=80000;
	setTime();
	setInterval(function(){
		data--;
		if(data<=0){
			data=80000
		}
		setTime();
	},1000)
	// 前导零
	function ling(num){
		var newNum=num;
		if(num<10){
			newNum='0'+num;
		}
		return newNum;
	}
	function setTime(){
		var hour=Math.floor(data/60/60);
		var minute=Math.floor(data/60%60);
		var second=Math.floor(data%60);

		$('.time').eq(0).html(ling(hour));
		$('.time').eq(1).html(ling(minute));
		$('.time').eq(2).html(ling(second));
	};
	
	
	//登录框
	
	$('.menuq').mouseover(function(){
		$(this).find('.fixr_tran').addClass('menuactive');
		$(this).css('background','#C81623')
	}).mouseout(function(){
		$(this).find('.fixr_tran').removeClass('menuactive');
		$(this).css('background','#7A6E6E')
	})
	// 右侧返回顶部
	$('#fixr_g').find('.menuq').first().click(function(){
		$(window).scrollTop(0);
	})

	// 登录蒙版
	$('.top').find('.menuq').click(function(){
		$('.masking').css('display','block');
	});
	$('#navdenglu').click(function(){
		$('.masking').css('display','block');
	});
	$('.masking').find('.cuo').click(function(){
		$('.masking').css('display','none');
	});
	$('.registertypea').each(function(index){
		$(this).attr('index',index);
	})
	$('.registertypea').click(function(){
		$('.activetext').removeClass('activetext');
		$(this).addClass('activetext');
		$('.activetype').removeClass('activetype');
		$('.typeon').eq($(this).attr('index')).addClass('activetype')
	})
	
	//轮播图
	window.addEventListener('load',function(){
		var run,
			leftRun,
			rightRun;
		lunBoTu();
		$('#lun').mouseover(function(){
			clearInterval(run);
			run=false;
		}).mouseout(function(){
			lunBoTu();
		});
		$('.lunyuan').each(function(index,yuan){
			$(yuan).attr('index',index);
		});
		$('.lunyuan').mouseover(function(){
			clearId();
			$(this).attr('id','activeyuan');
			$('.luntu').eq($(this).attr('index')).attr('id','activetu');
		});
		$('#lunleft').click(function(){
			clearTimeout(leftRun);
			leftRun=setTimeout(function(){
				var tu=$('#activetu').prev(),
					yuan=$('#activeyuan').prev();
				tu = tu.length==0 ? $('#lunul li:last') : tu;
				yuan = yuan.length==0 ? $('#lunlist li:last') : yuan;
				clearId();
				tu.attr('id','activetu');
				yuan.attr('id','activeyuan');
			},300);
		});
		$('#lunright').click(function(){
			clearTimeout(rightRun);
			rightRun=setTimeout(function(){
				var tu=$('#activetu').next(),
					yuan=$('#activeyuan').next();
				tu = tu.length==0 ? $('#lunul li:first') : tu;
				yuan = yuan.length==0 ? $('#lunlist li:first') : yuan;
				clearId();
				tu.attr('id','activetu');
				yuan.attr('id','activeyuan');
			},300);
				
		});
		function lunBoTu(){
			if(run){
				return;
			}
			run=setInterval(function(){
				var tu=$('#activetu').next(),
					yuan=$('#activeyuan').next();
				tu = tu.length==0 ? $('#lunul li:first') : tu;
				yuan = yuan.length==0 ? $('#lunlist li:first') : yuan;
				clearId();
				tu.attr('id','activetu');
				yuan.attr('id','activeyuan');
			},2000);
		}
		function clearId(){
			$('#activetu').removeAttr('id');
			$('#activeyuan').removeAttr('id');
		}
	});
})











