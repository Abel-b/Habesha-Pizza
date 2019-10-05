var totalPriceArray = [];
function Order(customSize, cheese, amount) {
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
        $("#size, #cheese, #sauce, #veggie1, #meat").val("");
    });
    $("#pizza-details-dropdown").click(function () {
        $("#pizza-details").toggle();
    });
    $("#checkout-btn").click(function () {
        alert($("#delivery-option").text());
        location.reload();
    });
    $("#add-order").click(function () {
        $("#custom-pizza").append('<div id="form-content">' +
            '<h3 id="form-header">Custom Pizza Form</h3>' +
            '<div class="row container">' +
                '<div class="col-md-6">' +
                    '<p>Size</p>' +
                '</div>' +
                '<div class="col-md-6" class="form-option">' +
                    '<select required class="form-control" id="size">' +
                        '<option></option>' +
                        '<option value="Small 10 in.">Small, 12"</option>' +
                        '<option value="Medium 14 in.">Medium, 16"</option>' +
                        '<option value="Large 18 in.">Large, 20"</option>' +
                    '</select>' +
                '</div>' +
            '</div>' +
            '<div class="row container">' +
                '<div class="col-md-6">' +
                    '<p>Crust</p>' +
                '</div>' +
                '<div class="col-md-6" class="form-option">' +
                    '<select required class="form-control" id="sauce">' +
                        '<option></option>' +
                        '<option value="tomato sauce">Crispy</option>' +
                        '<option value="alfredo sauce">Gluten free</option>' +
                        '<option value="alfredo sauce">Stuffed</option>' +
                    '</select>' +
                '</div>' +
            '</div>' +
            '<div class="row container">' +
                '<div class="col-md-6">' +
                    '<p>Toppings</p>' +
                '</div>' +
                '<div class="col-md-6" class="form-option">' +
                    '<select required class="form-control" id="cheese">' +
                        '<option></option>' +
                        '<option value="cheese">Cheese</option>' +
                        '<option value="pepperoni">Pepperoni</option>' +
                        '<option value="margherita">Margherita</option>' +
                        '<option value="veggie">Veggie</option>' +
                        '<option value="extreme">Extreme</option>' +
                        '<option value="special habesha">Special Habesha</option>' +
                    '</select>' +
                '</div>' +
            '</div>' +
            '<div class="row container">' +
                '<div class="col-md-6">' +
                    '<p>Veggie 1</p>' +
                '</div>' +
                '<div class="col-md-6" class="form-option">' +
                    '<select required class="form-control" id="veggie1">' +
                        '<option></option>' +
                        '<option value="onions">Onions</option>' +
                        '<option value="green peppers">Green Peppers</option>' +
                        '<option value="olives">Black Olives</option>' +
                        '<option value="spinach">Spinach</option>' +
                        '<option value="mushrooms">Mushrooms</option>' +
                    '</select>' +
                '</div>' +
            '</div>' +
            '<div class="row container">' +
                '<div class="col-md-6">' +
                    '<p>Meat</p>' +
                '</div>' +
                '<div class="col-md-6" class="form-option">' +
                    '<select required class="form-control" id="meat">' +
                        '<option></option>' +
                        '<option value="chicken">Chicken</option>' +
                        '<option value="pepperoni">Pepperoni</option>' +
                        '<option value="bacon">Canadian Bacon</option>' +
                        '<option value="sausage">Sausage</option>' +
                        '<option value="sausage">None</option>' +
                    '</select>' +
                '</div>' +
            '</div>' +
        '</div>');
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