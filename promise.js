// let myPromise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve();
//   }, 1000);
// });

// myPromise
//   .then(function() {
//     return 99;
//   })
//   .then(function(number) {
//     console.log(number);
//   });

const randomNumberPromise2 = new Promise((res, rej) => {
  
  setTimeout(()=> {
    const randomVal = Math.random()

    if (randomVal > 0.5) {
        res(randomVal)
    } else if (randomVal <= 0.5) {
     rej(randomVal) 
    }

    }, 1000)
  })
      randomNumberPromise2.then(value => {
        console.log('success!')

      }).catch((err,value)=>{
          console.log('fail')
      })

      console.log('complete')

    





// let myPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     let number = Math.random();
//     if (number > 0.5) {
//       res(number);
//     } else {
//       rej(number);
//     }
//   }, 1000);
// });

// myPromise
//   .then((value) => {
//     console.log('Success!', value)
//   })
//   .catch((value) => {
//     console.log('Failure', value);
//   });


//const randomNumberPromise

