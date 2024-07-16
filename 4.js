use("himalaya-4th-year");

//find employees whose income is greater than their expense
db.student.find({$expr:{$gt:["$income","$expense"]}});

//find employees whose income is greater than 850
db.student.find({income:{$gt:850}});