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





    $("form.inputs").submit(function (event) {
        event.preventDefault();
        var name = $(".name").val();
        var email = $(".email").val();
        alert(name + " we have received your message. Thank you for reaching out to us.");
    });
    $(".hover-box").hover(function (event) {
        console.log(event.target.attributes.alt.value);
        $(`.${event.target.attributes.alt.value}`).toggle();
    })
});