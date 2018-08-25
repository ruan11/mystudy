$(window).ready(function(){
	var abc = [];
	$(function(){	
	//选中filter下的所有a标签，为其添加hover方法
		$("#filter a").hover(function(){
			$(this).addClass("seling");
		},function(){
			$(this).removeClass("seling");
		});

		//选中filter下所有的dt标签，并且为dt标签后面的第一个dd标签下的a标签添加样式seled
		$("#filter dt+dd a").attr("class", "seled"); 
		//设置(attr)样式
		//为filter下的所有a标签添加单击事件
		$("#filter a").click(function(){
			$(this).parents("dl").children("dd").each(function(){
				$(this).children("div").children("a").removeClass("seled");
			});
		
			$(this).attr("class", "seled");
			var needhide = $(this);
			needhide.parentsUntil("dl").parent().hide();
			abc.push(needhide);
			var val = $(this).html().replace(/ /g, "kongge");
			var condition = '<a class="inbtn pzbtn" rel="'+$(this).html()+'"><span onclick=deleteC("'+val+'")>'+$(this).html()+'</span></a>';
			$("#condition").append(condition);
			// alert(RetSelecteds()); //返回选中结果
		});
	// alert(RetSelecteds()); //返回选中结果
	});
})