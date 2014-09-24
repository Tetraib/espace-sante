$(document).on("pageinit", function() {
    $(".switchrecolor .ui-slider-label-a").removeClass("ui-btn-active").addClass("ui-btn-down-a")

    var scoreresult = {
        "m": [
            [10, 0],
            [10, 6],
            [11, 0],
            [11, 3],
            [11, 7],
            [11, 10],
            [12, 2],
            [12, 5],
            [12, 7],
            [12, 10],
            [13, 0],
            [13, 3],
            [13, 5],
            [13, 8],
            [13, 10],
            [14, 0],
            [14, 3],
            [14, 6],
            [14, 10],
            [15, "+"]
        ],
        "f": [
            [8, 10],
            [9, 2],
            [9, 4],
            [9, 7],
            [9, 10],
            [10, 0],
            [10, 2],
            [10, 5],
            [10, 6],
            [10, 7],
            [10, 9],
            [10, 10],
            [10, 11],
            [11, 0],
            [11, 2],
            [11, 3],
            [11, 5],
            [11, 7],
            [12, 0],
            [12, "+"]
        ]
    };
    $("input").on("change", function() {
        var score = 0;
        var sex = $("input[name=rc-sex]:checked").val();
        if (sex == "m") {
            $("#headertitle").html("Age osseux Garçon :");
        }
        else {
            $("#headertitle").html("Age osseux Fille :");
        }
        $("input[name*=radio-choice-]:checked").each(function() {
            score += $(this).val() * 1;
        });
        if (score >= 8) {
            var scoreadjust = score - 8;

            var year = scoreresult[sex][scoreadjust][0];
            var month = scoreresult[sex][scoreadjust][1];
            if (score == 27) {
                $("#result").html(year + " ans et plus");
            }
            else {

                $("#result").html(year + " ans et " + month + " mois");
            }
        }
        else {
            $("#result").html("Non applicable");

        }
    });
});
