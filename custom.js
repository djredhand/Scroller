
jQuery(document).ready(function(jQuery){
function init(){
	loaded();
	var myScroll;

	function loaded() {
		myScroll = new iScroll('scroll_wrapper', {
			snap: true,
			momentum: false,
			hScrollbar: false,
			onScrollEnd: function () {
				document.querySelector('#scroll_indicator > li.active').className = '';
				document.querySelector('#scroll_indicator > li:nth-child(' + (this.currPageX+1) + ')').className = 'active';
			}
		 });
	}
	//document.addEventListener('DOMContentLoaded', loaded, false);
	
	$('#scroll_indicator li').click(function(){
		var li = $(this);
		myScroll.goToPage(li.prevAll().length, li);
		
		return false;
	});
	$('#scroll_next').click(function(){
		var activeItem = $('ul#scroll_indicator li.active').prevAll().length;
		myScroll.scrollToPage( activeItem + 1 , 0);
		//myScroll.scrollToPage('next', 0);
		return false;
	});
	$('#scroll_prev').click(function(){
		var activeItem = $('ul#scroll_indicator li.active').prevAll().length;
		myScroll.scrollToPage( activeItem - 1 , 0);
		//myScroll.scrollToPage('prev', 0);
		return false;
	})
	
	/*
	* Let create the goToPage Function2
	*/
	
	iScroll.prototype.goToPage = function(thumbClicked, li){
		// get the size of the frame and multiply it by the index of the frame 
		var frame = $('ul#scroll_thelist').children()[thumbClicked];
		var frameWidth = $(frame).width() + 20;
		$('#scroll_scroller').css({
			webkitTransform: 'translate3d(-' + frameWidth * thumbClicked + 'px, 0px, 0px) scale(1)'
		});
		$('ul#scroll_indicator li.active').attr('class', '');
		$(li).toggleClass('active');
		myScroll.currentPage = thumbClicked;
		
		myScroll.x = frameWidth * thumbClicked;
		myScroll.scrollToPage( thumbClicked, li);
	}
	
}//end init
init()
})