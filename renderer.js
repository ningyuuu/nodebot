// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const $ = require("jquery");
// const fs = require("fs");
const melee = require('./portable_well.js')
const smelt = require('./smelt.js')
const shaft = require('./osrs/feather_shaft.js')
const cut_shaft = require('./osrs/cut_shaft')
const cut_longbow = require('./osrs/cut_longbow')
const grab_wine = require('./osrs/grab_wine')
const iron = require('./osrs/mine_drop_iron')
const get_coord = require('./get_coord.js');
const string_bow = require("./osrs/string_bow.js");

$('#start').click(() => {
    const count = $("#runs").val()
    melee(count);
})

$('#smelt').click(() => {
    const count = $("#smeltruns").val()
    smelt(count);
})

$('#shaft').click(() => {
    const count = $('#shaftruns').val();
    shaft(count);
})

$('#cutshaft').click(() => {
    const count = $('#cutshaftruns').val();
    cut_shaft(count);
})

$('#cutlongbow').click(() => {
    const count = $('#cutlongbowruns').val();
    cut_longbow(count);
})

$('#stringbow').click(() => {
    const count = $('#stringbowruns').val();
    string_bow(count);
})


$('#grabwine').click(() => {
    const count = $('#grabwineruns').val();
    grab_wine(count);
})

$('#iron').click(() => {
    const count = $('#ironruns').val();
    iron(count);
})
$('#coords').click(() => {
    console.log('test');
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
