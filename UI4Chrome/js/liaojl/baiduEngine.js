$(document).ready(function() {
	var form = $('.search-bar');
	var inputs = $('.search-bar').find('input');
	var engine = inputs[0].value;
	console.log(engine);
	if (engine == 'baidu') {
		$("form").submit(function(e) {
			//获取关键词
			e.preventDefault();
			let searchKey = inputs[1].value;
			window.open('https://www.baidu.com/s?wd=' + searchKey);
		});
	}
});
