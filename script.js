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
		$body.animate({scrollTop: 4250}, 1000);
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
	if (pageY > 750) {
		$(".aside-menu-container").css({display: "block"});
		$(".aside-btn-2").addClass("openAside");
	} else {
		$(".aside-menu-container").css({display: "none"});
	}
	if (pageY > 1195) {
		$(".aside-btn-2").removeClass("openAside");
		$(".aside-btn-3").addClass("openAside");
	} else {
		$(".aside-btn-3").removeClass("openAside");
	}
	if (pageY > 1950) {
		$(".aside-btn-3").removeClass("openAside");
		$(".aside-btn-4").addClass("openAside");
	} else {
		$(".aside-btn-4").removeClass("openAside");
	}
	if (pageY > 2672) {
		$(".aside-btn-4").removeClass("openAside");
		$(".aside-btn-5").addClass("openAside");

	} else {
		$(".aside-btn-5").removeClass("openAside");
	}
	if (pageY > 3317) {
		$(".aside-btn-5").removeClass("openAside");
		$(".aside-btn-6").addClass("openAside");
	} else {
		$(".aside-btn-6").removeClass("openAside");
	}
	if (pageY > 3915) {
		$(".aside-btn-6").removeClass("openAside");
		$(".aside-btn-7").addClass("openAside");
	} else {
		$(".aside-btn-7").removeClass("openAside");
	}
	if ( $(window).scrollTop() + $(window).height() == $(document).height() ) {
		setTimeout(function() {
			visitorMsg();
		}, 2000);
			
	}
}


window.onscroll = animationSkills;

let topValue = pageYOffset;
$(".btnDown").on("click", function() {
	alert("pdf version will be added soon!");
});


  
  
function test() {
  //let photos = document.getElementById("gallery-screen");
  let i, arr =[]; 
  let x = -1;
  let photosList = $("#gallery-screen").children();  // jquery solution for server side
  for (i = 0; i < photosList.length; i++) {
    arr.push(photosList[i]);
  }
  let start = setInterval(function() {
    x++;
   // arr[x].style.marginLeft = "-700px"; plain JavaScript also working
   $(arr[x]).css({marginLeft: "-700px"});  //jquery solution
    if (x > photosList.length -3) {
      clearInterval(start);
      setTimeout(function() {
        back();
      }, 3000);
    } 
  }, 3000);
}



function back() {
 // let photosTwo = document.getElementById("gallery-screen");
  let malborn, saga, arr_2 =[];
  let asc = $("#gallery-screen").children();  // jquery solution for server side
  let v = asc.length - 1;
  for (let n = 0; n < asc.length; n++) {
    arr_2.push(asc[n]);
  }
  saga = setInterval(function() {
    v--;
    $(arr_2[v]).css({marginLeft: "0px"});  // jquery solution for server side
    if (v == 0) {
      clearInterval(saga);
      test();
    }
  },500);
}

window.onload = test;
 
/*

window.onclick = function() {
	alert($(window).scrollTop());
}

*/



$(function() {
  $(".asides").hover(function(e) {
    let $target = e.target.textContent;
    switch($target) {
      case "Profile":
        $(e.target).toggleClass("coolos");
        //$(e.target).css({textAlign: "center"});
        break;
      case "About":
         $(e.target).toggleClass("coolos");
        break;
      case "Experience":
         $(e.target).toggleClass("coolos");
        break;
      case "Skills":
         $(e.target).toggleClass("coolos");
        break;
      case "Gallery":
         $(e.target).toggleClass("coolos");
        break;
      case "Awards":
         $(e.target).toggleClass("coolos");
        break;
      case "GitHub":
         $(e.target).toggleClass("coolos");
        break;
      default:
        return;
        
    }
  });
});

$(function() {
	let $home = $("html, body");
	$(".aside-btn-1").on("click", function() {
		$home.animate({scrollTop: 0}, 1000);
	})
	$(".aside-btn-2").on("click", function() {
		$home.animate({scrollTop: 801}, 1000);
	})
	$(".aside-btn-3").on("click", function() {
		$home.animate({scrollTop: 1501}, 1000);
	})
	$(".aside-btn-4").on("click", function() {
		$home.animate({scrollTop: 2311}, 1000);
	})
	$(".aside-btn-5").on("click", function() {
		$home.animate({scrollTop: 3081}, 1000);
	})
	$(".aside-btn-6").on("click", function() {
		$home.animate({scrollTop: 3773}, 1000);
	})
	$(".aside-btn-7").on("click", function() {
		$home.animate({scrollTop: 4245}, 1000);
	})
});

$(function() {
	$(".close-box").on("click", function() {
		$(".container-alert-msg").css({transform: "scale(0, 0)"}, 1000);
		$(".container-alert-msg").removeClass("nor");
	})
});


function visitorMsg() {
	const visMsg = "For visiting my application. Always happy to hear from you!";
	const homeMsg = document.getElementsByClassName("container-alert-msg")[0];
	let tableMsg = document.getElementById("msg-topic");
	let o = -1;
	const rop = document.getElementsByClassName("container-alert-msg")[0];
	rop.classList.add("slideDown");
	if (rop.classList.contains("slideDown")) {
		$("body, html").addClass("mangoMsg");	
	}
	let startMsg = setInterval(function() {
		o++;
		tableMsg.textContent += visMsg.charAt(o);
		if (o > visMsg.length -1) {
			clearInterval(startMsg);
			setTimeout(function() {
				homeMsg.style.display = "none";
				$("body, html").removeClass("mangoMsg");
				rop.classList.remove("slideDown");
			}, 2000);
		}
	}, 150);
}
/*
function algoMsg() {
	if ($(".container-alert-msg").css("marginTop") != "0px") {
			return visitorMsg();
	}
}

*/