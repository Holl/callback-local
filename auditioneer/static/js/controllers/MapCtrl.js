/**
 * Created by Holl on 3/13/14.
 */
function MapCtrl($scope, $http) {
            $scope.map = {
                center: {
                    latitude: 40.74,
                    longitude: -73.95
                },
                zoom: 11
            };
    $scope.$on('$viewContentLoaded', function () {
        var mapHeight = window.innerHeight - 36; // or any other calculated value
        $(".wrapper .angular-google-map-container").height(mapHeight);
    });

    window.onresize = function(event) {
        console.log('Yes')
        var mapHeight = window.innerHeight - 36; // or any other calculated value
        $(".wrapper .angular-google-map-container").height(mapHeight);
        $scope.map.center =  {
                    latitude: 40.74,
                    longitude: -73.95
                }
    };

    $http.get('/api/v1/audition/?format=json').
        success(function(points){
            console.log(points.objects);
            mark = points.objects;

            $scope.markers = mark;
            });


}

