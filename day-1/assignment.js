// let hospitalDetails = {
//     name: "Himalaya Hospital",
//     location: "ktm",
//     patientCapacity: 1000,
//     numberOfBed: 1000,
//     numberOfBlock: 5,
//     numberOfDoctor: 100,
//     numberOfNurse: 50,
//   };
  // delete hospitalDetails.numberOfBed;
  // delete hospitalDetails.numberOfNurse;
  
  // hospitalDetails.numberOfBlock = 10;
  
  // hospitalDetails.numberOfAmbulance = 10;
  
  let newHospitalDetails = hospitalDetails;
  console.log(hospitalDetails);

  let hospitalDetails={
    name:"lumbini anchal Hospital",
    location:"Butwal",
    patientCapacity:50,
    numberOfBed:55,
    numberOfBlock:5,
    numberOfDoctor:20,
    numberOfNurse:40,
}
console.log(hospitalDetails);

delete hospitalDetails.numberOfBlock  ;
console.log(hospitalDetails);

hospitalDetails.numberOfBlock=65;
console.log(hospitalDetails);


hospitalDetails.numberOfAmbulance=40;
console.log(hospitalDetails);


let newHospitalDetails={...hospitalDetails};

console.log(`There is a hospital named ${hospitalDetails.name}'located at ${hospitalDetails.location} with ${hospitalDetails.numberOfDoctor} doctors.` )