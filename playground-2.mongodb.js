use("himalaya-4th-year");

// //$or,$and,$not,$nor
// //find movies whose genres is "Comedy"
// //or rating is greater than 8

// db.movies.find({$or:[{genres:"Comedy"},{"rating.average":{$gt:8}}]});

// //find movies whose genres is "Comedy"
// //and rating is greater than 8
// db.movies.find({$and:[{genres:"Comedy"},{"rating.average":{$gt:8}}]});

// //find movies whose rating is greater than 7 and less than 8
// db.movies.find({$and:[{"rating.average":{$gt:7},"rating.average":{$lt:8}}]});

// //find movies whose network country is  not "United States"
// db.movies.find({"network.country.name":{$ne:"United States"}},{name:1,network:1});

//find movies whose genre is neither action nor thriller

db.movies.find({$nor:[{genres:"Action"},{genres:"Thriller"}]})