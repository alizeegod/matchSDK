var verification = function(id,opts){
	this.id = document.getElementById(id);
	this.outFontSize = opts.outFontSize;
	this.outColor = opts.outColor;
	this.outBackground = opts.outBackground;
	this.startTime = opts.startTime || 60;
	this.endTime = opts.endTime || 0;
	this.outText = opts.outText || '秒后重新发送';
	this.clicked = 0;
	this.init();
	this.send(opts);
}
verification.prototype = {
	init:function(){
		HTMLElement.prototype.__defineGetter__("currentStyle", function () { 
			return this.ownerDocument.defaultView.getComputedStyle(this, null); 
		});
		this.inColor = this.id.currentStyle.color;
		this.inFontSize = this.id.currentStyle.fontSize;
		this.inBackground = this.id.currentStyle.background;
		this.inText = this.id.textContent;
	},
	send:function(opts){
		var obj = this.id,
			startTime = this.startTime,
			time = startTime,
			endTime = this.endTime,
			inFontSize = this.inFontSize,
			outFontSize = this.outFontSize,
			inColor = this.inColor,
			outColor = this.outColor,
			inBackground = this.inBackground,
			outBackground = this.outBackground,
			inText = this.inText,
			outText = this.outText,
			clicked = this.clicked;
		obj.onclick = function(){
			var timer = null;
			if (clicked) {
				console.log(clicked)
				return false;
			}
			opts.callBack();
			sended();
			timer = setInterval(sended,1000);
			function sended(){
				clicked = 1;
				obj.textContent = time + outText;
				obj.style.color = outColor;
				obj.style.fontSize = outFontSize;
				obj.style.background = outBackground;
				obj.disabled = false;
				if(time < endTime){
					clearInterval(timer);
					obj.disabled = true;
					obj.style.color = inColor;
					obj.style.fontSize = inFontSize;
					obj.style.background = inBackground;
					obj.textContent = inText;
					time = startTime;
					clicked = 0;
				}
				time--;
			}
		}
	}
}

