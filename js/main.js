//menu burger 
$('#nav-icon').on('click', function(){
    $('.nav__body').toggleClass('nav__body--active');
});

$(document).ready(function(){
    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
	});
});
//menu burger 