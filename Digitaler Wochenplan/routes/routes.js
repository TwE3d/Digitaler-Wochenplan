module.exports = function(app){

	const wochenplan = require("../models/wochenplan.js");
	const bodyParser = require("body-parser");

	app.use(bodyParser.urlencoded({extended: false}));

	app.get("/", function(req, res){
		res.render("wochenplaner",
		{
			Woche: wochenplan.getWoche()
		});
	});

	app.get("/neueAufgabe", function(req, res){
		res.render("neueAufgabe");
	});

	app.post("/neueAufgabe", function(req, res){
		wochenplan.addAufgabe(req.body.wochentagAuswahl, req.body.slotAuswahl, req.body.aufgabenName, req.body.beschreibungEingabe, req.body.linkEingabe);
		res.redirect("/");
	});


	
	
}

