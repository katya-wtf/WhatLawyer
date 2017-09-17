var questions = new Array('Is your problem personal or corporate?', 'goodbye', 'yes', 'no');
var questionsB = new Array('Is your problem personal or corporate?', 'goodbye', 'yes', 'no');

var dict = {
      q: "Are you looking for a lawyer for a person or a company?",
    qA: "What is your issue related to?",
    qB: "What is your issue related to? ",
    qC: "What is your issue related to?",
    qD: "What is your issue related to?",
    


  
};

var dict2 = {
    qA: new Array("Taxes","Pay","Got Fired", "Harassment"),
    qB:  new Array("Divorce","Child Custody", "Spousal Abuse", "Inheritance"),	
    qC: new Array("Ownership", "Landlord", "Taxes", "Insurance"),
    qD: new Array("Registration","Protecting your ideas","Taxes","An Employee"),

};



var index = 0;
var Qindex ="q";

function A() {

   Qindex = Qindex + "A"
    


  if (Qindex == "qAA") {


    document.getElementById("Q").innerHTML =  "You need a tax lawyer."
    var elem = document.getElementById('A');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('B');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('C');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('D');
    elem.parentNode.removeChild(elem);



  }

    else if (Qindex == "qBA") {


    document.getElementById("Q").innerHTML =  "You need a family lawyer."
    var elem = document.getElementById('A');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('B');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('C');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('D');
    elem.parentNode.removeChild(elem);



  }  else if (Qindex == "qCA") {


    document.getElementById("Q").innerHTML =  "You need an real state lawyer."
    var elem = document.getElementById('A');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('B');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('C');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('D');
    elem.parentNode.removeChild(elem);



  }  else if (Qindex == "qDA") {


    document.getElementById("Q").innerHTML =  "You need an company lawyer."
    var elem = document.getElementById('A');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('B');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('C');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('D');
    elem.parentNode.removeChild(elem);



  }

  else {  

      document.getElementById("Q").innerHTML =  dict[Qindex]
      document.getElementById("A").innerHTML=dict2[Qindex][0];
      document.getElementById("B").innerHTML=dict2[Qindex][1];
      document.getElementById("C").innerHTML=dict2[Qindex][2];
      document.getElementById("D").innerHTML=dict2[Qindex][3];

    }

 

};


function B() {

   Qindex = Qindex + "B"
    


  if (Qindex == "qAB") {


    document.getElementById("Q").innerHTML =  "You need a employment lawyer."
    var elem = document.getElementById('A');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('B');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('C');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('D');
    elem.parentNode.removeChild(elem);



  }

    else if (Qindex == "qBB") {


    document.getElementById("Q").innerHTML =  "You need a family lawyer."
    var elem = document.getElementById('A');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('B');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('C');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('D');
    elem.parentNode.removeChild(elem);



  }  else if (Qindex == "qCB") {


    document.getElementById("Q").innerHTML =  "You need a tenants rights lawyer."
    var elem = document.getElementById('A');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('B');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('C');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('D');
    elem.parentNode.removeChild(elem);



  }  else if (Qindex == "qDB") {


    document.getElementById("Q").innerHTML =  "You need a intellectual property lawyer."
    var elem = document.getElementById('A');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('B');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('C');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('D');
    elem.parentNode.removeChild(elem);



  }

  else {  

      document.getElementById("Q").innerHTML =  dict[Qindex]
      document.getElementById("A").innerHTML=dict2[Qindex][0];
      document.getElementById("B").innerHTML=dict2[Qindex][1];
      document.getElementById("C").innerHTML=dict2[Qindex][2];
      document.getElementById("D").innerHTML=dict2[Qindex][3];
    }

 

};

function C() {

   Qindex = Qindex + "C"
    


  if (Qindex == "qAC") {


    document.getElementById("Q").innerHTML =  "You need an employment lawyer."
    var elem = document.getElementById('A');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('B');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('C');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('D');
    elem.parentNode.removeChild(elem);



  }

    else if (Qindex == "qBC") {


    document.getElementById("Q").innerHTML =  "You need an estates lawyer."
    var elem = document.getElementById('A');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('B');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('C');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('D');
    elem.parentNode.removeChild(elem);



  }  else if (Qindex == "qCC") {


    document.getElementById("Q").innerHTML =  "You need a tax lawyer."
    var elem = document.getElementById('A');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('B');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('C');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('D');
    elem.parentNode.removeChild(elem);



  }  else if (Qindex == "qDC") {


    document.getElementById("Q").innerHTML =  "You need a tax lawyer."
    var elem = document.getElementById('A');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('B');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('C');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('D');
    elem.parentNode.removeChild(elem);



  }

  else {  

      document.getElementById("Q").innerHTML =  dict[Qindex]
      document.getElementById("A").innerHTML=dict2[Qindex][0];
      document.getElementById("B").innerHTML=dict2[Qindex][1];
      document.getElementById("C").innerHTML=dict2[Qindex][2];
      document.getElementById("D").innerHTML=dict2[Qindex][3];
    }

 

};

function D() {

   Qindex = Qindex + "D"
    


  if (Qindex == "qAD") {


    document.getElementById("Q").innerHTML =  "You need an employment lawyer."
    var elem = document.getElementById('A');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('B');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('C');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('D');
    elem.parentNode.removeChild(elem);



  }

    else if (Qindex == "qBD") {


    document.getElementById("Q").innerHTML =  "You need a criminal defense lawyer."
    var elem = document.getElementById('A');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('B');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('C');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('D');
    elem.parentNode.removeChild(elem);



  }  else if (Qindex == "qCD") {


    document.getElementById("Q").innerHTML =  "You need an insurance lawyer."
    var elem = document.getElementById('A');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('B');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('C');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('D');
    elem.parentNode.removeChild(elem);



  }  else if (Qindex == "qDD") {


    document.getElementById("Q").innerHTML =  "You need a company lawyer."
    var elem = document.getElementById('A');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('B');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('C');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('D');
    elem.parentNode.removeChild(elem);



  }

  else {  

      document.getElementById("Q").innerHTML =  dict[Qindex]
      document.getElementById("A").innerHTML=dict2[Qindex][0];
      document.getElementById("B").innerHTML=dict2[Qindex][1];
      document.getElementById("C").innerHTML=dict2[Qindex][2];
      document.getElementById("D").innerHTML=dict2[Qindex][3];
    }

 

};
