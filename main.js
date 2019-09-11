function calcExpenses() {
  let rent = document.getElementById("rent").value;
  let elec = document.getElementById("elec").value;
  let tech = document.getElementById("tech").value;
  let heat = document.getElementById("heat").value;
  let count = document.getElementById("count").value;
  
  let mototal = parseFloat(rent) + parseFloat(elec) + parseFloat(tech) + parseFloat(heat);
  let moto2dec = mototal.toFixed(2);
  
  if( rent === "" || elec === "" || tech === "" || heat === "" ) {
    alert("Enter amounts for all 4 expenses ('0' is allowed) AND a number of roommates.");
  }
  else if(count < 2) {
    alert("For # of Roommates, enter 2 or greater.")
  }
  else {
    document.getElementById("mototal").style.display = "inline-block";
    document.getElementById("mototal").innerHTML = "&rArr; Total expenses are: $" + moto2dec;
    document.getElementById("totper").style.display = "block";
    document.getElementById("totper").innerHTML = "Expenses per Roommate: $ " + (moto2dec / parseFloat(count)).toFixed(2);
  }
  
} 
 
document.getElementById("calcbutton").onclick = function() {
    calcExpenses();
};

document.getElementById("clearbutton").onclick = function() {
    document.getElementById("calcform").reset();
    document.getElementById("mototal").style.display = "none";
    document.getElementById("totper").style.display = "none";
    document.getElementById("rentquip").style.display = "none";
};