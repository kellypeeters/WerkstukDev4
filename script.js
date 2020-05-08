$(document).ready(function () {
  
    //Formulier succesvol verzenden
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

        //Variabelen initialiseren zodat deze gebruikt kunnen worden in de loop
        let number = 0;
        let volwassenen = 0;

        //Door deze loop wordt er voor elke index van de array nagekeken of de doelgroep familie of volwassenen is
        for (j = 0; j < 100; j++) {
            if (data.items[j].category == "volwassenen") {
                number++;
            } else {
                volwassenen++;
            }
        }
        /*Er verschijnen 2 buttons in de class doelgroep, waardoor de gebruiker kan kiezen welke doelgroep hij wil bekijken.
        Het aantal familie/ volwassenen categorie wordt achteraan de button bijgezet,zodat de gebruiker weet hoeveel video's er zijn
        van een doelgroep */
        $('.doelgroep').append("<button class = 'volwassenenbutton'>" + "volwassenen (" + volwassenen + ")" +
            "</button><button class = 'familiebutton'>" + "familie (" + number + ")" + "</button>");
        /* Door de toggleclass functie wordt de class veranderd wanneer ik op de button klik
        hierdoor veranderd het design van de button zodat de gebruiker weet welke aangeklikt is */
        $('.volwassenenbutton').on('click', function () {
            $(this).toggleClass('genrebutton-active');

            //Wanneer er op een doelgroep wordt geklikt worden de video's met deze doelgroep getoont
            /* if ('.gegevensbutton'.data.items[j].category == "volwassenen") {
                $('.gegevensbutton').hide();
                $('.gegevens').append(this);
            } */
        });

        /* Door de toggleclass functie wordt de class veranderd wanneer ik op de button klik
        hierdoor veranderd het design van de button zodat de gebruiker weet welke aangeklikt is */
        $('.familiebutton').on('click', function () {
            $(this).toggleClass('genrebutton-active');
        });
    });

    //Get de genre van de video's van de json file 
    $.getJSON("entries.json", function (data) {

        //Variabelen initialiseren zodat deze gebruikt kunnen worden in de loop
        let dans = 0;
        let comedy = 0;
        let theater = 0;
        let concert = 0;
        let multidiciplinair = 0;
        let literatuur = 0;
        let muziektheater = 0;
        let figurentheater = 0;
        let circus = 0;
        let opera = 0;

        //Een loop zodat kan nagekeken worden hoeveel verschillende video's per genre er zijn
        for (j = 0; j < 100; j++) {
            if (data.items[j]["genre-v2"] == "dans") {
                dans++;
               /* let genreVideo = ($(this).index());
                console.log(genreVideo);
                $('#dansId').on('click', function () {
                    $(genreVideo).hide();
                });*/
            } else if (data.items[j]["genre-v2"] == "comedy") {
                comedy++;
            } else if (data.items[j]["genre-v2"] == "theater") {
                theater++;
            } else if (data.items[j]["genre-v2"] == "concert") {
                concert++;
            } else if (data.items[j]["genre-v2"] == "multidiciplinair") {
                multidiciplinair++;
            } else if (data.items[j]["genre-v2"] == "literatuur") {
                literatuur++;
            } else if (data.items[j]["genre-v2"] == "muziektheater") {
                muziektheater++;
            } else if (data.items[j]["genre-v2"] == "figurentheater") {
                figurentheater++;
            } else if (data.items[j]["genre-v2"] == "circus") {
                circus++;
            } else if (data.items[j]["genre-v2"] == "opera") {
                opera++;
            }
        }

 
        //Er verschijnen 10 buttons waar alle genres in staan en het aantal video's dat bij die genres horen
        $('.genre').append("<button id ='dansId' class = 'genrebutton'>" + "dans (" + dans + ")" +
            "</button><button class = 'genrebutton'>" + "comedy (" + comedy + ")" + "</button><button class = 'genrebutton'>" + "theater (" + theater + ")" +
            "</button><button class = 'genrebutton'>" + "literatuur (" + literatuur + ")" + "</button><button class = 'genrebutton'>" + "concert (" + concert + ")" +
            "</button><button class = 'genrebutton'>" + "multidiciplinair (" + multidiciplinair + ")" + "</button><button class = 'genrebutton'>" + "muziektheater (" + muziektheater + ")" +
            "</button><button class = 'genrebutton'>" + "figurentheater (" + figurentheater + ")" + "</button><button class = 'genrebutton'>" + "circus (" + circus + ")" +
            "</button><button class = 'genrebutton'>" + "opera (" + opera + ")" + "</button><button class='filtersWissen'> Filters wissen </button>");

        /* Door de togleclass functie wordt de class veranderd wanneer ik op de button klik
        hierdoor veranderd het design van de button zodat de gebruiker weet welke aangeklikt is */
        $('.genrebutton').on('click', function () {
            $(this).toggleClass('genrebutton-active');
        });


        $.getJSON("entries.json", function (data) {
            for (let j in data.items) {
                $('#dansId').on('click', function () {
                    if ('.gegevensbutton' == data.items[j]["genre-v2"] == "dans") {
                        return false;
                    }
                })
            }
        });

        //Wanneer er op de filter dans wordt geklikt gaan de buttons die niet tot deze categorie behoren hiden
        /* $('.gegevensbutton').click(function () {
             //Alle video's die als genre niet dans hebben worden gehide  
             for (let j = 0; j < 100; j++) {
                 if ('.gegevensbutton' !== data.items[j]["genre-v2"] == "dans") {
                     $(this).hide();
                     console.log(this);
                 }
             }
         });*/

        /*  $.getJSON("entries.json", function (data) {
              for (let j in data.items) {
                  console.log('.gegevensbutton' == data.items[j]["genre-v2"] == "dans");
                  //  if (this == data.items[j]["genre-v2"] == "dans") {
                  //    $(this).hide();
              };
          }); */


        $('.filtersWissen').hide();

        //Wanneer er op een doelgroepbutton of genrebutton wordt geklikt komt een knop te voorschijn met filters wissen
        $('.genrebutton, .volwassenenbutton, .familiebutton').on('click', function () {
            $('.filtersWissen').show();
        });

        //Wanneer er op de filters wissen button wordt geklikt worden alle geselecteerde filters gedeselecteerd
        $('.filtersWissen').on('click', function () {
            $('button').removeClass('genrebutton-active');
            $('.filtersWissen').on('click', function () {
                $('.filtersWissen').hide();
            });
        });
    });

    //Get de naam van de video's van de json file 
    $.getJSON("entries.json", function (data) {
        //Een loop zodat dit voor elk element kan gedaan worden
        for (let i in data.items) {
            console.log(data);

            //De belangrijkste gegevens wordt zichtbaar op de pagina
            $('.gegevens').append(`<button class='gegevensbutton' type='button'> <img src="${data.items[i].thumbnail.url}"
            class='thumbnail' /> <h3> ${data.items[i].name} </h3> <p> ${data.items[i].excerpt} </p> <p class="duur"> 
            ${data.items[i]["video-length"]} </p>`);
        }

        $('.gegevensbutton').click(function (e) {
            e.preventDefault();
            //Krijg de index van de video waarop geklikt is
            let videoIndex = ($(this).index());

            // Put the object into storage
            localStorage.setItem('videoIndex', JSON.stringify(videoIndex));

            // Retrieve the object from storage                    
            let retrievedObject = JSON.parse(window.localStorage.getItem('videoIndex'));

            console.log(retrievedObject);

            //Wanneer op een video geklikt wordt wordt de bovenste elementen gehide zodat hier de juiste video getoont kan worden
            $(location).attr('href', 'video.html');

            //De thumbnail waarop geklikt is zijn video wordt getoond op de pagina
            $('#videosbekijken').prepend(`${data.items[retrievedObject]["link-to-video"].metadata.html}`);

            $('.informatie').append(`<div><p>${data.items[retrievedObject].excerpt}</p><h2>${data.items[retrievedObject].name}</h2><p> 
                ${data.items[retrievedObject]["video-notes"]}</p></div>`);

            $('.extraGegevens').append(`<div><h5>${data.items[retrievedObject]["key-takeaways"]}</h5></div>`);
        });
    });

    //Pagination

    //12 video's per pagina tonen
    pageSize = 12;

    function showPage(page) {
        //Hide alle video thumbnails
        $(".gegevensbutton").hide();

        //Loop die ervoor zorgt dat als je op pagina klikt de juiste pagina tevoorschijn komt
        $(".gegevensbutton").each(function (n) {

            if (n >= pageSize * (page - 1) && n < pageSize * page)
                $(this).show();
        });
    }

    //Toon de eerste pagina bij het starten van de website  
    //Deze lijn doet niets en ik snap niet hoe dit komt
    showPage(1);

    //Wanneer er op een pagina wordt gekikt wordt de pagina die aangeklikt is getoont met een andere design
    $("#pages .pages_1").click(function () {
        $("#pages .pages_1").removeClass("current");
        $(this).addClass("current");
        showPage(parseInt($(this).text()));
    });

    //Hide de meldingen bij het form
    $('.error-message-2,.empty-state-2').hide();

    //Form verzenden
    $("#mening").submit(function (event) {
        //Zorgt ervoor dat de pagina niet refreshed
        event.preventDefault();
        //Verandert de value van de button
        $('.submit-button-2').prop('value', 'Even geduld...');
        //Hide het formulier
        $('.form').hide();
        //Toon de melding
        $('.empty-state-2').show();
    });
});