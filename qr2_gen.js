function qr2(){
	var x = document.getElementById("testo").value;
	if (x != '')
	{
		var url = `https://chart.googleapis.com/chart?choe=UTF-8&cht=qr&chs=200x200&chl=${x}`;
		var img = document.getElementById("img2");
		img.src = url;
		img.className = "arrivooo";
	}
	else
		testo.value = '-- scrivi il tuo testo qui! --';
}