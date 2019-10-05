var totalPriceArray = [];
function Order(customSize, cheese) {
    this.customSize = customSize;
    this.sauce = 1;
    this.cheese = cheese;
    this.veggie1 = 1;
    this.meat = 2;
    this.pizzaPrice = 0;
}
Order.prototype.pizzaCost = function () {
    if (this.customSize === "Small 12 in.") {
        this.pizzaPrice += 600;
    } else if (this.customSize === "Medium 16 in.") {
        this.pizzaPrice += 900;
    } else if (this.customSize === "Large 20 in.") {
        this.pizzaPrice += 1200;
    }
    if (this.cheese === "cheese") {
        this.pizzaPrice += 200;
    } else if (this.cheese === "pepperoni") {
        this.pizzaPrice += 350;
    } else if (this.cheese === "margherita") {
        this.pizzaPrice += 320;
    } else if (this.cheese === "veggie") {
        this.pizzaPrice += 150;
    } else if (this.cheese === "extreme") {
        this.pizzaPrice += 450;
    } else if (this.cheese === "special habesha") {
        this.pizzaPrice += 150;
    }
    this.pizzaPrice += this.sauce;
    this.pizzaPrice += this.veggie1;
    this.pizzaPrice += this.meat;
    return this.pizzaPrice;
}
Order.prototype.finalCost = function () {
    var cartTotalPrice = 0;
    for (var arrayElement = 0; arrayElement < totalPriceArray.length; arrayElement++) {
        cartTotalPrice += totalPriceArray[arrayElement];
    }
    return cartTotalPrice;
}
function Address(streetAddress, city, state) {
    this.streetAddress = streetAddress;
    this.city = city;
    this.state = state;
    this.deliveryAddress = (streetAddress + "  " + city + ", " + state);
}


$(document).ready(function () {
    $("#pickup-btn").click(function () {
        $("#order-content").show();
        $("#landing-content").hide();
        $("#delivery-option").text("PICKUP BY CUSTOMER");
    });
    $("#delivery-btn").click(function () {
        $("#address").show();
        $("#pickup-btn,#delivery-btn,#landing-tagline").hide();
    });
    $("form#address-form").submit(function (event) {
        event.preventDefault();
        var streetAddress = $("input#street-add").val();
        var city = $("input#city-add").val();
        var state = $("select#state-select").val();
        var zipcode = $("input#zip-add").val();
        var newAddress = new Address(streetAddress, city, state, zipcode)
        $("#order-content").show();
        $("#landing-content").hide();
        $("#delivery-option").text("DELIVER TO: " + newAddress.deliveryAddress);
    });
    $("form#custom-pizza").submit(function (event) {
        event.preventDefault();
        var customSize = $("select#size").val();
        var sauce = $("select#sauce").val();
        var cheese = $("select#cheese").val();
        var veggie1 = $("select#veggie1").val();
        var meat = $("select#meat").val();
        var pizzaDetails = (customSize + " - " + sauce + ", " + cheese + ", " + veggie1 + ", " + meat);
        var newPizzaOrder = new Order(customSize, cheese);
        newPizzaOrder.pizzaCost();
        totalPriceArray.push(newPizzaOrder.pizzaPrice);
        $("#pizza-details-dropdown").show();
        $("#final-cost").text(newPizzaOrder.finalCost());
        $("#pizza-details").append("<ul><li>" + pizzaDetails + "</li></ul>");
        $("#size, #sauce, #sauce, #veggie1, #meat").val("");
    });
    $("#pizza-details-dropdown").click(function () {
        $("#pizza-details").toggle();
    });
    $("#checkout-btn").click(function () {
        alert("newAddress.deliveryAddress");
        location.reload();
    });

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