const RPGCreator = require("./rpgcreator");
const rpg = new RPGCreator("1212", "XevGame", 2);
const $ = require("jquery");

// Json Host


// $_GET Function PHP Imitated
function $_GET(param) {
    var vars = {};
    window.location.href.replace(location.hash, '').replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function (m, key, value) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if (param) {
        return vars[param] ? vars[param] : null;
    }
    return vars;
}
const genID = function () {
    let code = "";
    let dict = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0; i < 8; i++) {
        code = code + dict.charAt(Math.floor(Math.random() * dict.length));
    }
    return code;
};

let player;
let map;

$("#send").on("click", (ev) => {
    let username = $("#name").val();
    // Create Player And Map
    player = new rpg.Player(genID(), username, 50, 1);
    map = new rpg.Map(genID(), "Map1.0.0", 100, 100);
    // set Slots's Player
    player.setSlot();
    // Add CSS and Textes
    $("#map").html(`<p>Hello ${player.name} ! Your ID is : ${player.id}</p>`);
    $("#name").css("display", "none");
    $("#send").css("display", "none");

})

// Background and Text (CSS)
$("body").css("background-color", "#a04632")
$(document).css("color", "#f1f1f1")
