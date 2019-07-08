function resizeCarousels(offsetFirst, offsetSecond) {
    var numAlbums = Math.floor((window.innerWidth - 200) / 200);

    if (typeof offsetFirst == "undefined"){
        offsetFirst = 0;
    }
    if (typeof offsetSecond == "undefined"){
        offsetSecond = 0;
    }

    loadCarousel(0,justinRamsey, numAlbums, offsetFirst);
    loadCarousel(1,spanishPop, numAlbums, offsetSecond);
}


window.onresize = resizeCarousels;

function loadCarousel(index, playlist, maxSize, deltaLeftOffset) {

    var arrows = document.getElementsByClassName("arrow-c");

    var songDiv = document.getElementsByClassName("shaddow-box-c")[index];

    while (songDiv.firstChild) {
        songDiv.removeChild(songDiv.firstChild);
    }

    // Create Image Share Div
    var imageShareDiv = document.createElement("div");
    imageShareDiv.className = "image-share";

    // Create Share Image (img) with event listeners
    var shareImage = document.createElement("img");
    shareImage.src = "icons/share/Share icon.svg";
    shareImage.onmouseover = function(){
        mouseover(this,'icons/share/Share icon hover.svg');
    };
    shareImage.onmouseout = function(){
        mouseout(this,'icons/share/Share icon.svg');
    };
    shareImage.onclick = function(){
        event.stopPropagation();
        showModal();
    };

    // Append to Image Share Div
    imageShareDiv.appendChild(shareImage);
    songDiv.appendChild(imageShareDiv);

    // Create Carousel Title Div
    var carouselTitle = document.createElement("div");
    carouselTitle.className = "carousel-title";

    if (playlist.fromFriend == true) {
        // Create Friends Icon (img)
        var friendsIcon = document.createElement("img");
        friendsIcon.src = "icons/friends1.png";
        friendsIcon.setAttribute('height', '60px');
        friendsIcon.setAttribute('width', '60px');
        carouselTitle.appendChild(friendsIcon);

        var textNode = document.createTextNode(playlist.title);
        carouselTitle.appendChild(textNode);

        songDiv.appendChild(carouselTitle);

    }
    else {

        var popIcon = document.createElement("img");
        popIcon.src = "icons/pop-mic1.png";
        popIcon.setAttribute('height', '60px');
        popIcon.setAttribute('width', '60px');
        carouselTitle.appendChild(popIcon);

        var textNode = document.createTextNode(playlist.title);
        carouselTitle.appendChild(textNode);

        songDiv.appendChild(carouselTitle);
    }

    var albumStrip = document.createElement("div");
    albumStrip.className = "album-strip";

    var size;

    if (typeof maxSize != "undefined" && playlist.songs.length > maxSize) {
        // console.log("Size is equal to maxSize: " + maxSize)
        size = maxSize;
    } else {
        // console.log("Size is equal to length: " + playlist.songs.length)
        size = playlist.songs.length;
    }

    // A B C D E
    // size 4
    // offset 1
    // B C D E


    if (playlist.leftOffset + deltaLeftOffset + size <= playlist.songs.length) {
        playlist.leftOffset += deltaLeftOffset;
        // console.log("adding to offset")
    }

    var i;

    if (playlist.leftOffset < 0){
        playlist.leftOffset = 0;
    }

    size += playlist.leftOffset;

    // Reached the end of size. Fix it.
    if (size > playlist.songs.length) {
        var diff = size - playlist.songs.length;
        size = playlist.songs.length;
        playlist.leftOffset -= diff;
    }

    // console.log(" Size: " + size + " left offset: " + playlist.leftOffset);

    var rightArrowShow = true;
    var leftArrowShow = true;

    for (i = playlist.leftOffset; i < size; i++) {

        if(i == playlist.songs.length - 1) {
            rightArrowShow = false;
        }

        if(i == 0) {
            leftArrowShow = false;
        }

        var songNode = document.createElement("div");
        songNode.className = "album-c";
        var title = playlist.songs[i].title;
        songNode.title = title;
        songNode.onclick = function() {
            location.href = 'album-details.html?album=' + this.title;
        }
        
        var albumImageNode = document.createElement("img");
        albumImageNode.src = playlist.songs[i].source;
        songNode.appendChild(albumImageNode);

        var titleNode = document.createElement("div");
        textNode = document.createTextNode(title);
        titleNode.appendChild(textNode);
        songNode.appendChild(titleNode);

        var artistNode = document.createElement("div");
        textNode = document.createTextNode(playlist.songs[i].artist);
        artistNode.appendChild(textNode);
        songNode.appendChild(artistNode);

        var priceNode = document.createElement("div");
        textNode = document.createTextNode(playlist.songs[i].price);
        priceNode.appendChild(textNode);
        songNode.appendChild(priceNode);

        albumStrip.appendChild(songNode);

    }

    songDiv.appendChild(albumStrip);

    // Show or hide the arrows
    if (index == 0){
        if (leftArrowShow) {
            arrows[0].style = "visibility: visible;";
        } else {
            arrows[0].style = "visibility: hidden;";
        }
        if (rightArrowShow) {
            arrows[1].style = "visibility: visible;";
        } else {
            arrows[1].style = "visibility: hidden;";
        }
    } else {
        if (leftArrowShow) {
            arrows[2].style = "visibility: visible;";
        } else {
            arrows[2].style = "visibility: hidden;";
        }
        if (rightArrowShow) {
            arrows[3].style = "visibility: visible;";
        } else {
            arrows[3].style = "visibility: hidden;";
        }
    }


}