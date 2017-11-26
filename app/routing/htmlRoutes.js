app.get("/:url", function(req, res) {
	if(url === "survey"){
		res.sendFile(path.join(__dirname, "survey.html"));
	}
  else{res.sendFile(path.join(__dirname, "home.html"));}


});

