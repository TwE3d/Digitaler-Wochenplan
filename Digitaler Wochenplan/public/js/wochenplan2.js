
function Tag(tagDerWoche){
	this.tagDerWoche = tagDerWoche; //1..5
	this.slots = [];
	var anzahlSlots = 6;
	this.getAufgabe = function(n){
		return this.slots[n];
	}
}

function Woche(KW){
	this.KW = KW;
	this.TageContainer = [];
	for(var i = 1;i<6;i++){
		this.TageContainer.push(new Tag(i));
	}

	this.getTagausContainer = function(n){
		return this.TageContainer[n];
	}
}



function Aufgabe(Name, Beschreibung, Link){
	this.Name = Name;
    this.Beschreibung = Beschreibung;
    this.Link = Link;
}

function addAufgabe(KW, Tag, Slot, Name, Beschreibung, Link){
	console.log(KW.getTagausContainer(Tag-1).slots());
}

let kw12 = new Woche("12");
let matheMul = new Aufgabe("Mathe Zählen", "Heute steht ein Video von der Sendung mit der Maus auf dem Programm! Viel Spaß!", "https://kinder.wdr.de/tv/die-sendung-mit-der-maus/video-bis--zaehlen-102.html");

console.log(kw12);
console.log(matheMul);
console.log(kw12.getTagausContainer(2).tagDerWoche);
addAufgabe(12, 1, 3, "Test", "test", "Test");