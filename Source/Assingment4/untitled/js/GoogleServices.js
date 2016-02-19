/**
 * Created by Shweta on 2/15/2016.
 */

///<reference path = "js/angular.css" />


function initMap() {

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: 41.85, lng: -87.65}
    });
    directionsDisplay.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsDisplay);

}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {

    directionsService.route({
        origin: document.getElementById('start1').value,
        destination: document.getElementById('end1').value,
        travelMode: google.maps.TravelMode.DRIVING
    }, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });

}

angular.module('weather', [])
    .controller('weatherctrl', function($scope, $http) {
        $scope.getWeather = function() {
            //var a1='Chicago';
            //var b1='IL';
            var a1=document.getElementById('start1').value;
            var b1=document.getElementById('start2').value;
            $http.get('https://api.wunderground.com/api/36b799dc821d5836/conditions/q/'+b1+'/'+a1+'.json')

                .success(function(data)
                {
                console.log(data);
                temp = data.current_observation.temp_f;
                icon = data.current_observation.icon_url;
                weather = data.current_observation.weather;
                console.log(temp);
                $scope.currentweather = {
                    html: "Starting Point Weather : Currently " + temp + " &deg; F and " + weather + ""
                }
                $scope.currentIcon = {
                    html: "<img src='" + icon + "'/>"
                }

            })
            var a2=document.getElementById('end1').value;
            var b2=document.getElementById('end2').value;
            $http.get('https://api.wunderground.com/api/36b799dc821d5836/conditions/q/'+b2+'/'+a2+'.json')

                .success(function(data)
                {
                    console.log(data);
                    temp1 = data.current_observation.temp_f;
                    icon1 = data.current_observation.icon_url;
                    weather1 = data.current_observation.weather;
                    console.log(temp1);
                    $scope.currentweather1 = {
                        html: "Destination Weather : Currently " + temp1 + " &deg; F and " + weather1 + ""
                    }
                    $scope.currentIcon1 = {
                        html: "<img src='" + icon1 + "'/>"
                    }

                })

        }
    });
