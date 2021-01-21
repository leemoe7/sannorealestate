    /* ==============================================
    MAP -->
    =============================================== */
 /*   
    var locations=[ ['<div class="infobox"><h3 class="title"><a href="#">SANNO COMPANY</a></h3><span>Dodoma / 65</span><span>+255755490349</span></div>',
    -6.181382, 35.754861,2]];
    -6.181382, 35.754861,2]];
    var map=new google.maps.Map(document.getElementById('map'), {
        zoom: 15, scrollwheel: false, navigationControl: true, mapTypeControl: false, scaleControl: false, draggable: true, styles: [ {
            "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"featureType":"poi.business","elementType":"geometry.fill","stylers":[{"visibility":"on"}]}]
        }
        ], center: new google.maps.LatLng(-6.181382, 35.754861), mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    
    );
    var infowindow=new google.maps.InfoWindow(); 
    var marker,
    i;
    for (i=0;
        i < locations.length;
    i++) {
        marker=new google.maps.Marker( {
            position: new google.maps.LatLng(locations[i][1], locations[i][2]), map: map, icon: 'images/gps.png'
        }
        );
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        }
        )(marker, i));
    }  
*/


        function initMap(){
        var location = {lat:-6.181382,lng: 35.754861};
        var map = new google.maps.Map(document.getElementById("map"),{
        zoom:4,
        center:location});
        var marker = new google.maps.Marker({
            position:location,
            map:map});
        }