var a_idx = 0;
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = new Array("水獭", "獭獭", "冰冰", "水水", "歪歪", "超绝可爱", "卡哇伊", "suisui", "YBY", "suki");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-family": "Georgia, serif",
            "font-weight": "normal",
            "color": "gold",
            "font-style": "italic",
            "font-size": "1.5em",
            "letter-spacing": 0,
            "text-shadow": "0px 1px 0px #999, 0px 2px 0px #888, 0px 1px 0px #777, 0px 1px 0px #666, 0px 1px 0px #555, 0px 1px 0px #444, 0px 1px 0px #333, 0px 1px 1px #001135"

        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
            3000,
            function () {
                $i.remove();
            });
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}
