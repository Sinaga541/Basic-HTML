$(document).ready(function(){
    //show it by popping up
    $(':button[id="btnShow"]').click( function(){
        $('#logo').show();
    });

    $(':button[id="btnHide"]').click( function(){
        $('#logo').hide();
    });

    $(':button[id="btnToggle"]').click( function(){
        $('#logo').toggle();
    });

    $(':button[id="btnFadeIn"]').click( function(){
        $('#logo').fadeIn(1000);
    });

    $(':button[id="btnFadeOut"]').click( function(){
        $('#logo').fadeOut(
            function(){
                alert('done');
            });
    });

    $(':button[id="btnFadeToggle"]').click( function(){
        $('#logo').fadeToggle(3000);
    });

    $(':button[id="btnSlideUp"]').click( function(){
        $('#logo').slideUp();
    });

    $(':button[id="btnSlideDown"]').click( function(){
        $('#logo').slideDown();
    });

    $(':button[id="btnSlideToggle"]').click( function(){
        $('#logo').slideToggle();
    });

    var toggleFlag = true;
    $(' :button[id="btnAnimate"]').click( function() {
        if(toggleFlag){
            $('#logo')
                .show()
                .animate(
                    {
                        'margin-left' : '30px',
                        'margin-top' : '20px',
                        'opacity' : 0.2
                    },
                    2000
                );
        }else{
            $('#logo')
            .show()
            .animate(
                {
                    'margin-left' : '0px',
                    'margin-top' : '0px',
                    'opacity' :1.0
                    },
                    3000
                    );
                }

                toggleFlag =!toggleFlag;
        });
    
});