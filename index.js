
var Index = 0;
		slike();
		function slike() 
		{
			var i;
			var x = document.getElementsByClassName("SLAJDER"); 
			for (i = 0; i < x.length; i++)
				{
					x[i].style.display = "none";  
				}
		Index++;
		if (Index > x.length) {Index = 1}    
		x[Index-1].style.display = "block";  
		setTimeout(slike, 4500); 
	}
	
	
var mapa = document.getElementById("map");
		var OpcijeMapa = 
		{
			center: new google.maps.LatLng(38.955348, -95.252010), zoom:15
		}
		var map = new google.maps.Map(mapa, OpcijeMapa); 
	
	