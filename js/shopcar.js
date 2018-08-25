$(function(){
	//全选
	$('#toggle-checkboxes_up').click(function(){
		if(this.checked){
			$('.p-msg .jdcheckbox').attr('checked',true);
		}else{
			$('.p-msg .jdcheckbox').attr('checked',false);
		}
		$('#toggle-none_up').attr('checked',false);
	});
	$('#checkboxes_up').click(function(){
		if(this.checked){
			$('.p-msg .jdcheckbox').attr('checked',true);
		}else{
			$('.p-msg .jdcheckbox').attr('checked',false);
		}
		$('#toggle-none_up').attr('checked',false);
	});
	//console.log($('#toggle-checkboxes_up'));
	//console.log($('.p-msg .jdcheckbox'));
	//console.log($('#checkboxes_up'));
	//全不选
	$('#toggle-none_up').click(function(){
		if(this.checked){
			$('.p-msg .jdcheckbox').attr('checked',false);
		};
		$('#toggle-checkboxes_up').attr('checked',false);
	});
	//反选
	$('#toggle-fan_up').change(function(){
		$('.p-msg .jdcheckbox').each(function(){
			if(this.checked){
				$(this).attr('checked', false);
			}else{
				$(this).attr('checked', true);
			}
		});
	});
	function count(){
		//var len = $('.p-msg .jdcheckbox').length;
		var total = 0;
		$('.apple').each(function(){
			var price = $.trim($(this).find('.p_price strong').html());
			var num = $(this).find('.itxt').html();
//			console.log(typeof num);
			var num_num = parseInt(num);
//			console.log(typeof num_num);
			//console.log(num);
			var xiaoji = price*num;
			//console.log(xiaoji);
			$(this).find($('.sum .xiaoji')).html(xiaoji);
			//console.log($(this).find('.sum .xiaoji').html())
			total += xiaoji;
			console.log(num_num);
			num_num+=num_num
			$('.chose_num').html(num_num);
		});
		$('.sumPrice .em').html(total);
		//$('.chose_num').html(num);
	};
	count();
	//给每个按钮绑定单击事件
	$('.quantity-form .num').each(function(){
		$(this).click(function(){
			if($(this).html() == '+'){
				var v = $(this).prev().html();
				v++;
				$(this).prev().html(v);
				count();
			}else if($(this).html() =="-"){
				var v = $(this).next().html();
				v--;
				if(v == 0){
					v == 0;
				}else(
					$(this).next().html(v)
				)
				count();
			}
		})
	});
	//删除选中的商品
	console.log($('.remove'));
	$('.remove-batch,.cart-remove').click(function(){
		$('.p-msg .jdcheckbox').each(function(){
			if(this.checked){
				$(this).parents('.remove').remove();
			}
		});
	})
})