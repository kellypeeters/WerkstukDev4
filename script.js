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
        /* Door de togleclass functie wordt de class veranderd wanneer ik op de button klik
        hierdoor veranderd het design van de button zodat de gebruiker weet welke aangeklikt is */
        $('.volwassenenbutton').on('click', function () {
            $(this).toggleClass('volwassenenbutton-active');
        });
        $('.familiebutton').on('click', function () {
            $(this).toggleClass('familiebutton-active');
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
        $('.genre').append("<button class = 'genrebutton'>" + "dans (" + dans + ")" +
            "</button><button class = 'genrebutton'>" + "comedy (" + comedy + ")" + "</button><button class = 'genrebutton'>" + "theater (" + theater + ")" +
            "</button><button class = 'genrebutton'>" + "literatuur (" + literatuur + ")" + "</button><button class = 'genrebutton'>" + "concert (" + concert + ")" +
            "</button><button class = 'genrebutton'>" + "multidiciplinair (" + multidiciplinair + ")" + "</button><button class = 'genrebutton'>" + "muziektheater (" + muziektheater + ")" +
            "</button><button class = 'genrebutton'>" + "figurentheater (" + figurentheater + ")" + "</button><button class = 'genrebutton'>" + "circus (" + circus + ")" +
            "</button><button class = 'genrebutton'>" + "opera (" + opera + ")" + "</button>");

        /* Door de togleclass functie wordt de class veranderd wanneer ik op de button klik
        hierdoor veranderd het design van de button zodat de gebruiker weet welke aangeklikt is */
        $('.genrebutton').on('click', function () {
            $(this).toggleClass('genrebutton-active');
        });
    });

    //Get de naam van de video's van de json file 
    $.getJSON("entries.json", function (data) {
        //Een loop zodat dit voor elk element kan gedaan worden
        for (let i in data.items) {
            //De belangrijkste gegevens wordt zichtbaar op de pagina
            $('.gegevens').append(`<button class='gegevensbutton' type='button'> <img src="${data.items[i].thumbnail.url}"
            class='thumbnail' /> <h3> ${data.items[i].name} </h3> <p> ${data.items[i].excerpt} </p> <p class="duur"> 
            ${data.items[i]["video-length"]} </p> </button>`);

            $('.gegevensbutton').click(function (e) {
                e.preventDefault();
                let videoIndex = ($(this).index());

                console.log(videoIndex);
                //Fout bij het ophalen van informatie door cors
                $.ajax({
                    url: "http://127.0.0.1:5500/index.html#video",
                    type: "POST",
                    dataType: "json",
                    contentType: "data.json",
                    data: JSON.stringify(videoIndex),
                    success: function (data) {
                        alert(data);
                    },
                    failure: function (errMsg) {
                        alert(errMsg);
                    }
                });

                //Wanneer op een video geklikt wordt kom je op een nieuwe pagina terecht waar de video bekeken kan worden
                // $(location).attr('href', 'video.html');
                // console.log(videoIndex);

                //De video wordt getoond
                // $(".videosbekijken").append(`<video src="${data.items[videoIndex]['link-to-video']}" />`);

                // $('.informatie').append(`<div><p>${data.items[videoIndex].excerpt}</p><h2>${data.items[videoIndex].name}</h2><p> 
                //${data.items[videoIndex]["video-notes"]}</p><p>${data.items[videoIndex]["social-share-description"]}</p></div>`);

                // $('.extraGegevens').append(`<div><h5>${data.items[videoIndex].genre}</h5><h5> ${data.items[videoIndex]["video-length"]}</h5><h5> 
                // ${data.items[i]["key-takeaways"]}</h5><h5>${data.items[videoIndex]["social-share-description"]}</h5></div>`);
            });
        }
    });
});