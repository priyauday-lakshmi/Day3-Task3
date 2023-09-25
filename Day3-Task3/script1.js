//Day3 - Task 3
//Question2 and question 3 
//Use the rest countries' API URL to dasplay all the country flags in the console

//Step 01: Create a XHR objects
//var varaibleName : userdefined your choice

var request = new XMLHttpRequest();  

//step 02:  specify the API
request.open("GET", "https://restcountries.com/v3.1/all");

//step03: sending the request
request.send();

//step04: once the requested data is there in server once data is successfully loaded
//server response will be of 200 status code.
//Functions: they are used to perform specific task.

request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);
    //whatever conversion has to be done here only
    //not outside
    
    for (var i = 0; i < result.length; i++) {
        var country = result[i];
        console.log(country.flags); // Display the flag of each country
        console.log(country.name);
        console.log(country.region);
        console.log(country.subregion);
        console.log(country.population);
        
      }
    
    
}
