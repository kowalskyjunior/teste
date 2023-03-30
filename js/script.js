$(function(){
    
    $('.icon-hamburger').click(function(){
        $('.mobile-menu').slideToggle();
        $('.icon-hamburger').css('display','none')
        $('.close-btn').css('display','block')
    })
    
    $('.close-btn').click(function(){
        $('.mobile-menu').slideToggle();
        $('.close-btn').css('display','none')
        $('.icon-hamburger').css('display','block')
    })

})