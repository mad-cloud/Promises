//Q1.
let person1=(callbkfr)=>{
  console.log("I am busy, I will call you back.");
  callbkfr();
}
let person2=()=>{
  console.log("Hey whats up ?");
}
person1(person2);

//Q2.
function printNumbers(n){
   for(let i=1;i<=n;i++){
    setTimeout(()=>{
           console.log(i);
         },1000*i)
   }
 }
printNumbers(7);

//Q3.
let prom = new Promise((resolve, reject) => {
     resolve();
   })
   prom.then(()=>{
     for(let i=1;i<=7;i++){
       setTimeout(()=>{
         console.log(i);
       },1000*i)
     }
   })

//Q4.
const fun1=(arg)=>{
  return new Promise((resolve,reject)=>{
      arg==="yes" ? resolve() : reject();
  }
  )
}

fun1("yes").then(()=>{
  console.log("promise is resolved");
}).catch(()=>{
  console.log("promise is rejected");
})

//Q5.
let interQue=(name)=>{
  if(name=="Dev"){
    return function(topic){
      console.log(`Hii ${name}!! What is ${topic}?`);
    }
  }
  if (name=="Sonar"){
    return function(topic){
      console.log(`Hii ${name}!! What is ${topic}?`);
    }
  }
  else{
    return function(){
      console.log("You are on hold");
    }
  }
}
let res3=interQue("Sonar");
res3("Web Development");

//Q6.
let getEmpID=()=>{
  setTimeout(()=>{
    console.log("Fetching the Id's");
    let id= [1,2,3,4,5];
    console.log(id);

    setTimeout((id)=>{
        let empDetails={
        name: "Ravi",
        age:34
        }
        console.log(`ID of the employee is ${id} and The name of the employee is ${empDetails.name} and age is ${empDetails.age}`);
      
        setTimeout(()=>{
            empDetails.gender="Male";
            console.log(`The name of the employee is ${empDetails.name} and the age is ${empDetails.age} and the gender is ${empDetails.gender}`);

            setTimeout(()=>{
              empDetails.salary=45000;
              console.log(`The name of the employee is ${empDetails.name} and the age is ${empDetails.age} and the gender is ${empDetails.gender} and the salary is ${empDetails.salary}`);    
        },2000);
    },2000);
  },2000,id[1]);
},2000);
}
getEmpID();

//Q7.
let getEmID=new Promise((resolve,reject)=>{
  setTimeout(()=>{
      let id=[1,2,3,4,5];
      resolve(id);
      reject("Error in fetching the id details");
  },2000)
})

let getEmpDetails=(data)=>{
  return new Promise((resolve,reject)=>{//2nd way of creating promises
      setTimeout((data)=>{
          let empDetails={
              name:"Shyam Sundar",
              age:34
          }
          resolve(`The name of the employee is ${empDetails.name} and age is ${empDetails.age}`)
      },2000,data);
  })
}

getEmID.then((id)=>{//takes id parameter of 1st resolve
  console.log(id);
  return getEmpDetails(id[1])
}).then((sample)=>{//Here indexing 1 means It is accessing id 2 of id array
      console.log(sample);
}).catch((err)=>{
  console.log(err);
}).finally(()=>{
   console.log("End of Promise");
  })

//Q8.
async function fetchData(){
  let id_data=await getEmID();
  console.log(id_data);
  let emp_details=await getEmpDetails(id[1]);
  console.log(emp_details);
} 
