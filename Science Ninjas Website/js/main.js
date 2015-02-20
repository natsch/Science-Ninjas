$(document).ready(function() {
    $(".tabMenu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
        var tab = $(this).attr("href");
        $(".tabContent").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-52251905-1', 'historyofstrangers.com');
ga('send', 'pageview');


$('.card').hover(
   function () {

      $(this).find('.blackBar').velocity(
        {
          opacity: "0",
          translateY: "10em"
        },
        {
          duration: 2
        }
      );

    	$(this).find('.blurb').velocity(
    		{
        	translateY: "-1.5em",
         	opacity: "1"
  			},
  			{
           /*delay: 20,*/
    			duration: 2,

  			}
    	);

 	},

/*  reversing the animation when user mouses off*/
  	function () {
    	$(this).find('.blurb').velocity("reverse");
      $(this).find('.blackBar').velocity("reverse");
  	}
);

$(window).scroll(function () {
  if (window.pageYOffset > 40) {
    console.log(window.pageYOffset);
    $('.postcard-header').addClass('orange-background');
    $('.postcard-header').removeClass("no-background");
  } else {
    $('.postcard-header').addClass('no-background');
    $('.postcard-header').removeClass("orange-background");
  }
});
