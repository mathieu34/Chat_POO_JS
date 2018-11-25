function Chrono  {
	
	this.mesure = {

		decrire: function (start) {
		timer = setInterval("start", 1000);
		}

		decrire: function (pause) {
			if 
    		pause = true;
    		clearInterval(timer);
    		else 
    		pause = false;
     		DemarrerChrono();
		}
	
		decrire: function (stop) {
		clearInterval(timer);
		}
	}
}

var FirstChrono = new Chrono ();