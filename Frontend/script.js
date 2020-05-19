$(document).ready(function () {

    //Get de category van de video's van de json file 
    $.getJSON("entries.json", function (data) {

        /*Er verschijnen 2 buttons in de class doelgroep, waardoor de gebruiker kan kiezen welke doelgroep hij wil bekijken.
        Het aantal familie/ volwassenen categorie wordt achteraan de button bijgezet,zodat de gebruiker weet hoeveel video's er zijn
        van een doelgroep */
        $('.doelgroep').append("<button class='doelgroepbutton' id = 'volwassenenbutton' data-filters='volwassenen'>" + "volwassenen" +
            "</button><button  class='doelgroepbutton' id = 'familiebutton' data-filters='familie'>" + "familie" + "</button>");

        //Variabelen initialiseren zodat deze gebruikt kunnen worden in de loop
        let dans = 0,
            dansVolwassenen = 0,
            dansFamilie = 0,
            comedy = 0,
            comedyVolwassenen = 0,
            comedyFamilie = 0,
            theater = 0,
            theaterVolwassenen = 0,
            theaterFamilie = 0,
            concert = 0,
            concertVolwassenen = 0,
            concertFamilie = 0,
            multidisciplinair = 0,
            multidisciplinairVolwassenen = 0,
            multidisciplinairFamilie = 0,
            literatuur = 0,
            literatuurVolwassenen = 0,
            literatuurFamilie = 0,
            muziektheater = 0,
            muziektheaterVolwassenen = 0,
            muziektheaterFamilie = 0,
            figurentheater = 0,
            figurentheaterVolwassenen = 0,
            figurentheaterFamilie = 0,
            circus = 0,
            circusVolwassenen = 0,
            circusFamilie = 0,
            opera = 0,
            operaVolwassenen = 0,
            operaFamilie = 0;

        //Een loop zodat kan nagekeken worden hoeveel verschillende video's per genre er zijn
        for (let j in data.items) {
            data.items[j]["genre-v2"] == "dans" ? dans++ :
                data.items[j]["genre-v2"] == "comedy" ? comedy++ :
                data.items[j]["genre-v2"] == "theater" ? theater++ :
                data.items[j]["genre-v2"] == "concert" ? concert++ :
                data.items[j]["genre-v2"] == "multidisciplinair" ? multidisciplinair++ :
                data.items[j]["genre-v2"] == "literatuur" ? literatuur++ :
                data.items[j]["genre-v2"] == "muziektheater" ? muziektheater++ :
                data.items[j]["genre-v2"] == "figurentheater" ? figurentheater++ :
                data.items[j]["genre-v2"] == "circus" ? circus++ : opera++
        }

        //Er verschijnen 10 buttons waar alle genres in staan en het aantal video's dat bij die genres horen
        $('.genre').append("<div id ='normaal'><button  data-filter='dans'>" + "dans (" + dans + ")" +
            "</button><button  data-filter='comedy'>" + "comedy (" + comedy + ")" + "</button><button data-filter='theater'>" + "theater (" + theater + ")" +
            "</button><button  data-filter='literatuur'>" + "literatuur (" + literatuur + ")" + "</button><button data-filter='concert'>" + "concert (" + concert + ")" +
            "</button><button  data-filter='multidisciplinair'>" + "multidisciplinair (" + multidisciplinair + ")" + "</button><button data-filter='muziektheater'>" + "muziektheater (" + muziektheater + ")" +
            "</button><button  data-filter='figurentheater'>" + "figurentheater (" + figurentheater + ")" + "</button><button data-filter='circus'>" + "circus (" + circus + ")" +
            "</button><button  data-filter='opera'>" + "opera (" + opera + ")" + "</button><button class='filtersWissen'> Filters wissen </button></div>");


        for (let j in data.items) {
            data.items[j]["genre-v2"] == "dans" && data.items[j].category == "volwassenen" ? dansVolwassenen++ :
                data.items[j]["genre-v2"] == "dans" && data.items[j].category == "familie" ? dansFamilie++ :

                data.items[j]["genre-v2"] == "comedy" && data.items[j].category == "volwassenen" ? comedyVolwassenen++ :
                data.items[j]["genre-v2"] == "comedy" && data.items[j].category == "familie" ? comedyFamilie++ :

                data.items[j]["genre-v2"] == "theater" && data.items[j].category == "volwassenen" ? theaterVolwassenen++ :
                data.items[j]["genre-v2"] == "theater" && data.items[j].category == "familie" ? theaterFamilie++ :

                data.items[j]["genre-v2"] == "concert" && data.items[j].category == "volwassenen" ? concertVolwassenen++ :
                data.items[j]["genre-v2"] == "concert" && data.items[j].category == "familie" ? concertFamilie++ :

                data.items[j]["genre-v2"] == "multidisciplinair" && data.items[j].category == "volwassenen" ? multidisciplinairVolwassenen++ :
                data.items[j]["genre-v2"] == "concert" && data.items[j].category == "familie" ? multidisciplinairFamilie++ :

                data.items[j]["genre-v2"] == "literatuur" && data.items[j].category == "volwassenen" ? literatuurVolwassenen++ :
                data.items[j]["genre-v2"] == "literatuur" && data.items[j].category == "familie" ? literatuurFamilie++ :

                data.items[j]["genre-v2"] == "muziektheater" && data.items[j].category == "volwassenen" ? muziektheaterVolwassenen++ :
                data.items[j]["genre-v2"] == "muziektheater" && data.items[j].category == "familie" ? muziektheaterFamilie++ :

                data.items[j]["genre-v2"] == "figurentheater" && data.items[j].category == "volwassenen" ? figurentheaterVolwassenen++ :
                data.items[j]["genre-v2"] == "figurentheater" && data.items[j].category == "familie" ? figurentheaterFamilie++ :

                data.items[j]["genre-v2"] == "circus" && data.items[j].category == "volwassenen" ? circusVolwassenen++ :
                data.items[j]["genre-v2"] == "circus" && data.items[j].category == "familie" ? circusFamilie++ :

                data.items[j]["genre-v2"] == "opera" && data.items[j].category == "volwassenen" ? operaVolwassenen++ :
                data.items[j]["genre-v2"] == "opera" && data.items[j].category == "volwassenen" ? operaFamilie++ : "no"
        }

        $('.genre').append("<div id='volwassenenGenre'><button id ='dansId'  data-filter='dans'>" + "dans (" + dansVolwassenen + ")" +
            "</button><button  data-filter='comedy'>" + "comedy (" + comedyVolwassenen + ")" + "</button><button data-filter='theater'>" + "theater (" + theaterVolwassenen + ")" +
            "</button><button  data-filter='literatuur'>" + "literatuur (" + literatuurVolwassenen + ")" + "</button><button data-filter='concert'>" + "concert (" + concertVolwassenen + ")" +
            "</button><button  data-filter='multidisciplinair'>" + "multidisciplinair (" + multidisciplinairVolwassenen + ")" + "</button><button data-filter='muziektheater'>" + "muziektheater (" + muziektheaterVolwassenen + ")" +
            "</button><button  data-filter='figurentheater'>" + "figurentheater (" + figurentheaterVolwassenen + ")" + "</button><button data-filter='circus'>" + "circus (" + circusVolwassenen + ")" +
            "</button><button  data-filter='opera'>" + "opera (" + operaVolwassenen + ")" + "</button><button class='filtersWissen'> Filters wissen </button></div>");

        $('.genre').append("<div id='familieGenre'><button id ='dansId'  data-filter='dans'>" + "dans (" + dansFamilie + ")" +
            "</button><button  data-filter='comedy'>" + "comedy (" + comedyFamilie + ")" + "</button><button data-filter='theater'>" + "theater (" + theaterFamilie + ")" +
            "</button><button  data-filter='literatuur'>" + "literatuur (" + literatuurFamilie + ")" + "</button><button data-filter='concert'>" + "concert (" + concertFamilie + ")" +
            "</button><button  data-filter='multidisciplinair'>" + "multidisciplinair (" + multidisciplinairFamilie + ")" + "</button><button data-filter='muziektheater'>" + "muziektheater (" + muziektheaterFamilie + ")" +
            "</button><button  data-filter='figurentheater'>" + "figurentheater (" + figurentheaterFamilie + ")" + "</button><button data-filter='circus'>" + "circus (" + circusFamilie + ")" +
            "</button><button  data-filter='opera'>" + "opera (" + operaFamilie + ")" + "</button><button class='filtersWissen'> Filters wissen </button></div>");

            //Geef elke button die een genre toont de class genrebutton
            $(".genre button").each(function() {
               $(this).addClass('genrebutton');
              });

        //Hide de button om alle geselecteerde genres en doelgroepen te verwijderen
        $('.filtersWissen').hide();

        //Wanneer er op een doelgroepbutton of genrebutton wordt geklikt komt een knop te voorschijn met filters wissen
        $('.genrebutton, #volwassenenbutton, #familiebutton').on('click', function () {
            $('.filtersWissen').show();
        });

        //Wanneer er op de filters wissen button wordt geklikt worden alle geselecteerde filters gedeselecteerd
        $('.filtersWissen').on('click', function () {
            $('button').removeClass('genrebutton-active');
            $('.doelgroepbutton').removeClass('doelgroepbutton-active');
            $('.gegevensbutton').show();
            $('.filtersWissen').on('click', function () {
                $('.filtersWissen').hide();
            });
        });

        //Een loop zodat dit voor elk element kan gedaan worden
        for (let i in data.items) {

            //De belangrijkste gegevens wordt zichtbaar op de pagina
            $('.gegevens').append(`<button class='gegevensbutton' id='current' type='button' data-category='${data.items[i]["genre-v2"]}' data-doelgroep='${data.items[i].category}'> <img src="${data.items[i].thumbnail.url}"
            class='thumbnail'/> <p id="genress"> ${data.items[i]["genre-v2"]}</p> <h3> ${data.items[i].name} </h3> <p> ${data.items[i].excerpt} </p> <p class="duur"> 
            ${data.items[i]["video-length"]}</p></button>`);
        }

        $('.gegevensbutton').click(function (e) {
            e.preventDefault();

            //Krijg de index van de video waarop geklikt is
            let videoIndex = ($(this).index());

            //Wanneer op een video geklikt wordt wordt de bovenste elementen gehide zodat hier de juiste video getoont kan worden
            $('.hide').hide();

            //Navigeer naar de id waar de gegevens van de video bekeken kunnen worden
            location.href = "#videosbekijken";

            //De thumbnail waarop geklikt is zijn video wordt getoond op de pagina
            $('#videosbekijken').append(`${data.items[videoIndex]["link-to-video"].metadata.html}`);

            //De thumbnail waarop geklikt haar gegevens komen tevoorschijn om de pagina
            $('#videosbekijken').append(`<div><p>${data.items[videoIndex].excerpt}</p><h2>${data.items[videoIndex].name}</h2><p> 
              ${data.items[videoIndex]["video-notes"]}</p></div><div class='list'><h5>${data.items[videoIndex]["key-takeaways"]}</h5>
              </div><div class='meervideos'><h2>Meer video's</h2></div>`);
        });

        //Wanneer er iets in de inputfield wordt ingegeven
        $('.inputfield').on('keyup', function () {
            //De tekst die in de inputfield wordt ingegeven wordt in een variabele gestoken
            let value = $(this).val().toLowerCase();
            //Er wordt gekeken of er in de gegevensbutton deze letters/woorden voorkomen
            $(".gegevensbutton").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
            //Als de inputfield leeg is toon alle video's
            if (value === '') {
                $('.gegevensbutton').show();
            }
        });

        //Genre van de buttons wordt in variabelen gestoken
        let filters = $('.genrebutton[data-filter]'),
            genreGegevens = $('.gegevensbutton[data-category]');

        //Wanneer er op genrebutton wordt geklikt
        filters.on('click', function (e) {
            //Refresh de pagina niet
            e.preventDefault();
            /* Door de toggleclass functie wordt de class veranderd wanneer ik op de button klik
            hierdoor veranderd het design van de button zodat de gebruiker weet welke aangeklikt is */
            $(this).toggleClass('genrebutton-active');
            //Hide alle video's
            $('.gegevensbutton').hide();
            //Toont welke genrebutton aangeklikt is
            let clicked = $(this);

            //Als de geselecteerde genre heeft als class active
            if (clicked.hasClass('genrebutton-active')) {

                //Toont welk genre de button waarop geklikt is heeft
                let filterGenre = clicked.attr('data-filter');
                //Gaat op zoekn in de video's welke video het geslecteerde genre heeft
                genreGegevens.filter('[data-category="' + filterGenre + '"]').each(function () {
                    //Toont dit genre
                    $(this).show();
                    //Verwijderd de class van de button
                    $(this).removeClass('gegevensbutton');
                });
                //Als ze niet active zijn 
            } else {
                //Toont welk genre de button waarop geklikt is heeft
                let filterGenre = clicked.attr('data-filter');
                //Gaat op zoek in de video's welke video het geslecteerde genre heeft
                genreGegevens.filter('[data-category="' + filterGenre + '"]').each(function () {
                    //Toont dit genre
                    $(this).hide();
                    //Verwijderd de class van de button
                    $(this).addClass('gegevensbutton');
                });
            }
        });

        //Doelgroep van de buttons wordt in variabelen gestoken
        let filtersDoelgroep = $('.doelgroepbutton[data-filters]'),
            doelgroepGegevens = $('.gegevensbutton[data-doelgroep]');

        //Wanneer er op genrebutton wordt geklikt
        filtersDoelgroep.on('click', function (e) {
            /* Door de toggleclass functie wordt de class veranderd wanneer ik op de button klik
            hierdoor veranderd het design van de button zodat de gebruiker weet welke aangeklikt is */
            $(this).toggleClass('doelgroepbutton-active');

            //Nakijken welke doelgroep is geselecteerd om de juiste hoeveelheid genres te tonen
            if ($('#volwassenenbutton').hasClass('doelgroepbutton-active') && !$('#familiebutton').hasClass('doelgroepbutton-active')) {
                $('#volwassenenGenre').show();
                $('#familieGenre').hide();
                $('#normaal').hide();
            } else if ($('#familiebutton').hasClass('doelgroepbutton-active') && !$('#volwassenenbutton').hasClass('doelgroepbutton-active')) {
                $('#familieGenre').show();
                $('#volwassenenGenre').hide();
                $('#normaal').hide();
            } else if ($('#volwassenenbutton').hasClass('doelgroepbutton-active') && $('#familiebutton').hasClass('doelgroepbutton-active')) {
                $('#normaal').show();
                $('#familieGenre').hide();
                $('#volwassenenGenre').hide();
            } else {
                $('#normaal').show();
                $('#familieGenre').hide();
                $('#volwassenenGenre').hide();
            }

            //Refresh de pagina niet
            e.preventDefault();
            //Hide alle video's
            $('.gegevensbutton').hide();
            //Toont welke genrebutton aangeklikt is
            let isClicked = $(this);
            //Als de geselecteerde genre heeft als class active
            if (isClicked.hasClass('doelgroepbutton-active')) {

                //Toont welke doelgroep de button waarop geklikt is heeft
                let filterDoelgroep = isClicked.attr('data-filters');
                //Gaat op zoek in de video's welke video het geslecteerde genre heeft
                doelgroepGegevens.filter('[data-doelgroep="' + filterDoelgroep + '"]').each(function () {
                    //Toont de doelgroep
                    $(this).show();
                    //Verwijderd de class van de button
                    $(this).removeClass('gegevensbutton');
                });
                //Als ze niet active zijn 
            } else {
                //Toont welke doelgroep de button waarop geklikt is heeft
                let filterDoelgroep = isClicked.attr('data-filters');
                //Gaat op zoek in de video's welke video de geslecteerde doelgroep heeft
                doelgroepGegevens.filter('[data-doelgroep="' + filterDoelgroep + '"]').each(function () {
                    //Hide dit genre
                    $(this).hide();
                    //Verwijderd de class van de button
                    $(this).addClass('gegevensbutton');
                });
            }
        });

        //Hide de genres als een bepaalde doelgroep is geselecteerd
        $('#volwassenenGenre').hide();
        $('#familieGenre').hide();

        //Pagination
        //Pagination werkt pas als je op een pagina klikt en werkt niet als je op de categorien of doelgroepen klikt
        //12 video's per pagina tonen
        pageSize = 12;

        let showPage = (page) => {
            //Hide alle video thumbnails
            $(".gegevensbutton").hide();

            //Loop die ervoor zorgt dat als je op pagina klikt de juiste pagina tevoorschijn komt
            $(".gegevensbutton").each(function (n) {

                if (n >= pageSize * (page - 1) && n < pageSize * page)
                    $(this).show();
            });
        }

        //Toon de eerste pagina bij het starten van de website  
        showPage(1);

        //Wanneer er op een pagina wordt gekikt wordt de pagina die aangeklikt is getoont met een andere design
        $("#pages .pages_1").click(function () {
            $("#pages .pages_1").removeClass("current");
            $(this).addClass("current");
            showPage(parseInt($(this).text()));
        });
    });


    //Hide de meldingen bij het form
    $('.error-message-2,.empty-state-2').hide();

    //Form verzenden
    $("#mening").submit(function (event) {
        //Zorgt ervoor dat de pagina niet refreshed
        event.preventDefault();
        //Wanneer het form aan het laaden is
        $("#mening").on("load", function () {
            //Verandert de value van de button
            $('.submit-button-2').prop('value', 'Even geduld...');
        });
        //Hide het formulier
        $('.form').hide();
        //Toon de melding
        $('.empty-state-2').show();
    });
});