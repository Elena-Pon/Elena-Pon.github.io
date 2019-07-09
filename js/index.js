// import '../style/main';
// import "core-js/features/array/flat-map";


console.log('Hello, Helen!');
   

$(function () {

     // Cache selectors
     var lastId,
     topMenu = $(".nav-link"),
     topMenuHeight = topMenu.outerHeight() + 15,
     // All list items
     menuItems = topMenu.find("a"),
     // Anchors corresponding to menu items
     scrollItems = menuItems.map(function() {
       var item = $($(this).attr("href"));
       if (item.length) {
         return item;
       }
     });
     
     
     // Bind click handler to menu items
     // so we can get a fancy scroll animation
     menuItems.click(function(e) {
     var href = $(this).attr("href"),
       offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
     $('html, body').stop().animate({
       scrollTop: offsetTop
     }, 300);
     e.preventDefault();
     });
     
     // Bind to scroll
     $(window).scroll(function() {
     // Get container scroll position
     var fromTop = $(this).scrollTop() + topMenuHeight;
     
     // Get id of current scroll item
     var cur = scrollItems.map(function() {
       if ($(this).offset().top < fromTop)
         return this;
     });
     // Get the id of the current element
     cur = cur[cur.length - 1];
     var id = cur && cur.length ? cur[0].id : "";
     
     if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("link-active")
         .end().filter("[href='#" + id + "']").parent().addClass("link-active");
     }
     });




    $(window).on("scroll", function(){	
        var scrollValue = $("html").scrollTop(); 
        if(scrollValue > 700){
            $(".html").fadeIn();
            $(".css").fadeIn();
            $(".js").fadeIn();
            $(".git").fadeIn();
            $(".parcel").fadeIn();
        } else {
            $(".html").fadeOut();
            $(".css").fadeOut();
            $(".js").fadeOut();
            $(".git").fadeOut();
            $(".parcel").fadeOut();
        }
        console.log(scrollValue);
    });

    $(window).on("scroll", function(){
			
        // $("html")[0].scrollTop
        // $("html").get(0).scrollTop
        var scrollArrowUp = $("html").scrollTop();
        if(scrollArrowUp > 200){
            $(".arrow_up").fadeIn();
        } else {
            $(".arrow_up").fadeOut();
        }
        // console.log(scrollArrowUp);
    });

    $(".arrow_up").on("click", function(){
        $("html, body").animate({
            scrollTop:0
        }, 600);
    });
});
