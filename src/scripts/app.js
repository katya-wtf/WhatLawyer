var questions = new Array('Is your problem personal or corporate?', 'goodbye', 'yes', 'no');
var questionsB = new Array('Is your problem personal or corporate?', 'goodbye', 'yes', 'no');

var dict = {
      q: "Are you looking for a lawyer for a person or a company?",
    qA: "Does this have to do with:",
    qAA: "Does this have to do with your: ",
    qAB: "Are you a:",
    qABA: "Is your problem with:",
    qAC:" Is this about:",
    qACA: "Is this about your:",
    qACAA: "Do you own or rent your residence? ",
    qACAAA:"Do you have a problem with your:",

    qACAAAD: " Do you have a problem with your:",
    qB: "Is your company registered as an:",


  
};

var dict2 = {
    q: "Are you looking for a lawyer for a person or a company?",
    qA: new Array("Family","Work","Property", "Other"),
    qAA:  new Array("Spouse/ Partner","Children", "Parents", "Other"),	
    qAB: new Array("Full-time employee", "Temporary or parttime", "Independent Contractor", "Other"),
    qABA: new Array("Salary or Benefits","Getting fired or laid off","Taxes","Others"),
    qAC: new Array("Your property","Someone else's property","A disagreement about that","Others"),
    qACA: new Array("Residence","Car","Land","Other"),
    qACAA: new Array("Own","Rent","Both","Other"),
    qACAAA: new Array("Ownership/title"," An insurance claim","Construction","Other"),
    qACAAAD: new Array("Land","Neighbors","Municipal authorities","Others"),
    qB: new Array("Limited liability company","Sole proprietorship","Not registered","Ohers"),


};



var index = 0;
var Qindex ="q";

function A() {

  if (Qindex == "qAA" || Qindex == "qABA" || Qindex == "qACA" ) {

    document.getElementById("Q").innerHTML =  "We're sorry, we're still working to find lawyers who can help you. \r\n Refresh to return to the start"

    var elem = document.getElementById('A');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('B');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('C');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('D');
    elem.parentNode.removeChild(elem);
    document.getElementById("img").innerHTML="<img src='sadOwl.jpg'>";


  }


       
  else {
      Qindex = Qindex + "A"
      document.getElementById("Q").innerHTML =  dict[Qindex]
      document.getElementById("A").innerHTML=dict2[Qindex][0];
      document.getElementById("B").innerHTML=dict2[Qindex][1];
      document.getElementById("C").innerHTML=dict2[Qindex][2];
      document.getElementById("D").innerHTML=dict2[Qindex][3];

    
    }};

function B() {

    if (Qindex == "qAA" || Qindex == "qABA" || Qindex == "qACB") {

    document.getElementById("Q").innerHTML =  "We're sorry, we're still working to find lawyers who can help you."

    var elem = document.getElementById('A');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('B');
    elem.parentNode.removeChild(elem);
       var elem = document.getElementById('C');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('D');
    elem.parentNode.removeChild(elem);
    document.getElementById("img").innerHTML="<img src='sadOwl.jpg'>";


  }


    else {
           Qindex = Qindex + "B"
      document.getElementById("Q").innerHTML =  dict[Qindex]
      document.getElementById("A").innerHTML=dict2[Qindex][0];
      document.getElementById("B").innerHTML=dict2[Qindex][1];

}};

function C() {

    if (Qindex == "qAA" || Qindex == "qACC") {

    document.getElementById("Q").innerHTML =  "We're sorry, we're still working to find lawyers who can help you."

    var elem = document.getElementById('A');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('B');
    elem.parentNode.removeChild(elem);
       var elem = document.getElementById('C');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('D');
    elem.parentNode.removeChild(elem);
    document.getElementById("img").innerHTML="<img src='sadOwl.jpg'>";


  }

  else if (Qindex == "qABA") {

    document.getElementById("Q").innerHTML =  "Based on what you have told us, we suggest you speak to a Tax Lawyer. We reccommend you speak to XX"
    var elem = document.getElementById('A');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('B');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('C');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('D');
    elem.parentNode.removeChild(elem);



    document.getElementById("img").innerHTML="<img src='taxlawyer.jpg'>";

  
  }
 

    else {
           Qindex = Qindex + "B"
      document.getElementById("Q").innerHTML =  dict[Qindex]
      document.getElementById("A").innerHTML=dict2[Qindex][0];
      document.getElementById("B").innerHTML=dict2[Qindex][1];}

};

function D() {

    if (Qindex == "qAA" || Qindex == "qAB"|| Qindex == "qABD" || Qindex == "qACD"  ) {

    document.getElementById("Q").innerHTML =  "We're sorry, we're still working to find lawyers who can help you."

    var elem = document.getElementById('A');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('B');
    elem.parentNode.removeChild(elem);
       var elem = document.getElementById('C');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('D');
    elem.parentNode.removeChild(elem);
    document.getElementById("img").innerHTML="<img src='sadOwl.jpg'>";


  }
 

    else {
           Qindex = Qindex + "B"
      document.getElementById("Q").innerHTML =  dict[Qindex]
      document.getElementById("A").innerHTML=dict2[Qindex][0];
      document.getElementById("B").innerHTML=dict2[Qindex][1];
    }
};
