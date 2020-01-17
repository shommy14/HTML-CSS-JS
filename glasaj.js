
			function ispis(){
				var a = glasanje.a.value;
				var b = glasanje.b.value;
				var c = glasanje.c.value;
				if(a =="" || b =="" || c =="")
				{
				alert("Popunite sve podatke!");
				} 
				else
				{
				document.write("<table border='3' width='50%' height='70%' align='center'><td align='center'>Ime i prezime: " 
				+ a + "<br>Godiste: " 
				+ b + "<br>Pol: "
				+ c + "<br>USPESNO STE IZVRSILI GLASANJE!!!</td></table>");
				} 
			}
			
		