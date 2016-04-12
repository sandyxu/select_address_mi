$(document).ready(function() {

var selectOptonWith = function(name, ele){
	$.each(ele, function(){
      if($(this).text().match(name)) { $(this).prop("selected", true).trigger('change')} 
	})
}

province = '上海'; // 省份/自治区
city = '上海市'; // 城市/地区/自治州
district = '浦东新区'; // 区/县
bigblock = '北蔡镇'; // 配送区域

selectOptonWith(province, $('.J_province option'));
selectOptonWith(city, $('.J_city option'));
selectOptonWith(district, $('.J_district option'));
selectOptonWith(bigblock, $('.J_bigblock option'));
//$('.J_btn_next').trigger('click')
})
