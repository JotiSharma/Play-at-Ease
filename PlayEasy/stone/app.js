// const employee ={
//  calcTax()
//  {
//     console.log("ta")
//  }
// }

// class cars
// {
//    constructor(brand , mileage)
//    {
//       this.brand = brand;
//       this.mileage = mileage;
//       console.log("hello i am constructor");
//    }

//    start()
//    {
//       console.log("start");
//    }
//    // setBrand(brand)
//    // {
     
//    // }
     
// }
// let fortuner = new cars("fortuner" , 10);
// fortuner.setBrand();
let promise = new Promise((resolve , reject)=>{
   console.log("I am  promise");
   resolve(" RESOLVED PROMISE");
})
const getPromise=()=>{
    return new Promise((resolve , reject)=>{
      console.log("I am a promise");
      resolve("Success");
   })
}
let prom = getPromise();

//EXECUTES WHEN THE PROMISE IS FULLFILLED I.E. RESOLVED
// prom.then(()=>{
//    console.log("promise fullfilled");
// })


//EXECUTES WHEN THE PROMISE IS NOT FULLFILLED OR REJECTED
// prom.catch((err)=>{
// console.log("rejected");
// })
function getData(dataID , getNextData){
   return new Promise((resolve, reject)=>{
      setTimeout(()=>{
         console.log("data", dataID);
         resolve("success");
         if(getNextData){
            getNextData();
         }
      }, 5000);
   })
}


//ASYNC FUNCTION ALWAYS RETURN A PROMISE
async function hello(){
   console.log("async func");
}
//AWAIT FUNCTION PAUSE THE EXECUTION OF SURROUNDING ASYNC  FUNCTION UNTIL THE PROMISE IS SETTLED

function api()
{
   return new Promise((resolve , reject)=>{
      setTimeout(()=>{
         console.log("weather data");
         resolve(200);
      });
   });
};

// WE ARE MAKING SEPARATE FUNCTION TO AWAIT BECAUSE AWAIT ONLY WORKS WITHIN AN ASYNC FUNCITON
async function getWeatherData(){
await api();
await api();
}

async function getAllData()
{
   await getData(1);
   console.log("getting data 1..........");
   await getData(2);
   console.log("getting data 2..........");
   await getData(3);
   console.log("getting data 3..........");
   await getData(4);
   console.log("getting data 4..........");
}