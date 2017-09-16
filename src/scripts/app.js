var questions = new Array('Is your problem personal or corporate?', 'goodbye', 'yes', 'no');
var questionsB = new Array('Is your problem personal or corporate?', 'goodbye', 'yes', 'no');

var dict = {
      q: "Are you looking for a lawyer for a person or a company?",
    qA: "Does this have to do with family?",
    qAA: "Does this have to do with your spouse/partner?",	
    qAAA: "Workarea: Partner",	
    qAAB: "Workarea: nonPartner",	
    qAB: "Does this have to do with work?",
    qABA: "Are you a full-time employee?",
    qABAA: "Is this a problem with salary or benefits?",
    qABAAA: "Does this have to do with your taxes?",
    qABAAAA: "Workarea: Taxlawyer!",
    qABAAAB: "Workarea: Xabilawyer",
    qABAAB: "Workarea: NoSorry",
    qABAB: "Are you a temporary/part-time employee?",
    qABABA: "Workarea: partTime",
    qABABB: "Are you an independent contractor?",
    
    qABB:"Is this about Property?",
    qABBA:"Your property?",
    qABBAA:"Do you own or rent your residence?",
    qABBAAA: "Do you have a problem with your ownership/title?",
    qABBAAAA: "Workarea: RealEstate",
    qABBAAAB:"Workarea: nonRealEstate",
    qABBAAB:"Workarea: nonOwnRealEstate",
    qABBAB: " WOrkarea: OthersProperty",

    qB: "Is your company registered?",
    qBA: "Workarea: nonCorporateLawyer",
    qBB:"Workarea: CorporateLawyer",
};

var dict2 = {
      q: "Are you looking for a lawyer for a person or a company?",
    qA: new Array("Yes","No"),
    qA:  new Array("Yes","No"),
    qAA:  new Array("Yes","No"),	
    qAAA:  new Array("Yes","No"),	
    qAAB:  new Array("Yes","No"),	
    qAB:  new Array("Yes","No"),
    qABA:  new Array("Yes","No"),
    qABAA:  new Array("Yes","No"),
    qABAAA:  new Array("Yes","No"),
    qABAAAA:  new Array("Yes","No"),
    qABAAAB:  new Array("Yes","No"),
    qABAAB:  new Array("Yes","No"),
    qABAB:  new Array("Yes","No"),
    qABABA:  new Array("Yes","No"),
    qABABB: new Array("Yes","No"),
    
    qABB: new Array("Yes","No"),
    qABBA: new Array("Yes","No"),
    qABBAA: new Array("Yes","No"),
    qABBAAA:  new Array("Yes","No"),
    qABBAAAA:  new Array("Yes","No"),
    qABBAAAB: new Array("Yes","No"),
    qABBAAB: new Array("Yes","No"),
    qABBAB:  new Array("Yes","No"),

    qB:  new Array("Yes","No"),
    qBA:  new Array("Yes","No"),
    qBB: new Array("Yes","No"),
};

var index = 0;
var Qindex ="q";

function A() {

  if (Qindex == "qAA" || Qindex == "qB" || Qindex == "qABAB" || Qindex == "qABAB") {

    document.getElementById("Q").innerHTML =  "We're sorry, we're still working to find lawyers who can help you."

    var elem = document.getElementById('A');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('B');
    elem.parentNode.removeChild(elem);
    document.getElementById("C").innerHTML="<img src='sadOwl.jpg'>";


  }


       
  else {
      Qindex = Qindex + "A"
      document.getElementById("Q").innerHTML =  dict[Qindex]
      document.getElementById("A").innerHTML=dict2[Qindex][0];
      document.getElementById("B").innerHTML=dict2[Qindex][1];

    }


    };

function B() {

    if (Qindex == "qABBA" || Qindex == "qABBAA" || Qindex == "qABBAAAB" ) {

    document.getElementById("Q").innerHTML =  "We're sorry, we're still working to find lawyers who can help you."

    var elem = document.getElementById('A');
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById('B');
    elem.parentNode.removeChild(elem);
    document.getElementById("C").innerHTML="<img src='sadOwl.jpg'>";



  }
           Qindex = Qindex + "B"
      document.getElementById("Q").innerHTML =  dict[Qindex]
      document.getElementById("A").innerHTML=dict2[Qindex][0];
      document.getElementById("B").innerHTML=dict2[Qindex][1];

};
