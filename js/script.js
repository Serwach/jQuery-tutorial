// #15 Binding and Unbiding Events

// #14 Adding and Removing Classes

// var button = $("#lead-banner a");

// button[0].onclick = function(){
// 	$("#points-of-sale").toggleClass("open");
// 	return false;
// }

// $("header .wrapper").removeClass("wrapper");
// $("header > div").addClass("wrapper");

// #13 CSS with JQuery

// $("#social-nav").css({
// 	"top" : "-400px",
// 	"left" : "150px",
// 	"opacity" : "0.5",
// 	"border-top" : "4px solid red"
// });

// $("#social-nav").css("top", "-200px");
// console.log($("#social-nav").css("top", "-200px"));
// console.log($("#social-nav").css("position"));

// #12 Changing Attributes

// console.log($("#contact img").attr("alt"));
// $("#contact img").attr("alt", "location1");

// $("#contact img").removeAttr("alt");

// #11 Removing Content

// $(".button").remove();
// $("#contact img").remove();

// $(".button").empty();
// $("#points-of-sale").empty();

// #10 Wrap and Unwrap Elements

var wrapper = "<div class='wrapper'>";
var button = $(".button");
var wrapped = true;

button[0].onclick = function()
{
	if(wrapped)
	{
		$("section").unwrap();
		wrapped = false;
		button.text("Wrap");
	}
	else
	{
		$("section").wrapAll(wrapper);
		wrapped = true;
		button.text("Unwrap");
	}
}

// $("section").wrap("<div>");
// $("section").unwrap();
// $("section").wrapAll("<div>");

// #9 Adding content using jQuery

// var tweet = "The big fight live";

// $("#tweets div p").text(tweet)
// $("#tweets div").html(tweet)
// $("#tweets div p").after(tweet)
// $("#tweets div p").before(tweet)
// $("#tweets div").prepend(tweet)
// $("#tweets div").append(tweet)

// #8 jQuery Chaining

// $("#contact-methods").css({border: "2px solid red"})
// .next().css({border: "2px solid green"})
// .closest("section").css({border: "2px solid blue"});

// #7 DOM

// $("#social-nav").closest(".wrapper").css({border: "3px solid green"});

// $("#contact").find(".facebook").css({border: "3px solid purple"});

// $("#social-nav").children().css({border: "3px solid green"});

// $(".banner-title").parents().css({border: "3px solid pink"});

// $(".banner-title").parent().css({border: "3px solid pink"});

// $("#social-nav").prev().css({border: "3px solid blue"});

// $("#contact-methods").next().css({border: "3px solid red"});

// #6 Filtry

// $("img[alt=quote]").css({border: "2px solid pink"});

// $("img[alt]").css({border: "2px solid pink"});

// $("div[class]").css({border: "2px solid pink"});

// $("#social-nav li:gt(2)").css({border: "2px solid green"});

// $("#social-nav li:lt(3)").css({border: "2px solid green"});

// $("section:not('#contact')").css({border: "2px solid green"});

// $("header nav li:odd").css({border: "2px solid yellow"});

// $("header nav li:even").css({border: "2px solid blue"});

// $("#contact ul:first-child").css({border: "2px solid red"});
// $("#contact ul:last-child").css({border: "2px solid red"});

// $("#contact ul:first").css({border: "2px solid red"});
// $("#contact ul:last").css({border: "2px solid red"});

// $("header nav li:first").css({border: "2px solid red"});
// $("header nav li:last").css({border: "2px solid red"});

// #5 Selektory

// $("h3").css({border: "3px solid blue"});

// $(".wrapper").css({border: "3px solid red"});

// $("#clients").css({border: "3px solid yellow"});