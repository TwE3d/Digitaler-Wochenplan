
var TageContainer = [];
	for(var tag = 1;i<6;i++){
		TageContainer[tag]=[];
		for(var slot = 0;i<6;i++){
			TageContainer[tag][slot]= new Aufgabe("Frei", "Freizeit", "")
		
		}
	}

function Aufgabe(Name, Beschreibung, Link){
	this.Name = Name;
    this.Beschreibung = Beschreibung;
    this.Link = Link;
}

function getWoche(){
	return TageContainer;
}

console.log(getWoche());

module.exports.getWoche = getWoche;