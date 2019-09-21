$('#fanpage').tabSlideOut({
                tabLocation:'right',
                action:'click',
                offset:'100px'
            });
            
            $('#kolory').tabSlideOut({
                tabLocation:'right',
                action:'click',
                offset:'230px' 
            });
            
            $('#gierki').tabSlideOut({
                tabLocation:'right',
                action:'click',
                offset:'405px' 
            });
            
            $('#red').click(function(){
                $('body').css("color", "red");
            });
            $('#blue').click(function(){
                $('body').css("color", "aqua");
            });
            $('#green').click(function(){
                $('body').css("color", "green");
            });
            $('#orange').click(function(){
                $('body').css("color", "orange");
            });
            $('#purple').click(function(){
                $('body').css("color", "purple");
            });
            $('#gray').click(function(){
                $('body').css("color", "gray");
            });
            $('#white').click(function(){
                $('body').css("color", "white");
            });
            
            $("#tlo").prop("volume", 0.3);