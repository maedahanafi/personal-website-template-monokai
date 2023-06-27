/**
 * Created by mh4047 on 4/28/15.
 */


function loadPage(link){
}

function setThumbnailRedirects(){
	$('.thumbnail img').click(function(ev){
	    src = jQuery(this).attr("src");
	    redirect = src.replace("thumbnails/","img/")
	    //load non-thumbnail version on click a thumbnail
	    window.location.href = redirect;
	});
}

function setPage(link, index){
    $(".nav .button").removeClass("clicked");
    $(".nav .button:eq(" + index+ ")").addClass("clicked");
    $("#dynamic-content" ).load( link, function(){
    	setThumbnailRedirects();
    } );
    
}






