$(document).ready(function () {
    $(".clickable").click(function () {
        $(".contentsC").toggle();
        $(".cheese").toggle();
    });
    $(".clickable1").click(function () {
        $(".contentsP").toggle();
        $(".pep").toggle();
    });
    $(".clickable2").click(function () {
        $(".contentsM").toggle();
        $(".mar").toggle();
    });
    $(".clickable3").click(function () {
        $(".contentsV").toggle();
        $(".vege").toggle();
    });
    $(".clickable4").click(function () {
        $(".contentsE").toggle();
        $(".exe").toggle();
    });
    $(".clickable5").click(function () {
        $(".contentsH").toggle();
        $(".special").toggle();
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