$(document).ready(function () {

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

    //Get de category van de video's van de json file 
    $.getJSON("entries.json", function (data) {
        //Een loop zodat dit voor elke array kan gedaan worden
        for (let i in data.items) {
            //De category wordt in een button zichtbaar op de pagina
            $('.doelgroep').append(`<button class = 'doelgroepbutton'>  ${data.items[i].category} </button>`);
            // Hierdoor wordt de style van de filters van de video's veranderd op een efficiënte manier
            $('.doelgroepbutton').on('click', function () {
                $(this).toggleClass('doelgroepbutton-active');
            });
        }
    });

    //Get de genre van de video's van de json file 
    $.getJSON("entries.json", function (data) {
        console.log(data);
        //Een loop zodat dit voor elke array kan gedaan worden
        for (let i in data.items) {
            //De genre wordt in een button zichtbaar op de pagina

            let array = data.items[i]["genre-v2"];
            let count = 0;
            if (array == "comedy") {
                count++;
                console.log(count);

                $('.genre').append(`<button class = 'genrebutton'>  ${data.items[i]["genre-v2"] + count} </button>`);
            }


            // Hierdoor wordt de style van de filters van de video's veranderd op een efficiënte manier
            $('.genrebutton').on('click', function () {
                $(this).toggleClass('genrebutton-active');
            });
        };
    });

    //Get de video's van de json file 
    $.getJSON("entries.json", function (data) {
        //Een loop zodat dit voor elke array kan gedaan worden
        for (let i in data.items) {
            //De thumbnails verschijnen op de pagina
            $('.content').prepend(`<img src="${data.items[i].thumbnail.url}" class='thumbnail' />`)
        }
    });
});