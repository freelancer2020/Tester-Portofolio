$(document).ready(function() {
	$(".box").on("click", function() {
		$(".list").toggle();
		$(".profile-intro").addClass("shad");
		$(".contact-media").addClass("shad");
		$(".btnDown").addClass("shad");
	});
	$(".close-list").on("click", function() {
		$(".list").css({display: "none"});
		$(".profile-intro").removeClass("shad");
		$(".contact-media").removeClass("shad");
		$(".btnDown").removeClass("shad");
	});
	$(".items").on("click", function() {
		$(".list").css({display: "none"});
		$(".profile-intro").removeClass("shad");
		$(".contact-media").removeClass("shad");
		$(".btnDown").removeClass("shad");
	})
});

$(function() {
	$(document).on("scroll", function() {
		$("#tester").text($(document).scrollTop());
		let toko = pageYOffset;
		if (toko > 800) {
			$(".btnTop").css({display: "block"});
		}
		if (toko < 800) {
			$(".btnTop").css({display: "none"});
		}
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
	$(".item-3").on("click", function() {
		$body.animate({scrollTop: 2302}, 1000);
	})
	$(".item-nav-3").on("click", function() {
		$body.animate({scrollTop: 2700}, 1000);
	})
	$(".item-4").on("click", function() {
		$body.animate({scrollTop: 3773}, 1000);
	})
	$(".item-nav-4").on("click", function() {
		$body.animate({scrollTop: 3773}, 1000);
	})
	$(".item-5").on("click", function() {
		$body.animate({scrollTop: 3073}, 1000);
	})
	$(".item-nav-5").on("click", function() {
		$body.animate({scrollTop: 3600}, 1000);
	})

	$(".btnTop").on("click", function() {
		$("html, body").animate({scrollTop: 0}, 1000);
	})
});

function animationSkills() {
	let pageY = pageYOffset;
	if (pageY > 2120) {
		setTimeout(function() {$(".lin-1").animate({width: "95%"}, 2000);}, 1000);
		setTimeout(function() {$(".lin-2").animate({width: "90%"}, 2000);}, 2000);
		setTimeout(function() {$(".lin-3").animate({width: "85%"}, 2000);}, 3000);
		setTimeout(function() {$(".lin-4").animate({width: "90%"}, 2000);}, 4000);
		setTimeout(function() {$(".lin-5").animate({width: "95%"}, 2000);}, 5000);
		setTimeout(function() {$(".lin-6").animate({width: "90%"}, 2000);}, 6000);
		setTimeout(function() {$(".lin-7").animate({width: "75%"}, 2000);}, 7000);
		setTimeout(function() {$(".lin-8").animate({width: "80%"}, 2000);}, 8000);
		setTimeout(function() {$(".lin-9").animate({width: "99%"}, 2000);}, 9000);
		setTimeout(function() {$(".lin-10").animate({width: "83%"}, 2000);}, 10000);
	}
	if (pageY > 2316) {
		setTimeout(function() {$(".lin-11").animate({width: "100%"}, 2000);}, 1000);
		setTimeout(function() {$(".lin-12").animate({width: "80%"}, 2000);}, 2000);
		setTimeout(function() {$(".lin-13").animate({width: "50%"}, 2000);}, 3000);
	}
}

window.onscroll = animationSkills;

let topValue = pageYOffset;
$(".btnDown").on("click", function() {
	alert("pdf version will be added soon!");
})



  
  


function test() {
  let photos = document.getElementById("gallery-screen").children;
  let i, arr =[]; 
  let x = -1;
  for (i = 0; i < photos.length; i++) {
    arr.push(photos[i]);
  }
  let start = setInterval(function() {
    x++;
    arr[x].style.marginLeft = "-700px";
    if (x > photos.length -3) {
      clearInterval(start);
      setTimeout(function() {
        back();
      }, 3000);
    } 
  }, 3000);
}



function back() {
  let photosTwo = document.getElementById("gallery-screen").children;
  let v = photosTwo.length - 1;
  let asc, malborn, saga, ron =[];
  for (let x = 0; x < photosTwo.length; x++) {
    ron.push(photosTwo[x]);
  }
  saga = setInterval(function() {
    v--;
    ron[v].style.marginLeft = "0px";
    if (v == 0) {
      clearInterval(ron);
      test();
    }
  },400);
}

test();
 
 	

