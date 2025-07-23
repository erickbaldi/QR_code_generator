function qr1(){
		var x = document.getElementById("testo").value;
		if (x != '')
		{
			var url = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${x}`;
			var img = document.getElementById("img");
			img.src = url;
			img.className = "arrivooo";
		}
		else
			testo.value = '-- scrivi il tuo testo qui! --';
	}