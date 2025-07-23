function qr3(){
	var x = document.getElementById("testo").value;
	if (x != '')
	{
		var url = `https://api.dub.co/qr?url=${x}`;
		var img = document.getElementById("img3");
		img.src = url;
		img.className = "arrivooo";
	}
	else
		testo.value = '-- scrivi il tuo testo qui! --';
}