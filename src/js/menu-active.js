$(function () { 
    $('.header__list-wrap a').each(function () {
        var location = window.location.href;
        var link = this.href;
        var index = "index.html";
       
        if((location == link)&&(location.includes(index))) {
        	$(this).addClass('active--white');
        }
        if((location == link)&&(location.includes(index) == false)) {
        	$(this).addClass('active');
        }

    });
});