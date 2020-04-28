$(document).ready(function () {
    //Eenvoudige manier om de style van de filters van de video's te veranderen
    $('.doelgroepbutton').on('click', function () {
        $(this).toggleClass('doelgroepbutton-active');
    });

    //Formulier succesvol verzonden
    /*$("#contact-form").on('submit',function(event) {
                event.preventDefault(); // to prevent default page reloading
                var dataString = $(this).serialize(); // to get the form data
                
                $.ajax({
                    type: "POST",
                    url: "form-to-email.php",
                    data: dataString,
                    success: function(data){
                        $('#contact-form')[0].reset(); // to reset form data
                    }
                }).done(function(data){
                    setTimeout(function () {
                        alert("Form submitted successfully! We'll get back to you soon. Thank you.");
                    }, 2000);
                    //alert("Form submitted successfully! We'll get back to you soon. Thank you."); // This will be called after the ajax executed
                });

            });*/

     //Get de data van de video's van de json file naar de homepagina
     /*$.getJSON( "entries.json", function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
          items.push( "<li id='" + key + "'>" + val + "</li>" );
        });
       
        $( "<ul/>", {
          "class": "my-new-list",
          html: items.join( "" )
        }).appendTo( ".video's" );
      });*/
});