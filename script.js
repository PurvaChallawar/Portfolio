$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer",  "Designer", "Coder"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Developer",  "Designer", "Coder"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
     
    $(window).scroll(function(){
      var positiontop = $(document).scrollTop();
      console.log(positiontop);
   
      if((positiontop > 652 ) && (positiontop < 1152)){
          $('#ani').addClass('animate__animated animate__backInDown');
      }
      if((positiontop > 1215 ) && (positiontop < 1670)){
        $('#box1').addClass('animate__animated animate__zoomIn');
        $('#box2').addClass('animate__animated animate__zoomIn');
        $('#box3').addClass('animate__animated animate__zoomIn');
    }
    if((positiontop > 2900) && (positiontop < 3529)){
        $('#ani2').addClass('animate__animated animate__zoomIn');
    }

    if((positiontop > 1745 ) && (positiontop < 2301))
    {
        $('#ani3').addClass('animate__animated animate__zoomIn');
    }
    if((positiontop > 2146 ) && (positiontop < 2772))
    {
        $('#ani4').addClass('animate__animated animate__zoomIn');
    }

 });

 

});