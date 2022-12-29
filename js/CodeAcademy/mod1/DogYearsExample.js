var initialyear = 10.5;
var normalyear = 4;
var agehuman = 20;
var agedog = (agehuman - 2) * 4 + 10.5 * 2
console.log(agedog);


myAge = 20;
earlyYears = 2;

earlyYears = earlyYears * 10.5;
myAge -= 2;
laterYears = myAge //recebe o msm valor de myAge pq myAge vai ser alterada dps.
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
myAgeInDogYears = earlyYears + laterYears;
var myName = "Victor".toLowerCase();
console.log(`my name is ${myName} and I have ${myAge} years old in human years, so I have ${myAgeInDogYears} in dog years.`);

console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);