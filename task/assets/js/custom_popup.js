(function($) {
    $.fn.popUp = function() {
        this.on("click", function() {
            var me = $(this),
                animation = me.data("animation"),
                str = me.attr("href"),
                dotIndex = str.lastIndexOf("."),
                ext = str.substring(dotIndex);

            if (
                ext == ".jpg" ||
                ext == ".png" ||
                ext == ".svg" ||
                ext == ".gif"
            ) {
                var popupImg =
                    '<div class="popup-main"><div id="popup"><img src="' +
                    str +
                    '" /></div></div>';
                $("body").append(popupImg);
                var popupData = $(".popup-main #popup");
            } else {
                var popUp = $(me.attr("href")),
                    popupData = popUp
                        .clone()
                        .removeClass("custom_popup")
                        .appendTo("body");
                popupData.wrap('<div class="popup-main"></div>');
            }

            var poupBox = $(".popup-main #popup"),
                popupHeight = poupBox.outerHeight();
            popupData.addClass("animated " + animation);
            poupBox.css("margin-top", popupHeight / 2 * -1);

            $(".popup-main")
                .on("click", function(e) {
                    closePopup();
                })
                .find(poupBox)
                .on("click", function(e) {
                    e.stopPropagation();
                });
            return false;
        });
    };
})(jQuery);

function closePopup() {
    $(".popup-main").remove();
}