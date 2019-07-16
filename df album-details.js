function getAlbumInformation() {
    var vars = getUrlVars();
    console.log(vars);

    switch(vars.album.normalize('NFD').replace(/[\u0300-\u036f]/g, "")) {
        case "princeRoyceTopSongs":
            return princeRoyceTopSongs;
        case "Colgando en tus manos":
            return colgandoEnTusManos;
        case "Corazon Profundo":
            return corazonProfundo;
        case "I Love You More Than Tacos":
            return ILoveYouMoreThanTacos;
        case "Filosofia Bachata y Zapatos de Goma":
            return filosofiaBachataYZapatosDeGoma;
        case "En Todo Estare":
            return enTodoEstare;
        case "Mi Nina Bonita":
            return miNinaBonita;
        case "Rompiendo Fronteras":
            return rompiendoFronteras;
        case "El Tren de los Momentos":
            return elTrenDeLosMomentos;
        case "Mil Ciudades":
            return milCiudades;
        case "Tus Ojos Mis Ojos":
            return tusOjosMisOjos;
        case "Mi Primer Millon":
            return miPrimerMillon;
        case "Todo Cambio":
            return todoCambio;
        default:
            alert("ERROR: ALBUM CANNOT BE FOUND!\
            \nThis is the album: " + vars.album);


    }

}

function cartMouseUp(element) {
    if (element.className == 'shopping-green') 
        element.className = 'shopping-blue'; 
    else 
        element.className = 'shopping-green';
    mouseup(element, 'icons/' + element.className + '/' + element.className + '.svg',
        'icons/' + element.className + '/' + element.className + ' hover.svg');
    var price = element.parentNode.previousSibling;
    var artist = price.previousSibling.previousSibling.previousSibling;
    var title = artist.previousSibling;
    // console.log(price.innerHTML + " " + artist.innerHTML + " " + title.innerHTML + " " + document.getElementById("album-art").src)

    if (title.innerHTML + artist.innerHTML in cart) {
        delete cart[title.innerHTML + artist.innerHTML]
    }
    else {
        cart[title.innerHTML + artist.innerHTML] = title.innerHTML + ";" + artist.innerHTML + ";" + price.innerHTML + ";" + document.getElementById("album-art").src;
    }
    // console.log(cart)
}

function loadSongs() {

    var album = getAlbumInformation();

    var titleMain = document.getElementsByClassName("title")[0];
    var albumArtMain = document.getElementById("album-art");
    var songListLabelMain = document.getElementsByClassName("song-list-label")[0];

    titleMain.appendChild(document.createTextNode(album.title));
    albumArtMain.src = album.albumArt;
    songListLabelMain.appendChild(document.createTextNode(album.label));

    var songDiv = document.getElementsByClassName("grid-container-album-details")[0];

    var i;
    for (i = 0; i < album.songs.length; i++) {

        var songNode = document.createElement("div");
        songNode.className = "song";
        
        // Create the contents of song node
        var indexNode = document.createElement("div");
        var textNode = document.createTextNode(i + 1);
        indexNode.appendChild(textNode);

        var titleNode = document.createElement("div");
        textNode = document.createTextNode(album.songs[i].title);
        titleNode.appendChild(textNode);

        var artistNode = document.createElement("div");
        textNode = document.createTextNode(album.songs[i].artist);
        artistNode.appendChild(textNode);

        var timeNode = document.createElement("div");
        textNode = document.createTextNode(album.songs[i].time);
        timeNode.appendChild(textNode);

        var ratingNode = document.createElement("div");
        textNode = document.createTextNode(album.songs[i].rating);
        ratingNode.appendChild(textNode);

        var priceNode = document.createElement("div");
        textNode = document.createTextNode(album.songs[i].price);
        priceNode.appendChild(textNode);        
        
        var cartNode = document.createElement("div");

        // Create img to cart node
        var imgNode = document.createElement("img");
        
        // Add class,src, and touch events to img
        imgNode.className = "shopping-green";
        imgNode.src = "icons/shopping-green/shopping-green.svg";
        imgNode.onmouseover = function(){
                                mouseover(this,'icons/' + this.className + '/' + this.className + ' hover.svg')
                            };
        imgNode.onmouseout= function(){
                                mouseout(this,'icons/' + this.className + '/' + this.className + '.svg')
                            };
        imgNode.onmousedown= function(){
                                mousedown(this,'icons/' + this.className + '/' + this.className + ' clicked.svg')
                            };
        imgNode.onmouseup= function(){
                                cartMouseUp(this);
                            };

        imgNode.id = titleNode.innerHTML + artistNode.innerHTML;

        // Append img to cart node
        cartNode.appendChild(imgNode);
        cartNode.style = "cursor: pointer;";

        // Append children to songNode
        songNode.appendChild(indexNode);
        songNode.appendChild(titleNode);
        songNode.appendChild(artistNode);
        songNode.appendChild(timeNode);
        songNode.appendChild(ratingNode);
        songNode.appendChild(priceNode);
        songNode.appendChild(cartNode);

        // Append songNode to songDiv
        songDiv.appendChild(songNode);
    }

}