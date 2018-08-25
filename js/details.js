$(window).ready(function(){
//放大镜
// 设置show元素的mousemove
		$('#show').mousemove(function(e){
			// 计算move元素的的left和top值

			// e.pageX  相对于 文档左上角的水平偏移
			// e.pageY  相对于 文档左上角的垂直偏移
			var newLeft = e.pageX - $('#show').offset().left - $('#move').width()/2;
			var newTop = e.pageY - $('#show').offset().top - $('#move').height()/2;
		
			// 水平方向临界点判断
			if(newLeft<=0){
				newLeft = 0;
			}
			if(newLeft>=$('#show').width()-$('#move').width()){
				newLeft = $('#show').width()-$('#move').width();
			}

			// 垂直方向临界点判断
			if(newTop<=0){
				newTop = 0;
			}
			if(newTop>=($('#show').height()-$('#move').height())){
				newTop=$('#show').height()-$('#move').height();
			}

			// 比例
			// newLeft / show.width = bigImg.left / bigImg.width
			var bigImg = $('#big img');
			var newBigLeft = newLeft * bigImg.width() / $('#show').width();
			var newBigTop = newTop * bigImg.height() / $('#show').height();


			// 赋值操作
			$('#move').css({
				left : newLeft,
				top : newTop
			})

			// 给大图进行赋值
			bigImg.css({
				left : -newBigLeft,
				top : -newBigTop
			})
		}).mouseover(function(){
			// 让move显示
			// $('#move').css('display','block');

			// show() 让元素显示
			$('#move').show();
			$('#big').show();
		}).mouseout(function(){
			$('#move').hide();
			$('#big').hide();
		});

		// 图片列表的单击事件
		$('#imglist li img').click(function(){
			// 获取当前图片的地址
			$('#small img').attr('src',$(this).attr('src'));
			$('#big img').attr('src',$(this).attr('src'));
		});
		
		
		//选择颜色
			$('.iteme').click(function(event){
				event.preventDefault();
				// console.log($(this));
				$('.duihao').css('display','none');
				// console.log($('.duihao'));
				//console.log($(this).find('.duihao'));
				$(this).find('.duihao').css('display','block');
			})
			
		//白条分期
			$('.itema').click(function(event){
				event.preventDefault();
				$('.duigou').css('display','none');
				$(this).find('.duigou').css('display','block');
			})
			
			
			
			//控制数量
		
			$("#min").click(function(){   
				if ( $("#text_box").val()<=1){
                     $("#text_box").val(1)
                }
                $("#text_box").val( $("#text_box").val()-1)
               
            }) 
           $("#add").click(function(){
                 $("#text_box").val(parseInt( $("#text_box").val())+1);
                if (parseInt( $("#text_box").val())==1){
                    $('#min').attr('index',true);
                }
      
            })  
           
			
			
			
	//商品评论商品详情选项卡
	function a(){ 
		var $a = $(".shangpinjs-l a"); 
		$a.click(function(){ 
			$(this).addClass("shangpinred") 
			.siblings().removeClass("shangpinred"); 
			var index = $a.index($(this)); 
			//console.log($a.index($(this)));
			//console.log(index)
			$(".spxqy_div_plxxk>div").eq(index).show() 
			$(".spxqy_div_plxxk > div").eq(index).prevAll().hide();  
			$(".spxqy_div_plxxk > div").eq(index).nextAll().show();
		}) 
	}
	a();
	//商品评论选项卡 好中差
	function b(){ 
		var $a = $(".filter-list .filter-li"); 
		$a.click(function(){ 
			$(this).addClass("current") 
			.siblings().removeClass("current"); 
		}) 
	}
	b();
	
	
	//推荐搭配
	function c(){ 
		var $a = $(".jianpan"); 
		$a.click(function(){ 
			$(this).addClass("bbbb") 
			.siblings().removeClass("bbbb"); 
		}) 
	}
	c();
	
	
	
	
	
});