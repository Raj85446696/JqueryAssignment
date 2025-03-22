$(document).ready(function(){
    //show()
    $('#show').click(function(){
        $('.box-1').show(); 
    });

    //hide()
    $('#hide').click(function(){
        $('.box-1').hide(); 
    });

    //toggle()
    $('#toggle').click(function(){
        $('.box-1').toggle(); 
    });

    // slideUp()
    $('#slideup').click(function(){
        $('.box-1').slideUp(1000);  
    });

    //slideDown()
    $('#slidedown').click(function(){
        $('.box-1').slideDown(1000);  
    });

})