var questions = new Array('Is your problem personal or corporate?', 'goodbye', 'yes', 'no');
var questionsB = new Array('Is your problem personal or corporate?', 'goodbye', 'yes', 'no');

var dict = {
      q: "Are you looking for a lawyer for a person or a company?",
    qA: "Have the police talked to you?",
    qB: "lawyers.html",
    qAA: "Were they nice?",
    qAB: "Do you want to talk to them?",
    qBA: "Is your problem Q1?",
    qBB: "Is your problem Q2?",
};

var dict2 = {
      q: "Are you looking for a lawyer for a person or a company?",
    qA: new Array("Yes","No"),
    qB: new Array("Yes","No"),
    qAA: new Array("1","2"),
    qAB: new Array("3","4"),
    qBA: new Array("5","6"),
    qBB: new Array("7","9"),
};

var index = 0;
var Qindex ="q";

function A() {

  if (Qindex != "qAA") {

          
        Qindex = Qindex + "A"
        document.getElementById("Q").innerHTML =  dict[Qindex]
        document.getElementById("A").innerHTML=dict2[Qindex][0];
        document.getElementById("B").innerHTML=dict2[Qindex][1];

      }
  else 

        window.location.href = "lawyers.html";

      };




function B() {

  if (Qindex != "qAA") {

          
        Qindex = Qindex + "A"
        document.getElementById("Q").innerHTML =  dict[Qindex]
        document.getElementById("A").innerHTML=dict2[Qindex][0];
        document.getElementById("B").innerHTML=dict2[Qindex][1];

      }
  else 

        window.location.href = "lawyers.html";

      };
 
