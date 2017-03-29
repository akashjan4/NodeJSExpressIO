"use strict";

var formDisplayElm = function (input) {
    var parentElm = document.getElementById("showInfo");
    input.map(function (data, index) {
        var parentDiv = document.createElement('div');
        parentDiv.className = "prod-parent";
        var productIdDiv = document.createElement('div');
        var productNameDiv = document.createElement('div');
        var productPriceDiv = document.createElement('div');

        productIdDiv.innerHTML = data.id;
        productIdDiv.className = "prod-info";

        productNameDiv.innerHTML = data.name;
        productNameDiv.className = "prod-name";

        productPriceDiv.innerHTML = data.price;
        productPriceDiv.className = "prod-price";

        parentDiv.appendChild(productIdDiv);
        parentDiv.appendChild(productNameDiv);
        parentDiv.appendChild(productPriceDiv);

        parentElm.appendChild(parentDiv);
    })



}
window.onload = function () {
    console.log("system is ready lock and load");

    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            formDisplayElm(JSON.parse(request.response));
        }
    };
    request.open("GET", "api/productslist", true);
    request.send();
};