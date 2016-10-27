$(document).ready(function() {
    var oldPrice = $(".old-price");
    var newPrice = $(".new-price");
    var currency = $(".currency");
    var currencyHead = $(".currency-head");
    var subnavButtonPrice = $(".subnav-button__price");
    var href = "http://easy-buy.org/geo";
    var geo_country = 'ru';

    $.get(href, function(data) {
        var country = data.geo.country;
        geo_country = country.toLowerCase();
        switch (country) {
            case 'RU':
                oldPrice.text("1980");
                newPrice.text("990");
                currency.text("рублей");
                currencyHead.text("руб.!");
                break;

            case "KZ":
                oldPrice.text("11890");
                newPrice.text("5900");
                currency.text("тенге");
                currencyHead.text("тенге").css({'font-size' : '12px'});
                break;

            case "KG":
                oldPrice.text("2990");
                newPrice.text("1497");
                currency.text("сом");
                currencyHead.text("сом");
                break;

            case "BY":
                oldPrice.text("618 000");
                newPrice.text("309 000");
                currency.text("белор. руб.");
                subnavButtonPrice.css({'display' : 'none'});
                break;

            default:
                oldPrice.text("1980");
                newPrice.text("990");
                currency.text("рублей");
                currencyHead.text("руб.!");
        }

        var telInput = $("#phone");

        telInput.intlTelInput({
            onlyCountries: ["kz", "kg", "by", "ru"],
            utilsScript: "js/utils.js",
            autoFormat: true,
            nationalMode: false,
            initialCountry: geo_country
        });

    });

});

