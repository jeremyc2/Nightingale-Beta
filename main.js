var mouseIn = false;

var cart = [];

function getUrlVars() {
    var vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = decodeURIComponent(value);
    });
    return vars;
}

function mouseover(element, filename) {
    mouseIn = true;
    element.src = filename;
}

function mouseout(element, filename) {
    mouseIn = false;
    element.src = filename;
}

function mousedown(element, filename) {
    element.src = filename;
}

function mouseup(element, filename, altFilename) {
    if (!mouseIn) {
        element.src = filename;
    }
    else {
        element.src = altFilename;
    }
}

function alternate(element, fileOne, fileTwo) {
    let source = element.src.slice(element.src.indexOf("icons/") - element.src.length);
    if (source == fileOne) {
        element.src = fileTwo;
    }
    else {
        element.src = fileOne;
    }
}

function showModal() {
    $('#myModal').modal('show');
}

function hideModal() {
    $('#myModal').modal('hide');
}

function showCart() {

    var cartElement = document.getElementById("cart")
    cartElement.innerHTML = "";


    Object.keys(cart).forEach(function(key) {
        var item = cart[key];


        var array = item.split(";");

        var title = document.createElement("div");
        var artist = document.createElement("div");
        var price = document.createElement("div");
        var albumArt = document.createElement("img");

        albumArt.width = "100";
        albumArt.height = "100";

        title.innerHTML = array[0];
        artist.innerHTML = array[1];
        price.innerHTML = array[2];
        albumArt.src = array[3];

        cartElement.appendChild(title);
        cartElement.appendChild(artist);
        cartElement.appendChild(price);
        cartElement.appendChild(albumArt);

    }); 
    

    $('#cartModal').modal('show');
}

function hideCart() {
    $('#cartModal').modal('hide');
}