/* class Movie{
    movieTitle:string;
    rating:number;
    language:string[];
    year:number; //?-optional

    getRating():number{
        return this.rating;
    }
    getMovieTitle():string{
        return this.movieTitle;
    }
    getLanguage():string[]{
        return this.language;
    }
    getYear():number{
        return this.year;
    }
    constructor(movieTitle:string,rating:number,language:string[],year:number){
        this.movieTitle=movieTitle;
        this.rating=rating;
        this.year=year;
        this.language=language;
    }
}

let movie=new Movie("Avengers",9,["English","Hindi"],2020);
console.log(`Title: ${movie.getMovieTitle()}`);
console.log(`Rating: ${movie.getRating()}`);
console.log(`Languages: ${movie.getLanguage()}`);
console.log(`Year: ${movie.getYear()}`); */

class Movie{
    constructor(
        public movieTitle:string,
        public rating:number,
        public languages:string[],
        public year?:number
    ){}
}