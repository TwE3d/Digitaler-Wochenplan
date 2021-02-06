
function Tag(tagDerWoche){
	this.tagDerWoche = tagDerWoche; //1..5
	var slots = [];
	var anzahlSlots = 6;
	this.getAufgabe = function(n){
		return slots[n];
	}

	this.addAufgabe = function(Slot, Name, Beschreibung, Link){
			slots[Slot] = new Aufgabe(Name, Beschreibung, Link);
	}
}

function Woche(KW){
	this.KW = KW;
	var TageContainer = [];
	for(var i = 1;i<6;i++){
		TageContainer.push(new Tag(i));
	}

	this.getTagausContainer = function(n){
		return TageContainer[n];
	}
}


function Aufgabe(Name, Beschreibung, Link){
	this.Name = Name;
    this.Beschreibung = Beschreibung;
    this.Link = Link;
}

function getWoche(){
	return kw;
}

let kw = new Woche("12");

console.log(kw);
console.log(kw.getTagausContainer(2).addAufgabe(2, "Mathe Zählen", "Heute steht ein Video von der Sendung mit der Maus auf dem Programm! Viel Spaß!", "https://kinder.wdr.de/tv/die-sendung-mit-der-maus/video-bis--zaehlen-102.html"));
console.log(kw.getTagausContainer(2).getAufgabe(2));

console.log(getWoche());

module.exports.getWoche = getWoche;