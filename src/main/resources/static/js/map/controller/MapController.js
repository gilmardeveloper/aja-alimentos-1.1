/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var position;
var view;
var options;
var map;
var polyline;


var companies = [
    { 
        name: 'Alimentos Aja', 
        position: { lat: -23.630512, lng: -46.5363925 },
        address: 'Av dos Estados, 2195, box 50/51/52',
        neighborhood: 'Santo André',
        city: 'São Paulo/SP'
    },
    { 
        name: 'Outro Lugar', 
        position: { lat: -23.584885, lng: -46.5463616 },
        address: 'Av dos Estados, 2195, box 50/51/52',
        neighborhood: 'Vila Ema',
        city: 'São Paulo/SP' 
    },
    ];


function init() {
    view = document.getElementById('map');
    polyline = new google.maps.Polyline({
        strokeColor: '#1B5E20',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    options = {
        zoom: 12,
        center: { lat: -23.6742228, lng: -46.5436003}, 
        fullscreenControl: true
    };


    map = new google.maps.Map(view, options);
    directionsServiceInit(map, polyline);
    initMarker();
    initMarkersCompany();
}

function initMarkersCompany() {
    // for (var i = 0; i < autoescolas.length; i++) {
    //    addAutoMarker(autoescolas[i].nome, autoescolas[i].endereco);
    //}
    companies.forEach(item => newCompanyMarker(map, item));
    // newAutoMarker(map,auto[0].position, auto[0].nome);
}


function addPersonMarker(position) {
    parsePerson(map, position);
}

function addCompanyMarker(title, position) {
    parseCompany(map, position, title);
}

function showMarkers() {
    if (isMarker()) {
        setAllMarkers(map);
    } else {
        alert("erro");
    }
}

function hideMarkers() {
    if (isMarker()) {
        clearAllMarkers();
    } else {
        alert("erro");
    }
}

function showRoute() {
    if (isRoute()) {
        calcRoute(getServiceDirections(), getDisplayDirections());
        if (getDisplayDirections().getMap() == null) {
            getDisplayDirections().setMap(map);
        }
        clearAllMarkers();
    } else {
        alert("error");
    }
}

function hideRoute() {
    if (isRoute()) {
        hiddenRoute();
    } else {
        //alert("erro");
    }
}





