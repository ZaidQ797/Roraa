
import axios from 'axios';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import config from '../_config';


var polyline = require('@mapbox/polyline');

const GeoService = {
    manualDistance: function (lat1, lon1, lat2, lon2) {
        var p = 0.017453292519943295;    // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p) / 2 +
            c(lat1 * p) * c(lat2 * p) *
            (1 - c((lon2 - lon1) * p)) / 2;
        var d = 12742 * Math.asin(Math.sqrt(a));
        let ud = d + (d / 2);
        return parseFloat(parseFloat(ud + "").toFixed(2));
    },
    getCurrentLocationExpo: function () {
        return new Promise((resolve, reject) => {
            Permissions.askAsync(Permissions.LOCATION).then(p => {
                if (p.status == 'granted') {
                    var options = {
                        enableHighAccuracy: true,
                        timeout: 10000,
                        maximumAge: 1000
                    };
                    Location.getCurrentPositionAsync(options).then(pos => {
                        var crd = pos.coords;
                        this.getReverseGeocode(crd.latitude, crd.longitude).then(address => {
                            crd["address"] = address;
                            resolve(crd);
                        })
                    }).catch(err => {
                        resolve(this.getCurrentLocationExpo());
                    })
                } else {
                    reject({
                        message: "Permission not grated"
                    });
                }
            })

        })

    },
    getCurrentLocation: function () {
        return new Promise((resolve, reject) => {
            var options = {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 1000
            };

            navigator.geolocation.getCurrentPosition((pos) => {
                var crd = pos.coords;
                this.getReverseGeocode(crd.latitude, crd.longitude).then(address => {
                    crd["address"] = address;
                    resolve(crd);
                })


            }, (error) => {
                // console.warn(`ERROR(${error.code}): ${error.message}`);
                resolve(this.getCurrentLocation());
            }, options);
        })

    },
    getReverseGeocode: function (latitude, longitude) {
        return new Promise((resolve, reject) => {
            axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&key=' + config.googleMapsAPIKey) // be sure your api key is correct and has access to the geocode api
                .then(response => {
                    // console.log(response);
                    resolve(response.data.results[0].formatted_address)
                }).catch((error) => { // catch is called after then
                    reject(error);
                });
        })
    },
    centerCoordinates: (arr, distance) => {        
        var x = arr.map(x => x.latitude);
        var y = arr.map(x => x.longitude);
        var cx = (Math.min(...x) + Math.max(...x)) / 2;
        var cy = (Math.min(...y) + Math.max(...y)) / 2;
        return {
            latitude: cx, longitude: cy,
            latitudeDelta: distance/90,
            longitudeDelta: distance/90
        };
    },
    getDirections: (startLoc, destinationLoc) => {
        return new Promise((resolve, reject) => {
            axios.get('https://maps.googleapis.com/maps/api/directions/json?origin=' + startLoc.latitude + ',' + startLoc.longitude + '&destination=' + destinationLoc.latitude + ',' + destinationLoc.longitude + '&key=' + config.googleMapsAPIKey)
                .then(respJson => respJson.data)
                .then(respJson => {                    
                    if (respJson.routes) {
                        let points = polyline.decode(respJson.routes[0].overview_polyline.points);
                        let coords = points.map((point, index) => {
                            return {
                                latitude: point[0],
                                longitude: point[1]
                            }
                        })
                        resolve(coords)
                    } else {
                        reject("Unable to get direction points");
                    }
                }).catch(error => {
                    console.log(error);
                    reject(error)
                })

        });
    },
    distanceMatrix: (origin, destination) => {
        return new Promise((resolve, reject) => {
            let d = {
                "destinations": {
                    "lat": destination.latitude,
                    "lng": destination.longitude
                },
                "origins": {
                    "lat": origin.latitude,
                    "lng": origin.longitude
                }
            }
            fetch(config.serverURL + '/api/distanceMatrix', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(d),
            }).then((response) => response.json())
                .then((responseJson) => {
                    resolve(responseJson);
                })
                .catch((error) => {
                    reject(err);
                });

        })
    }
};

export default GeoService;
