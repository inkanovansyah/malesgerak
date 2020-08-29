function animasiIntro(){
	$("#text span").velocity("transition.slideLeftIn",{
							stagger: 150,
							complete: function(){
								animasiButtonStart();
							}
						});
}

function animasiButtonStart(){
	$("#start").velocity("transition.bounceUpIn")
			.mouseenter(function(){
				$(this).velocity({width:100});
			})
			.mouseleave(function(){
				$(this).velocity({width:125});
			});
}

function animasitIntroOut(){
	$("#start").velocity("transition.whirlOut",{
						stagger: 150,
						complete: function(){
							$("#text").velocity({"font-size":"20px",
													"top":"95%"
												}, 	{
													duration: 1000,
													complete: function(){
														callMenu();
														$("#menu ul li a[href='what_we_do']").trigger("click");
														}
													});
		}
	});
}

function callMenu(){
	$("#menu ul li").velocity("transition.slideLeftIn",{
										 stagger: 250
										});

	$("#menu ul li a").click(function(event){
		event.preventDefault();
		$(this).parent("li").addClass("active").siblings().removeClass("active");

		var hrefString = $(this).attr("href");
		if(!$("#" + hrefString).is(":visible")){
			$(".container-content").fadeOut(1000);
			setTimerout(function(){
				$("#" + hrefString).show();
				window[hrefString]();
			},1000);
		}
	});
}

function what_we_do(){
	$("#what_we_do img").velocity("transition.flipYIn",{duration:1500});
	$("#what_we_do .title").velocity("transition.slideUpIn",{duration:1500});
	$("#what_we_do div").velocity("transition.slideDownIn",{duration:1500});
}

function our_team(){
	$(".members.top240").velocity("transition.slideUpIn",{stagger:100});
	$(".members.top170").velocity("transition.slideDownIn",{stagger:100});
}

$(document).ready(function(){
	animasiIntro();
});