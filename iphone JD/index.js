	// 标准参考对象
	var vW = 375;
	// 标准参考html大小
	var vfontSize = 16;
	// 通过js动态的改变html元素的font-size
	var html = document.documentElement;
	// 根据当前屏幕可视窗口 /标准参考的屏幕可视窗口的值 = newFontSize / 16
	var newFontSize = html.clientWidth*vfontSize/vW
	// console.log(newFontSize);
	// 给html的font-size赋值
	html.style.fontSize = newFontSize+'px';
	//轮播图
	// 实例化swiper组件
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 2000,//可选选项，自动滑动
	})