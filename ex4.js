var app = angular.module("MyApp", []);
        app.controller("MyController", function ($scope) {
            $scope.layout = 'list';
            $scope.Data = [
                { Name: "Spiderman No way Home", Path: "Images/No way home.jpg", Trailer:"1trailer.html",Cast:"1cast.html",Review:"1review.html"},
                { Name: "Doctor Strange Multiverse of Madness", Path: "Images/doctorstrange.jpeg",Trailer:"2trailer.html",Cast:"2cast.html",Review:"2review.html" },
                { Name: "Thor Love and Thunder", Path: "Images/thorloveandthunder.jpg",Trailer:"3trailer.html",Cast:"3cast.html",Review:"3review.html" },
                { Name: "Marvel Avengers - Infinty War", Path: "Images/infinitywar.jpg",Trailer:"4trailer.html",Cast:"4cast.html",Review:"4review.html"},
                { Name: "Marvel Avengers - End Game", Path: "Images/endgame.jpg",Trailer:"5trailer.html",Cast:"5cast.html",Review:"5review.html" },
                { Name: "Black Panther", Path: "Images/blackpanther.jpg",Trailer:"6trailer.html",Cast:"6cast.html",Review:"6review.html" },
                { Name: "Captain America Civil War", Path: "Images/civilwar.jpg",Trailer:"7trailer.html",Cast:"7cast.html",Review:"7review.html"},
                { Name: "Black Widow", Path: "Images/blackwidow.jpg",Trailer:"8trailer.html",Cast:"8cast.html",Review:"8review.html" },
                { Name: "Hulk", Path: "Images/hulk.jpg",Trailer:"9trailer.html",Cast:"9cast.html",Review:"9review.html"}];
        });