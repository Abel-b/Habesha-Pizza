$(document).ready(function () {
    $(".clickable").click(function () {
        $(".contentsC").toggle();
        $(".cheese").toggle();
    });
    $(".clickable2").click(function () {
        $(".development").toggle();
        $(".img2-class").toggle();
    });
    $(".clickable3").click(function () {
        $(".product").toggle();
        $(".img3-class").toggle();
    });
    $("form.inputs").submit(function(event) {
    event.preventDefault();
    var name = $(".name").val();
    var email = $(".email").val();
    alert(name + " we have received your message. Thank you for reaching out to us." );
    });
    $(".hover-box").hover(function (event) {
        console.log(event.target.attributes.alt.value);
        $(`.${event.target.attributes.alt.value}`).toggle();
    })
});