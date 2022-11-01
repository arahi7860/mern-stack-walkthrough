import db from "../db/connection.js";
import Student from "../models/Student.js";

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  // create students
  const student1 = new Student({
    name: "Raul",
    school: "General Assembly",
    age: 36,
    image:
      "https://sportshub.cbsistatic.com/i/2021/08/09/bc1a467e-8fc2-4ccd-b97c-72da7af980df/my-hero-academia-all-might-cosplay-1275931.jpg",
  });
  await student1.save();

  const student2 = new Student({
    name: "Chris",
    school: "General Assembly",
    age: 24,
    image:
      "https://static.onecms.io/wp-content/uploads/sites/6/2011/08/benjamin-sisko_320.jpg",
  });
  await student2.save();

  const student3 = new Student({
    name: "Greg",
    school: "General Assembly",
    age: 18,
    image:
      "https://www.gannett-cdn.com/presto/2022/01/26/NTEG/712586aa-71b8-4320-96a2-82d116a91397-AP22025838559973.jpg",
  });
  await student3.save();

  const student4 = new Student({
    name: "Iffat",
    school: "General Assembly",
    age: 21,
    image: "https://ssb.wiki.gallery/images/b/b5/Ifrit.png",
  });
  await student4.save();

  console.log("Created students!");

  // close database connection
  db.close();
};

insertData();
