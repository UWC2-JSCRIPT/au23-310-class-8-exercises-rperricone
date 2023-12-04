//Get a DOM hook into the notice div

// Make a setTimeout that has

// 1. a callback function that removes the notice div from the DOm
// 2. a delay of 5 seconds
const mn = document.getElementById('maintenance-notice')
setTimeout(() => {
    mn.remove()  
}, 5000)
