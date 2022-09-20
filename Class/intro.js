var Movie = /** @class */ (function () {
    function Movie(movieTitle, rating, language, year) {
        this.movieTitle = movieTitle;
        this.rating = rating;
        this.year = year;
        this.language = language;
    }
    Movie.prototype.getRating = function () {
        return this.rating;
    };
    Movie.prototype.getMovieTitle = function () {
        return this.movieTitle;
    };
    Movie.prototype.getLanguage = function () {
        return this.language;
    };
    Movie.prototype.getYear = function () {
        return this.year;
    };
    return Movie;
}());
var movie = new Movie("Avengers", 9, ["English", "Hindi"], 2020);
console.log("Title: ".concat(movie.getMovieTitle()));
console.log("Rating: ".concat(movie.getRating()));
console.log("Languages: ".concat(movie.getLanguage()));
console.log("Year: ".concat(movie.getYear()));
