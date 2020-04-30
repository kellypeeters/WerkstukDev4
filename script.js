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
        //Een loop zodat dit voor elk element kan gedaan worden
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
                    url:"http://127.0.0.1:5500/index.html#video",
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