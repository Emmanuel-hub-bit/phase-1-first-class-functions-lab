function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2); // Returns a new array with the first two elements of drivers
  }

function returnLastTwoDrivers(drivers) {
    // Check if the input array has at least two elements
    if (drivers.length >= 2) {
      // Return a new array containing the last two elements
      return drivers.slice(-2);
    } else {
      // If there are less than two elements, return the entire array (or handle this case as needed)
      return drivers;
    }
  }

  
// Define the functions
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2); // Returns the first two drivers
  }
  
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2); // Returns the last two drivers
  }
  
  // Create the array selectingDrivers
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


  // Function to create a fare multiplier
function createFareMultiplier(multiplier) {
    // Returning a function that multiplies a given value
    return function(value) {
      return value * multiplier;
    };
  }


  // Function to double a fare
function fareDoubler(fare) {
    return fare * 2;
  }


  // Function to triple a fare
function fareTripler(fare) {
    return fare * 3;
  }
  

  // Function to return the first two drivers
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  // Function to return the last two drivers
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }

  // Function to select different drivers based on a selector function
function selectDifferentDrivers(drivers, selectorFunction) {
    return selectorFunction(drivers);
  }
  