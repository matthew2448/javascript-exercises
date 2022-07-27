const findTheOldest = function(people) {
    let oldestPerson = people[0]; let opAge = 0;
    const curentYear = 2022;

    people.forEach(element => {
        let age = 0;
        if(oldestPerson.yearOfDeath === undefined){
            //console.log("No Death");
            age = curentYear - element.yearOfBirth;
        }else{
            age = element.yearOfDeath - element.yearOfBirth;
        }
        if (age > opAge){
            oldestPerson = element; opAge = age;
        }
    });

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
