var em={};$(document).ready(function(){for(var e in em)"function"==typeof em[e].init?em[e].init():console.error("Your block "+e+" doesn't define init-method.")});
!function(){for(var o,e=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],r=n.length,i=window.console=window.console||{};r--;)o=n[r],i[o]||(i[o]=e)}();
!function(){em.ajax={},em.ajax.init=function(){em.ajax.basic()},em.ajax.basic=function(){$("form.form-ajax").on("submit",function(a){a.preventDefault();var e=$(this),t=e.find("ul.errors"),n="/wp-site/wp/wp-admin/admin-ajax.php",i=$("."+e.data("target")),r=e.find('input[name="offset"]'),s=e.find('input[name="per_page"]');e.find('button[type="submit"] i').addClass("fa-spin");var o=e.serializeArray();o.push({name:"action",value:e.attr("action")}),$.ajax({url:n,type:e.attr("method"),data:o,success:function(a){if(0==a.errors.length)t.empty(),0==i.length&&(e.after("<div></div>"),i=e.next()),r.val(parseInt(r.val())+parseInt(s.val())),i.append($(a.html));else{t.empty();for(var n in a.errors){var o=$("<li></li>");o.html(a.errors[n]),t.append(o),e.find('*[name="'+n+'"]').addClass("error")}}e.find('button[type="submit"] i').removeClass("fa-spin")},error:function(a,e,t){var i=["Issues requesting: "+n,t];console.log(i)}})})}}();
!function(){em.animations={elements:{}},em.animations.init=function(){em.animations.getElements(),em.animations.setup()},em.animations.getElements=function(){em.animations.elements=$("[data-vp-add-class]")},em.animations.canWe=function(){return $(window).width()>1024&&em.animations.elements.length?!0:!1},em.animations.setup=function(){em.animations.canWe()&&$(window).on("scroll",function(){return em.animations.canWe()?void em.animations.elements.each(function(){var n=$(window),i=$(this),a=n.scrollTop(),e=n.height(),t=i.offset().top;i.toggleClass(i.data("vp-add-class"),a+e>t)}):!1}).scroll()},em.animations.animateFirstBlockIn=function(){if($(window).width()>1024){var n=$(".page-blocks > section.hero + section"),i=n.find("div").eq(0);n.hasClass("toBeAnimated")?i.css({opacity:1}):i.addClass("animated fadeInUp")}}}();
!function(){em.base={},em.base.init=function(){em.base.example()},em.base.example=function(){}}();
!function(){em.forms={},em.forms.init=function(){}}();
!function(){em.gallery={},em.gallery.init=function(){em.gallery.flickr()},em.gallery.flickr=function(){function i(){var i=$("body").outerWidth();$(".gallery--flickr .gallery__images").width(i)}$(".gallery--flickr .gallery__images").justifiedGallery({rowHeight:250,margins:10,captions:!1}),i(),$(window).resize(function(){i()})}}();
!function(){em.helper={},em.helper.init=function(){em.helper.imgRemoveDimensions(),em.helper.resizeVideos(),em.helper.spemail(),em.helper.jumpTo(),em.helper.toggleHeroNav(),em.helper.hashCheck(),em.helper.goToNext()},em.helper.hashCheck=function(){if(window.location.hash){var e=$('[data-jump="'+window.location.hash.substring(1)+'"]').eq(0);if(1==e.length){var t=e.offset();setTimeout(function(){$("html,body").stop(!0,!0).animate({scrollTop:t.top},400,function(){})},1e3)}}},em.helper.attachUserAgent=function(){var e=document.documentElement;e.setAttribute("data-useragent",navigator.userAgent)},em.helper.toggleHeroNav=function(){$("header.main-header").next().hasClass("hero")&&$("body").addClass("js-hero-active")},em.helper.showOverflown=function(){var e=document.documentElement.offsetWidth;[].forEach.call(document.querySelectorAll("*"),function(t){t.offsetWidth>e&&console.log(t)})},em.helper.imgRemoveDimensions=function(){$("img").each(function(){$(this).removeAttr("width"),$(this).removeAttr("height")})},em.helper.goToNext=function(){$(".js-go-to-next").on("click",function(e){e.preventDefault();var t=$(this),o=t.closest("section").next(),i=$(o).offset();$("html,body").stop(!0,!0).animate({scrollTop:i.top},400,function(){})})},em.helper.resizeVideos=function(){$("iframe").each(function(){var e=$(this);e.attr("data-original-width")||(e.attr("data-original-width",e.attr("width")),e.attr("data-original-height",e.attr("height"))),e.attr("width","100%");var t=e.attr("data-original-height")*e.width()/e.attr("data-original-width");e.attr("height",t)})},em.helper.spemail=function(){$("a.spemail").each(function(e){var t=$(this),o=t.text();o=o.replace(/\(at\)/g,"@"),o=o.replace(/\(dot\)/g,"."),t.attr("href","mailto:"+o),t.text(o)})},em.helper.jumpTo=function(){$("body").on("click",".jump",function(){var e=$(this).attr("href");if(0===$(e).length)return!1;var t=$(e).offset();return $("html,body").stop(!0,!0).animate({scrollTop:t.top},300,function(){window.location.hash=e}),!1})}}();
!function(){em.masonry={},em.masonry.init=function(){em.masonry.setup()},em.masonry.setup=function(){var n=$("div.masonry__items");n.imagesLoaded(function(){n.masonry({itemSelector:"div.masonry__item"})})}}();
!function(){em.mq={},em.mq.breakpoints={xs:0,sm:768,md:992,lg:1200},em.mq.init=function(){},em.mq.query=function(n,e){n="undefined"!=typeof n?n:"xs",e="undefined"!=typeof e?e:"min";var i=!(!window||!window.matchMedia);if(i&&n in em.mq.breakpoints){var m=window.matchMedia("all and ("+e+"-width: "+em.mq.breakpoints[n]+"px)");return m.matches}return!1}}();
!function(){em.navigation={},em.navigation.init=function(){$(".navtoggle").on("click",function(){return $("body").toggleClass("nav-open"),!1}),$("body").on("click","body.nav-open",function(n){return".nav-bar .nav"!==n.target.className&&$("body.nav-open .navtoggle").click(),!0})}}();
!function(){em.resize={},em.resize.init=function(){em.resize.dom()},em.resize.dom=function(){$(window).resize(function(){$("body.nav-open .navtoggle").click()})}}();
!function(){em.slideshows={},em.slideshows.init=function(){em.slideshows.slick()},em.slideshows.slick=function(){$(".slick").slick({dots:!0,arrows:!1,autoplay:!0,autoplaySpeed:4e4,speed:500,fade:!0,cssEase:"linear",centerMode:!0,slidesToScroll:1}),$(".slick--hero").slick({dots:!0,arrows:!1,autoplay:!0,autoplaySpeed:4e3,speed:500,fade:!0,cssEase:"linear",slidesToScroll:1})}}();
!function(){em.tabs={},em.tabs.init=function(){},em.tabs.setup=function(){$(".accordion").each(function(){var i=$(this),a=i.find(".accordion__group");i.find(".accordion__title").on("click",function(){var a=$(this);i.find(".accordion__group").removeClass("is-active"),a.closest(".accordion__group").toggleClass("is-active")}),i.find(".accordion__navbar li a").on("click",function(){var n=$(this);a.removeClass("is-active"),i.find(".accordion__navbar li").removeClass("is-active"),n.parent().addClass("is-active");var c=i.find('div[data-content="'+n.attr("href").substring(1)+'"]');c.toggleClass("is-active")})})}}();