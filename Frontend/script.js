$(document).ready(function () {

    //Get de category van de video's van de json file 
    $.getJSON("entries.json", function (data) {

        /*Er verschijnen 2 buttons in de class doelgroep, waardoor de gebruiker kan kiezen welke doelgroep hij wil bekijken.
        Het aantal familie/ volwassenen categorie wordt achteraan de button bijgezet,zodat de gebruiker weet hoeveel video's er zijn
        van een doelgroep */
        $('.doelgroep').append("<button class='doelgroepbutton' id = 'volwassenenbutton' data-filters='volwassenen'>" + "volwassenen" +
            "</button><button  class='doelgroepbutton' id = 'familiebutton' data-filters='familie'>" + "familie" + "</button>");

        //Variabelen initialiseren zodat deze gebruikt kunnen worden in de loop
        let dans = 0;
        let dansVolwassenen = 0;
        let dansFamilie = 0;
        let comedy = 0;
        let comedyVolwassenen = 0;
        let comedyFamilie = 0;
        let theater = 0;
        let theaterVolwassenen = 0;
        let theaterFamilie = 0;
        let concert = 0;
        let concertVolwassenen = 0;
        let concertFamilie = 0;
        let multidisciplinair = 0;
        let multidisciplinairVolwassenen = 0;
        let multidisciplinairFamilie = 0;
        let literatuur = 0;
        let literatuurVolwassenen = 0;
        let literatuurFamilie = 0;
        let muziektheater = 0;
        let muziektheaterVolwassenen = 0;
        let muziektheaterFamilie = 0;
        let figurentheater = 0;
        let figurentheaterVolwassenen = 0;
        let figurentheaterFamilie = 0;
        let circus = 0;
        let circusVolwassenen = 0;
        let circusFamilie = 0;
        let opera = 0;
        let operaVolwassenen = 0;
        let operaFamilie = 0;

        //Een loop zodat kan nagekeken worden hoeveel verschillende video's per genre er zijn
        for (j = 0; j < data.items.length; j++) {
            if (data.items[j]["genre-v2"] == "dans") {
                dans++;
            } else if (data.items[j]["genre-v2"] == "comedy") {
                comedy++;
            } else if (data.items[j]["genre-v2"] == "theater") {
                theater++;
            } else if (data.items[j]["genre-v2"] == "concert") {
                concert++;
            } else if (data.items[j]["genre-v2"] == "multidisciplinair") {
                multidisciplinair++;
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
        $('.genre').append("<div id ='normaal'><button class = 'genrebutton'  data-filter='dans'>" + "dans (" + dans + ")" +
            "</button><button class = 'genrebutton'  data-filter='comedy'>" + "comedy (" + comedy + ")" + "</button><button class = 'genrebutton' data-filter='theater'>" + "theater (" + theater + ")" +
            "</button><button class = 'genrebutton' data-filter='literatuur'>" + "literatuur (" + literatuur + ")" + "</button><button class = 'genrebutton' data-filter='concert'>" + "concert (" + concert + ")" +
            "</button><button class = 'genrebutton' data-filter='multidisciplinair'>" + "multidisciplinair (" + multidisciplinair + ")" + "</button><button class = 'genrebutton' data-filter='muziektheater'>" + "muziektheater (" + muziektheater + ")" +
            "</button><button class = 'genrebutton' data-filter='figurentheater'>" + "figurentheater (" + figurentheater + ")" + "</button><button class = 'genrebutton' data-filter='circus'>" + "circus (" + circus + ")" +
            "</button><button class = 'genrebutton' data-filter='opera'>" + "opera (" + opera + ")" + "</button><button class='filtersWissen'> Filters wissen </button></div>");

        //Loop om te kijken hoeveel genres er zijn al de category volwassenen is
        for (j = 0; j < data.items.length; j++) {
            if (data.items[j]["genre-v2"] == "dans" && data.items[j].category == "volwassenen") {
                dansVolwassenen++;
            } else if (data.items[j]["genre-v2"] == "dans" && data.items[j].category == "familie") {
                dansFamilie++;
            } else if (data.items[j]["genre-v2"] == "comedy" && data.items[j].category == "volwassenen") {
                comedyVolwassenen++;
            } else if (data.items[j]["genre-v2"] == "comedy" && data.items[j].category == "familie") {
                comedyFamilie++;
            } else if (data.items[j]["genre-v2"] == "theater" && data.items[j].category == "volwassenen") {
                theaterVolwassenen++;
            } else if (data.items[j]["genre-v2"] == "theater" && data.items[j].category == "familie") {
                theaterFamilie++;
            } else if (data.items[j]["genre-v2"] == "concert" && data.items[j].category == "volwassenen") {
                concertVolwassenen++;
            } else if (data.items[j]["genre-v2"] == "concert" && data.items[j].category == "familie") {
                concertFamilie++;
            } else if (data.items[j]["genre-v2"] == "multidisciplinair" && data.items[j].category == "volwassenen") {
                multidisciplinairVolwassenen++;
            } else if (data.items[j]["genre-v2"] == "multidisciplinair" && data.items[j].category == "familie") {
                multidisciplinairFamilie++;
            } else if (data.items[j]["genre-v2"] == "literatuur" && data.items[j].category == "volwassenen") {
                literatuurVolwassenen++;
            } else if (data.items[j]["genre-v2"] == "literatuur" && data.items[j].category == "familie") {
                literatuurFamilie++;
            } else if (data.items[j]["genre-v2"] == "muziektheater" && data.items[j].category == "volwassenen") {
                muziektheaterVolwassenen++;
            } else if (data.items[j]["genre-v2"] == "muziektheater" && data.items[j].category == "familie") {
                muziektheaterFamilie++;
            } else if (data.items[j]["genre-v2"] == "figurentheater" && data.items[j].category == "volwassenen") {
                figurentheaterVolwassenen++;
            } else if (data.items[j]["genre-v2"] == "figurentheater" && data.items[j].category == "familie") {
                figurentheaterFamilie++;
            } else if (data.items[j]["genre-v2"] == "circus" && data.items[j].category == "volwassenen") {
                circusVolwassenen++;
            } else if (data.items[j]["genre-v2"] == "circus" && data.items[j].category == "familie") {
                circusFamilie++;
            } else if (data.items[j]["genre-v2"] == "opera" && data.items[j].category == "volwassenen") {
                operaVolwassenen++;
            } else if (data.items[j]["genre-v2"] == "opera" && data.items[j].category == "familie") {
                operaFamilie++;
            }
        }

        $('.genre').append("<div id='volwassenenGenre'><button id ='dansId' class = 'genrebutton'  data-filter='dans'>" + "dans (" + dansVolwassenen + ")" +
            "</button><button class = 'genrebutton'  data-filter='comedy'>" + "comedy (" + comedyVolwassenen + ")" + "</button><button class = 'genrebutton' data-filter='theater'>" + "theater (" + theaterVolwassenen + ")" +
            "</button><button class = 'genrebutton' data-filter='literatuur'>" + "literatuur (" + literatuurVolwassenen + ")" + "</button><button class = 'genrebutton' data-filter='concert'>" + "concert (" + concertVolwassenen + ")" +
            "</button><button class = 'genrebutton' data-filter='multidisciplinair'>" + "multidisciplinair (" + multidisciplinairVolwassenen + ")" + "</button><button class = 'genrebutton' data-filter='muziektheater'>" + "muziektheater (" + muziektheaterVolwassenen + ")" +
            "</button><button class = 'genrebutton' data-filter='figurentheater'>" + "figurentheater (" + figurentheaterVolwassenen + ")" + "</button><button class = 'genrebutton' data-filter='circus'>" + "circus (" + circusVolwassenen + ")" +
            "</button><button class = 'genrebutton' data-filter='opera'>" + "opera (" + operaVolwassenen + ")" + "</button><button class='filtersWissen'> Filters wissen </button></div>");

        $('.genre').append("<div id='familieGenre'><button id ='dansId' class = 'genrebutton'  data-filter='dans'>" + "dans (" + dansFamilie + ")" +
            "</button><button class = 'genrebutton'  data-filter='comedy'>" + "comedy (" + comedyFamilie + ")" + "</button><button class = 'genrebutton' data-filter='theater'>" + "theater (" + theaterFamilie + ")" +
            "</button><button class = 'genrebutton' data-filter='literatuur'>" + "literatuur (" + literatuurFamilie + ")" + "</button><button class = 'genrebutton' data-filter='concert'>" + "concert (" + concertFamilie + ")" +
            "</button><button class = 'genrebutton' data-filter='multidisciplinair'>" + "multidisciplinair (" + multidisciplinairFamilie + ")" + "</button><button class = 'genrebutton' data-filter='muziektheater'>" + "muziektheater (" + muziektheaterFamilie + ")" +
            "</button><button class = 'genrebutton' data-filter='figurentheater'>" + "figurentheater (" + figurentheaterFamilie + ")" + "</button><button class = 'genrebutton' data-filter='circus'>" + "circus (" + circusFamilie + ")" +
            "</button><button class = 'genrebutton' data-filter='opera'>" + "opera (" + operaFamilie + ")" + "</button><button class='filtersWissen'> Filters wissen </button></div>");

        //Hide de button om alle geselecteerde genres en doelgroepen te verwijderen
        $('.filtersWissen').hide();

        //Wanneer er op een doelgroepbutton of genrebutton wordt geklikt komt een knop te voorschijn met filters wissen
        $('.genrebutton, #volwassenenbutton, #familiebutton').on('click', function () {
            $('.filtersWissen').show();
        });

        //Wanneer er op de filters wissen button wordt geklikt worden alle geselecteerde filters gedeselecteerd
        $('.filtersWissen').on('click', function () {
            $('button').removeClass('genrebutton-active');
            $('.gegevensbutton').show();
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
            if (value === '') {
                $('.gegevensbutton').show();
            }
        });

        //Genre van de buttons wordt in variabelen gestoken
        let filters = $('.genrebutton[data-filter]');
        let genreGegevens = $('.gegevensbutton[data-category]');

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
            //Toont welk genre de button waarop geklikt is heeft
            let filterGenre = clicked.attr('data-filter');
            genreGegevens.filter('[data-category="' + filterGenre + '"]').each(function () {
                $(this).show();
                $(this).removeClass('gegevensbutton');
            });
        });

        //Doelgroep van de buttons wordt in variabelen gestoken
        let filtersDoelgroep = $('.doelgroepbutton[data-filters]');
        let doelgroepGegevens = $('.gegevensbutton[data-doelgroep]');

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
            }else{
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
            //Toont welk genre de button waarop geklikt is heeft
            let filterDoelgroep = isClicked.attr('data-filters');
            doelgroepGegevens.filter('[data-doelgroep="' + filterDoelgroep + '"]').each(function () {
                $(this).show();
                $(this).removeClass('gegevensbutton');
            });
        });
        //Hide de genres als een bepaalde doelgroep is geselecteerd
        $('#volwassenenGenre').hide();
        $('#familieGenre').hide();
    });

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