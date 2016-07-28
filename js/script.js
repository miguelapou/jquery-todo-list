
$(document).ready(
       function(){
         $('#button').click(
             function(){
                 var toAdd = $('input').val();
                 $('ol').append('<li>' + toAdd + '</li>');
                 $('input').val('');
          });
         $(document).on('dblclick','li', function(){
           $(this).toggleClass('strike').fadeOut('slow');    
            });      
       }
    );