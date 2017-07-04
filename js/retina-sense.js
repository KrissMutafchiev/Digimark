/**
 * Created by krisd3v on 4.7.2017 г..
 */
var $images = $("img[data-1x]");

if (window.devicePixelRatio == 2) {
    $.each($images, function() {
        var $this = $(this);

        $this.attr("src", $this.data("2x"));
    });
} else {
    $.each($images, function() {
        var $this = $(this);

        $this.attr("src", $this.data("1x"));
    });
}