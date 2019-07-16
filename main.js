var mouseIn = false;

var cart = [];

function getUrlVars() {
    var vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = decodeURIComponent(value);
    });
    return vars;
}

function buildCartString() {

    var cartString = "";

    Object.keys(cart).forEach(function(key) {
        var item = cart[key];

        if (cartString == "") {
            cartString += item;
        }
        else {
            cartString += "\\" + item;
        }

    });

    return encodeURIComponent(cartString);

}

function buildCart() {
    var vars = getUrlVars();

    var cartString = vars["cart"];

    if (cartString != undefined)
    {
        var topArray = cartString.split("\\");

        topArray.forEach(function (item, index) {
            console.log(item, index);

            insertCart(item);

        });
    }



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

function insertCart(item) {

    var array = item.split(";");

    var cartButton = document.getElementById(array[0] + array[1]);

    console.log(cartButton);

    if (cartButton) {
        cartMouseUp(cartButton);
    }

    if (array[0]) {
        cart[array[0] + array[1]] = array[0] + ";" + array[1] + ";" + array[2] + ";" + array[3];
        console.log("TEST: ", cart[array[0] + array[1]])
    }
}

function showCart() {

    var cartElement = document.getElementById("cart")
    cartElement.innerHTML = "";


    Object.keys(cart).forEach(function(key) {
        var item = cart[key];


        var array = item.split(";");

        var row = document.createElement("div");
        row.className = "modal-cart-row";

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

        row.appendChild(title);
        row.appendChild(artist);
        row.appendChild(price);
        row.appendChild(albumArt);

        cartElement.appendChild(row);

    }); 
    

    $('#cartModal').modal('show');
}

function hideCart() {
    $('#cartModal').modal('hide');
}