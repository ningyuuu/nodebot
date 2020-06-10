// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const $ = require("jquery");
// const fs = require("fs");
const melee = require('./clean_herb.js')
const get_coord = require('./get_coord.js')

$('#start').click(() => {
    const count = $("#runs").val()
    melee(count);
})

$('#coords').click(() => {
    setTimeout(() => {
        const coords = get_coord();
        console.log(coords);
    }, 3000);
    $('#coords').html("3");
    setTimeout(() => {
        $('#coords').html("2");
    }, 1000);
    setTimeout(() => {
        $('#coords').html("1");
    }, 2000);
    setTimeout(() => {
        $('#coords').html("Get Coords");
    }, 3000);
})