var mouseIn = false;

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
    $('#cartModal').modal('show');
}

function hideCart() {
    $('#cartModal').modal('hide');
}