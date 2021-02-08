const Datum = new Date();
var TageContainer = [];
	for(var tag = 0;tag<5;tag++){
		TageContainer[tag]=[];
		for(var slot = 0;slot<6;slot++){
			TageContainer[tag][slot]= new Aufgabe("", "", "")
		
		}
	}

function Aufgabe(Name, Beschreibung, Link){
	this.Name = Name;
    this.Beschreibung = Beschreibung;
    this.Link = Link;
    this.Datum = Datum.getDate()+"."+(Datum.getMonth()+1)+"."+Datum.getFullYear();
}

function getWoche(){   //Liefert Array, Wichtig für Wochenplan
	return TageContainer;
}

function addAufgabe(Tag, Slot, Name, Beschreibung, Link){ //Aufgabe einfügen, wichtig für Seite /neueAufgabe
	TageContainer[Tag][Slot]= new Aufgabe(Name, Beschreibung, Link);
}

//Datenhaltung
addAufgabe("0","0", "DigiKreis", "Unser Treffpunkt zum Start der Woche", "https://www.webex.com/de/test-meeting.html");
addAufgabe("0","2", "Lesen", "Lesestunde", "https://www.zvab.com/Construction-Evolution-Code-Generators-Sven-J%C3%B6rges/13791160385/bd");
addAufgabe("0","3", "Rechnen 1", "Das sehr große 1x1", "http://www.inf.fh-dortmund.de/personen/professoren/cleven/index.html");
addAufgabe("1","1", "Sachkunde", "Was ist wo?", "https://www.geoguessr.com/");
addAufgabe("1","5", "Elternsprechtag", "Termine nur nach Absprache", "https://www.webex.com/de/test-meeting.html");
addAufgabe("2","2", "Musik", "ein Klassiker", "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO");
addAufgabe("2","4", "Sport", "Sport@Home", "https://www.youtube.com/watch?v=olNR0RNaXyU");
addAufgabe("3","1", "Kunst", "Zusammen zeichnen", "https://aggie.io/");
addAufgabe("3","2", "Schreiben", "Zusammen schreiben", "https://www.google.de/intl/de/docs/about/");
addAufgabe("3","3", "Rechnen 2", "Das sehr große 1/1", "http://www.inf.fh-dortmund.de/personen/professoren/rietmann/index.html");
addAufgabe("4","2", "Erzählen", "Erzähl von der Woche", "https://www.webex.com/de/test-meeting.html");
addAufgabe("4","3", "Klassenrat", "Aktuelle Stunde", "https://amongusplay.online/");

function getWochenTag(){ //Montag, Samstag, Sonntag = 0, Dienstag = 1 ... Wichtig dafür, welcher Tag bei der Tagesansicht angezeigt wird
	switch(new Date().getDay()){
		case 0: 
			return 0;
		case  1:
			return 0;
		case 2:
			return 1;
		case 3:
			return 2;
		case 4:
			return 3;
		case 5:
			return 4;
		case 6:
			return 0;

	}
}

module.exports = {
	getWoche,
	addAufgabe,
	getWochenTag,
};