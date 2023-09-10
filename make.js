function showFlavor(flavor) {
    var flavorImages = document.getElementsByClassName('flavor-image');
    for (var i = 0; i < flavorImages.length; i++) {
        flavorImages[i].style.display = 'none';
    }
    document.getElementById(flavor + 'Image').style.display = 'block';
}

function showTopping(topping) {
    var toppingImages = document.getElementsByClassName('topping-image');
    for (var i = 0; i < toppingImages.length; i++) {
        toppingImages[i].style.display = 'none';
    }
    document.getElementById(topping + 'Image').style.display = 'block';
}