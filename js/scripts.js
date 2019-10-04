var totalPriceArray = [];
function Order(customSize, cheese) {
    this.customSize = customSize;
    this.sauce = 1;
    this.cheese = cheese;
    this.veggie1 = 1;
    this.veggie2 = 1;
    this.meat = 2;
    this.pizzaPrice = 0;
    this.sidePrice = 3;
}
Order.prototype.pizzaCost = function () {
    if (this.customSize === "Small 10 in.") {
        this.pizzaPrice += 600;
    } else if (this.customSize === "Medium 14 in.") {
        this.pizzaPrice += 900;
    } else if (this.customSize === "Large 18 in.") {
        this.pizzaPrice += 1200;
    }
    if (this.cheese === "cheese") {
        this.pizzaPrice += 100;
    } else if (this.cheese === "light cheese") {
        this.pizzaPrice += 50;
    } else if (this.cheese === "extra cheese") {
        this.pizzaPrice += 150;
    }
    this.pizzaPrice += this.sauce;
    this.pizzaPrice += this.veggie1;
    this.pizzaPrice += this.veggie2;
    this.pizzaPrice += this.meat;
    return this.pizzaPrice;
}
Order.prototype.sideCost = function () {
    return this.sidePrice;
}
Order.prototype.finalCost = function () {
    var cartTotalPrice = 0;
    for (var arrayElement = 0; arrayElement < totalPriceArray.length; arrayElement++) {
        cartTotalPrice += totalPriceArray[arrayElement];
    }
    return cartTotalPrice;
}
function Address(streetAddress, city, state, zipcode) {
    this.streetAddress = streetAddress;
    this.city = city;
    this.state = state;
    this.deliveryAddress = (streetAddress + "  " + city + ", " + state);
}


$(document).ready(function () {

    $(".clickable").click(function () {
        $(".contentsC").fadeToggle();
        $(".cheese").fadeToggle();
    });
    $(".clickable1").click(function () {
        $(".contentsP").fadeToggle();
        $(".pep").fadeToggle();
    });
    $(".clickable2").click(function () {
        $(".contentsM").fadeToggle();
        $(".mar").fadeToggle();
    });
    $(".clickable3").click(function () {
        $(".contentsV").fadeToggle();
        $(".vege").fadeToggle();
    });
    $(".clickable4").click(function () {
        $(".contentsE").fadeToggle();
        $(".exe").fadeToggle();
    });
    $(".clickable5").click(function () {
        $(".contentsH").fadeToggle();
        $(".special").fadeToggle();
    });







});