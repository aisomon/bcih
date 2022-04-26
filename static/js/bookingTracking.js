$(function () {
	$("td:contains('In Malaysia Office')")
		.addClass("text-white btn  bg-info Actions res")
		.css("font-size", ".9rem");
	$("td:contains('Bangladesh Office')")
		.addClass("text-white btn bg-warning Actions res")
		.css("font-size", ".9rem");
	$("td:contains('Customs Office')")
		.addClass("text-white btn bg-primary Actions res")
		.css("font-size", ".9rem");
	$("td:contains('Delivered')")
		.addClass("text-white btn bg-success Actions res")
		.css("font-size", ".9rem");
	$("td:contains('Missing')")
		.addClass("text-white btn bg-danger Actions res")
		.css("font-size", ".9rem");
});
