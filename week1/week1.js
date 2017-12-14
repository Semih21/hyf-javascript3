class Movies{
    constructor(stars, writers, director, rating) {
        this._stars = stars;
        this._writers = writers;
        this._director = director;
        this._rating = rating;
    }

    getStars() {
        return this._stars;
    }
    getWriters() {
       return this._writers;
    }

    getDirector() {
        return this._director;
    }

    getRating() {
       return this._rating;
    }
    rate() {
        return this._rating++;   
    }
    
}


const the_Shawshank_Redemption = new Movies(["Tim Robbins", "Morgan Freeman", " Bob Gunton"], ["Stephen King", "Frank Darabont"], "Frank Darabont", 5);
console.log(the_Shawshank_Redemption._stars);
console.log(the_Shawshank_Redemption._director);
console.log(the_Shawshank_Redemption._writers);
console.log(the_Shawshank_Redemption._rating);
the_Shawshank_Redemption.rate();
console.log(the_Shawshank_Redemption._rating);
console.log(the_Shawshank_Redemption);




class Staff {
    constructor(name, role, age, dateOfBirth) {
        this._name = name;
        this._role = role;
        this._dateOfBirth = new Date(dateOfBirth);
    }

    get Name() {
        return this._name;
    }
    get Role() {
        return this._role;
    }
    getAge() {
        let currentYear = new Date().getFullYear();
        return `${currentYear - this._dateOfBirth}`;
        
        
    }
    get staffDetails() {``
        console.log(`Name:${this._name},Role:${this._role},Age: ${this.getAge()}`);
        
    }

}
        let darabont = new Staff("Frank Darabont", "director", 1959 );
        darabont.staffDetails;
        let robbins = new Staff("Tim Robbins", "actor", 1958);
        robbins.staffDetails;
        let bale = new Staff("Christian Bale", "actor", 1979);
        bale.staffDetails;
        let king = new Staff(" Stephen King", "writer", 1947);
        king.staffDetails;
        let freeman = new Staff("Morgan Freeman", "actor", 1937);
        freeman.staffDetails;





