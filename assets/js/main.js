function resizeImg(){$(window).width()>=768&&$(".desktop.previous-marathon li").height($(".desktop.previous-marathon li").width())}function windowScroll(){var height=$(window).height();$(window).scrollTop()>height?($("header nav").addClass("scrolling"),$(".go-up").fadeIn()):($("header nav").removeClass("scrolling"),$(".go-up").fadeOut())}function initMap(){for(var location=[["Киев, Хрещатик, мэрия",50.446306,30.521063,1],["Йога мела 21 июня",50.449948,30.537126,2]],map=new google.maps.Map(document.getElementById("map"),{zoom:14,center:new google.maps.LatLng(50.450181,30.523373),mapTypeId:google.maps.MapTypeId.ROADMAP}),infowindow=new google.maps.InfoWindow,i=0;i<location.length;i++){var marker=new google.maps.Marker({position:new google.maps.LatLng(location[i][1],location[i][2]),map:map,title:location[i][0]});google.maps.event.addListener(marker,"click",function(marker,i){return function(){infowindow.setContent(location[i][0]),infowindow.open(map,marker)}}(marker,i))}}$(window).resize(function(){resizeImg()}),$(document).ready(function(){windowScroll(),resizeImg(),$(".carousel").slick({dots:!0,infinite:!0,autoplay:!0,autoplaySpeed:4e3,speed:300,adaptiveHeight:!0,slidesToShow:1}),$(".burger").on("click",function(){$(this,".mobile-menu").toggleClass("open-menu"),$(".overlay").fadeToggle(),$(".mobile-menu").slideToggle()}),$(".overlay").on("click",function(){$(".mobile-menu, .burger").removeClass("open-menu"),$(".overlay").fadeOut(),$(".mobile-menu").slideUp()}),$(".scroll_to_target").on("click",function(e){e.preventDefault();var target=$(this).attr("href");return $(window).width()>1023?$("html, body").animate({scrollTop:$(target).offset().top-92},1500):$("html, body").animate({scrollTop:$(target).offset().top},1500),!1}),$(".scroll_to_target_bounce").on("click",function(e){e.preventDefault();var target=$(this).attr("href");return $("html, body").animate({scrollTop:$(target).offset().top},1e3),!1}),$(".go-up").on("click",function(){$("html, body").animate({scrollTop:0},1500)}),$(".carousel-slide").on("click",function(e){e.preventDefault()}),$(window).scroll(function(){windowScroll()}),$(".slick-prev").html('<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#slider-arrow"></use></svg>'),$(".slick-next").html('<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#slider-arrow"></use></svg>'),$(".order-email").submit(function(){var form_data=$(this).serialize();return $.ajax({type:"GET",url:"email_sender.php",data:form_data,success:function(responce){$(this).find(".success").slideDown(),$(this).find("input[type=text], input[type=email]").val()}}),!1})}),function(){function l(){var s=document.createElement("script");s.type="text/javascript",s.async=!0,s.src="//code.jivosite.com/script/widget/"+widget_id;var ss=document.getElementsByTagName("script")[0];ss.parentNode.insertBefore(s,ss)}var widget_id="WweREiif31",d=document,w=window;"complete"==d.readyState?l():w.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}();
//# sourceMappingURL=main.js.map
