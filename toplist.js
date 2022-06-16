
var myApp = angular
            .module('myApp',[])
            .controller("myController", function ($scope) {
                $scope.films = [
                    {filmname:"Spiderman - No way Home",yearofrelease:2021,Ratings:"★★★★½"},
                    {filmname:"Doctor Strange - Multiverse of Madness",yearofrelease:2022,Ratings:"★★★"},
                    {filmname:"Marvel Avengers Infinity War",yearofrelease:2017,Ratings:"★★★★"},
                    {filmname:"Marvel Avengers End Game",yearofrelease:2019,Ratings:"★★★★½"}
                ];
            });
