function calc() {
    var customersAtStart = document.getElementById("start").value;
    var customersLost = document.getElementById("lost").value;
    
    var rate = (customersLost/customersAtStart);
    var churnRate = (rate*100);
    var customerLifetime = (1/rate);
  
    document.getElementById("churnRate").value = churnRate;
    document.getElementById("lifetime").value = customerLifetime;
  }
  