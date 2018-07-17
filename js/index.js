setInterval(function(){
	var curTimes = new Date();//当前时间
	
	var objTimes = new Date();//目标时间
	var hours = 0;

	if (curTimes.getHours()<12) {
		hours = 12;
	}else if (curTimes.getHours()<18) {
		hours = 18;
	}else{
		hours = 24;
	}

	objTimes.setHours(hours,0,0);

	var s = Math.floor((objTimes-curTimes)/1000);//时间间隔 时间戳
	console.log(s);

	var h = m = 0;
	if (s>60) {
		m = Math.floor(s/60);
		s %= 60;

		if (m>60) {
			h = Math.floor(m/60);
			m %= 60;
		}
	}

	h<10 ? h='0'+h : h;
	m<10 ? m='0'+m : m;
	s<10 ? s='0'+s : s;

	//优化，时间都是两位数
	var timesH = document.getElementsByClassName('timesH')[0];
	var timesM = document.getElementsByClassName('timesM')[0];
	var timesS = document.getElementsByClassName('timesS')[0];
	var dgps = document.getElementsByClassName('dgps')[0];

	dgps.innerHTML= hours;
	timesH.innerHTML = h;
	timesM.innerHTML = m;
	timesS.innerHTML = s;

},1000);