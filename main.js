var mouseIn = false;

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