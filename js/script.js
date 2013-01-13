function flipflop(img){
	var thumb=img.attr("src");
	var parts=thumb.split('preview');
	var newnumber=2+Math.floor(Math.random() * 8.0);
	var newthumb=parts[0]+"preview_"+newnumber+".jpg";
	img.attr("src",newthumb);
}

$("#grid img").hover(function() {
	flipflop($(this));
});










