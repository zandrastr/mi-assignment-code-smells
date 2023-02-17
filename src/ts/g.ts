/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

function getSumOfJumpLengths(jumpLengths: number[]): number {

  return jumpLengths.reduce((jumpLengthSoFar, currentJumpLength) => 
  jumpLengthSoFar + currentJumpLength);

};

console.log(getSumOfJumpLengths([5,3,2]));

/*
  2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
  */

class Student {
  constructor(
    public name: string,
    public handedInOnTime: boolean,
    public passed: boolean
  ) {}
}

function getStudentStatus(student: Student): string {

  if (student.name == "Sebastian") {
    student.passed = student.handedInOnTime ? true : false;
  };

  return student.passed ? "VG" : "IG";

};

console.log(getStudentStatus({name: "Sebastian", handedInOnTime: true, passed: false}));

/*
  3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
  Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
  */

  class dailyTemperatures {
    constructor(public city: string, public date: Date, public celsius: number) {}
  }

  const listOfWeatherData = [
    {
      city: "Stockholm",
      date: new Date (2023,2,11),
      celsius: 8
    },
    {
      city: "Stockholm",
      date: new Date (2023,2,12),
      celsius: 10
    },
    {
      city: "Stockholm",
      date: new Date (2023,2,13),
      celsius: 11
    },
    {
      city: "Stockholm",
      date: new Date (2023,2,14),
      celsius: 22
    },
    {
      city: "Stockholm",
      date: new Date (2023,2,15),
      celsius: 5
    },
    {
      city: "Stockholm",
      date: new Date (2023,2,16),
      celsius: 12
    },
    {
      city: "Stockholm",
      date: new Date (2023,2,17),
      celsius: 14
    }
  ];
  
  let ONE_WEEK_MILLISECONDS = 604800000;
  let ONE_WEEK_AGO = Date.now() - ONE_WEEK_MILLISECONDS;
  
  function getAverageTemperature(weatherData: dailyTemperatures[]) {
    
    let numberOfDays = weatherData.length;
  
    let sumOfTemperatures = 0;
  
    for (let i = 0; i < weatherData.length; i++) {

      if (weatherData[i].city === "Stockholm") {

        if (weatherData[i].date.getTime() > ONE_WEEK_AGO) {

          sumOfTemperatures += weatherData[i].celsius;

        }
      }
    }
  
    return sumOfTemperatures / numberOfDays; 
  };

  console.log(getAverageTemperature(listOfWeatherData));

/*
  4. Följande funktion kommer att presentera ett objekt i dom:en. 
  Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
  */

class Product {
  constructor(
    public name: string,
    public price: number,
    public description: string,
    public imageUrl: string,
  ) {}
};

const newProduct = new Product ("Product Name", 129, "Description", "image.url");

function showProduct(product: Product) {

  let productContainer = document.createElement("div");
  let name = document.createElement("h4");
  let price = document.createElement("p");
  let description = document.createElement("p");
  let image = document.createElement("img");

  productContainer.append(name);
  productContainer.append(price);
  productContainer.append(description);
  productContainer.append(image);
  document.body.append(productContainer);

  name.innerHTML = product.name;
  price.innerHTML = product.price.toString();
  description.innerHTML = product.description;
  image.src = product.imageUrl;
};

console.log(showProduct(newProduct));

/*
  5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
  går att göra betydligt bättre. Gör om så många som du kan hitta!
  */

const listOfStudents = [
  {
    name: "Student A",
    handedInOnTime: true,
    passed: true
  },
  {
    name: "Student B",
    handedInOnTime: false,
    passed: false
  }
];

function presentStudents(students: Student[]) {

  students.forEach(student => {

    let container = document.createElement("div");
    let studentName = document.createElement("p");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    studentName.innerHTML = student.name;
    container.append(checkbox);
    container.append(studentName);

    if (student.handedInOnTime) {
      checkbox.checked = true;
      let listOfStudents = document.querySelector("ul#passedstudents");
      listOfStudents?.append(container);
    } else {
      checkbox.checked = false;
      let listOfStudents = document.querySelector("ul#failedstudents");
      listOfStudents?.append(container);
    }
  });
};

console.log(presentStudents(listOfStudents));

/*
  6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
  Lorem, ipsum, dolor, sit, amet
  Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
  */
function concatenateStrings() {
  let result = "";
  result += "Lorem";
  result += "ipsum";
  result += "dolor";
  result += "sit";
  result += "amet";

  return result;
}

/* 
7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
    Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
    fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
    lösning som är hållbar och skalar bättre. 
*/
function createUser(
  name: string,
  birthday: Date,
  email: string,
  password: string
) {
  // Validation

  let ageDiff = Date.now() - birthday.getTime();
  let ageDate = new Date(ageDiff);
  let userAge = Math.abs(ageDate.getUTCFullYear() - 1970);

  console.log(userAge);

  if (!(userAge < 20)) {
    // Logik för att skapa en användare
  } else {
    return "Du är under 20 år";
  }
}
