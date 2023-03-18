salkynObj = {
name: "Salkyn",
age :27,
yearBirth:1995,
job:"front-end developer",
familyMembers: ['Tolkun', 'Mama' , 'Papa']
}
const userPrint = prompt('What do you want to know about Salkyn? Choose between age,yearBirth,job');
console.log(salkynObj[userPrint]);

// Salkyn has 3 family members
 console.log (' ${salkynObj.name} has  ${salkynObj.familyMembers.length} family members and the first member is ${salkynObj.familyMembers[0]}');