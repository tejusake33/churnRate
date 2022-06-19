function calc() {
    var customersAtStart = document.getElementById("start").value; 
    var customersAtStart = parseInt(customersAtStart,10);
    var customersLost = document.getElementById("lost").value;
    var customersLost = parseInt(customersLost,10);
    
    var rate = (customersLost/customersAtStart);
    var churnRate = (rate*100);
    var customerLifetime = (1/rate);
  
    document.getElementById("churnRate").value = churnRate;
    document.getElementById("lifetime").value = customerLifetime;
  }
  