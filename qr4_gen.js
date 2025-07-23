function qr4(){
	var x = document.getElementById("testo").value;
	if (x != '')
	{
		var url = `https://quickchart.io/qr?text=${x}`;
		var img = document.getElementById("img4");
		img.src = url;
		img.className = "arrivooo";
	}
	else
		testo.value = '-- scrivi il tuo testo qui! --';
}