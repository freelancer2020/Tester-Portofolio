$(document).ready(function() {
	$(".box").on("click", function() {
		$(".list").toggle(300);
	})
});

$(function() {
	$(window).on("scroll", function() {
		$("#tester").text($(document).scrollTop());
	})
})
$(document).ready(function() {
	let $body = $("html, body");
	$(".item-1").on("click", function() {
		$body.animate({scrollTop: 802}, 1000);
	})
	$(".item-nav-1").on("click", function() {
		$body.animate({scrollTop: 802}, 1000);
	})
	$(".item-2").on("click", function() {
		$body.animate({scrollTop: 1501}, 1000);
	})
	$(".item-nav-2").on("click", function() {
		$body.animate({scrollTop: 1501}, 1000);
	})
})