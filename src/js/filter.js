/**
 * 格式化时间
 * 
 * @param {String} str
 * @returns 格式化后的时间
 */
import $ from 'jQuery'

window.$ = $;

export const checkTime=(i)=>{
	return i<10?"0"+i:i
}

export const formatDate = (starttime,endtime) => {
	//当比赛还没有开始的时候，starttime   endtime
	var nowtime = new Date().getTime();//当前时间毫秒数

	var  startMo= checkTime(new Date(parseInt(starttime)*1000).getMonth()+1);//开始时间月
	var  startD= checkTime(new Date(parseInt(starttime)*1000).getDate());//开始时间日
	var  startH= checkTime(new Date(parseInt(starttime)*1000).getHours());//开始时间时
	var  startM= checkTime(new Date(parseInt(starttime)*1000).getMinutes());//开始时间分
	
	//距离比赛还剩下24小时的时候
	var Hours24 = parseInt(starttime)-parseInt(nowtime/1000)
	if(Hours24>0){
    var  startH24= checkTime(parseInt(Hours24/ 60 / 60 %24));//开始时间时
    var  startM24= checkTime(parseInt(Hours24/ 60 % 60));//开始时间分
    var  startS24= checkTime(parseInt(Hours24% 60));//开始时间秒		
	}


    //当比赛开始的时候，将要结束的时候
    var ingH24 = parseInt(endtime) - parseInt(nowtime/1000)
    var ing1H24 = parseInt(nowtime/1000) - parseInt(starttime)
    if(ingH24>0){
     var  ingH24_1= checkTime(parseInt(ingH24/ 60 / 60 %24));//开始时间时
     var  startM24_1= checkTime(parseInt(ingH24/ 60 % 60));//开始时间分
     var  startS24_1= checkTime(parseInt(ingH24 % 60));//开始时间分   	
    }
	if(startH24<=24){//如果开始时间还剩24小时的时候

		if(startH24 == '00'){
			if(startM24 == '00'){
				return '<p class="item-a item-time item-djs-time"><i></i>开始倒计时：'+startS24+'秒</p><span class="item-btn item-jjks-btn">即将开始</span>'
			}else{
			   return '<p class="item-a item-time item-djs-time"><i></i>开始倒计时：'+startM24+'分'+startS24+'秒</p><span class="item-btn item-jjks-btn">即将开始</span>'
		    }
		}else{
			return '<p class="item-a item-time item-djs-time"><i></i>开始倒计时：'+startH24+'时'+startM24+'分'+startS24+'秒</p><span class="item-btn item-jjks-btn">即将开始</span>'
		
		}
	    //return '<p class="item-a item-time item-djs-time"><i></i>开始倒计时：'+startH24+'时'+startM24+'分'+startS24+'秒</p><span class="item-btn item-jjks-btn">即将开始</span>'
		//retrun '比赛开始时间：'+startMo+'月'+startD+'日'+startH+'时'+startM+'分'
	}else if(startH24>24){//如果开始时间大于24小时的时候
		return '<p class="item-a item-time"><i></i>比赛开始时间：'+startMo+'月'+startD+'日'+startH+':'+startM+'</p><span class="item-btn item-jjks-btn">即将开始</span>'

	}else if(ing1H24>0 && ingH24>0){//如果比赛开始到还没结束的时候
        if(ingH24_1 == '00'){
        	if(startM24_1 == '00'){
    return '<p class="item-a item-time item-jsd-time"><i></i>结束倒计时时间：'+startS24_1+'秒</p><span class="item-btn item-zbz-btn">直播中</span>'	
	
        	}else{
    return '<p class="item-a item-time item-jsd-time"><i></i>结束倒计时时间：'+startM24_1+'分'+startS24_1+'秒</p><span class="item-btn item-zbz-btn">直播中</span>'	
	
        	}
        }else{
        return '<p class="item-a item-time item-jsd-time"><i></i>结束倒计时时间：'+ingH24_1+'时'+startM24_1+'分'+startS24_1+'秒</p><span class="item-btn item-zbz-btn">直播中</span>'	
	     }
	}else{//如果比赛结束了
		return '<p class="item-a item-time"><i></i>比赛开始时间：'+startMo+'月'+startD+'日'+startH+':'+startM+'</p><span class="item-btn item-yjs-btn">已结束</span>'
	}
}

export const formatDate1 = (starttime,endtime) => {
	//当比赛还没有开始的时候，starttime   endtime
	var nowtime = new Date().getTime();//当前时间毫秒数

	var  startMo= checkTime(new Date(parseInt(starttime)*1000).getMonth()+1);//开始时间月
	var  startD= checkTime(new Date(parseInt(starttime)*1000).getDate());//开始时间日
	var  startH= checkTime(new Date(parseInt(starttime)*1000).getHours());//开始时间时
	var  startM= checkTime(new Date(parseInt(starttime)*1000).getMinutes());//开始时间分
	
	//距离比赛还剩下24小时的时候
	var Hours24 = parseInt(starttime)-parseInt(nowtime)/1000
	if(Hours24>0){
     var  startH24= checkTime(parseInt(Hours24/ 60 / 60 %24));//开始时间时
     var  startM24= checkTime(parseInt(Hours24/ 60 % 60));//开始时间分
     var  startS24= checkTime(parseInt(Hours24% 60));//开始时间秒		
	}


    //当比赛开始的时候，将要结束的时候
    var ingH24 = parseInt(endtime) - parseInt(nowtime)/1000
    var ing1H24 = parseInt(nowtime)/1000 - parseInt(starttime)
    if(ingH24>0){
     var  ingH24_1= checkTime(parseInt(ingH24/ 60 / 60 %24));//开始时间时
     var  startM24_1= checkTime(parseInt(ingH24/ 60 % 60));//开始时间分
     var  startS24_1= checkTime(parseInt(ingH24 % 60));//开始时间分   	
    }




	if(startH24<=24 && parseInt(Hours24/ 60 / 60 %24)>=0){//如果开始时间还剩24小时的时候
		if(startH24 == '00'){
			if(startM24 == '00'){
return '<span class="item-time item-djs-time"><i></i>开始倒计时：'+startS24+'秒</span><span class="item-btn cRegistration">点击报名</span>'
		
			}else{
return '<span class="item-time item-djs-time"><i></i>开始倒计时：'+startM24+'分'+startS24+'秒</span><span class="item-btn cRegistration">点击报名</span>'
		
			}
		}else{
		return '<span class="item-time item-djs-time"><i></i>开始倒计时：'+startH24+'时'+startM24+'分'+startS24+'秒</span><span class="item-btn cRegistration">点击报名</span>'
			
		}
	    //retrun '比赛开始时间：'+startMo+'月'+startD+'日'+startH+'时'+startM+'分'
	}else if(startH24>24){//如果开始时间大于24小时的时候
		return '<span class="item-time"><i></i>比赛开始时间：'+startMo+'月'+startD+'日'+startH+':'+startM+'</span><span class="item-btn">点击报名</span>'

	}else if(ing1H24>0 && ingH24>0){//如果比赛开始到还没结束的时候
	   if(ingH24_1 == '00'){
	   	if(startM24_1 == '00'){
    return '<span class="item-time item-djs-time"><i></i>结束倒计时时间：'+startS24_1+'秒</span><span class="item-btn item-zbz-btn">比赛中</span>'	
	
	   	}else{
    return '<span class="item-time item-djs-time"><i></i>结束倒计时时间：'+startM24_1+'分'+startS24_1+'秒</span><span class="item-btn item-zbz-btn">比赛中</span>'	
	
	   	}
	   }else{
	   	    return '<span class="item-time item-djs-time"><i></i>结束倒计时时间：'+ingH24_1+'时'+startM24_1+'分'+startS24_1+'秒</span><span class="item-btn item-zbz-btn">比赛中</span>'	
	
	   }
	}else{//如果比赛结束了
		return '<span class="item-time"><i></i>比赛开始时间：'+startMo+'月'+startD+'日'+startH+':'+startM+'</span><span class="item-btn item-yjs-btn">已结束</span>'
	}
}
export const aaa2=(starttime,endtime)=>{
    console.log(starttime,endtime)
}
export const aaa1=(starttime,endtime)=>{
    aaa2(starttime,endtime)
   // setTimeout(aaa1(starttime,endtime),1000)
}


export const timeData1=(str)=>{
    var  startMo= checkTime(new Date(parseInt(str)*1000).getMonth()+1);//开始时间月
	var  startD= checkTime(new Date(parseInt(str)*1000).getDate());//开始时间日
	return startMo+'-'+startD
}

export const timeData2=(str)=>{
    var  startH= checkTime(new Date(parseInt(str)*1000).getHours());//开始时间时
	var  startH= checkTime(new Date(parseInt(str)*1000).getMinutes());//开始时间分
	return startH+':'+startH
}

export const timeData3=(str)=>{
	var  startMo= checkTime(new Date(parseInt(str)*1000).getMonth()+1);//开始时间月
	var  startD= checkTime(new Date(parseInt(str)*1000).getDate());//开始时间日
    var  startH= checkTime(new Date(parseInt(str)*1000).getHours());//开始时间时
	var  startM= checkTime(new Date(parseInt(str)*1000).getMinutes());//开始时间分
	return startMo+'月'+startD+'日'+startH+':'+startM
}
export const magicTime=(str)=>{
	var now = new Date().getTime();
	var length = parseInt(now/1000) - parseInt(str),result;
	if(length<60){
		result = "刚刚";
	}else if(length<3600){
		result = parseInt(length/60) + "分钟前";
	}else if(length<18000){
		result = parseInt(length/3600) + "小时前";
	}else if(length<86400){
		if(new Date(now).getDate() == new Date(parseInt(str)*1000).getDate()){
			result = "今天";
		}else{
			result = "昨天";
		}
	}else if(length<172800){
		result = "昨天";
	}else{
		result = dateFormat(parseInt(str));
	}
	return result;
}
export const  dateFormat=(time)=>{
	time = time*1000;
	var date = new Date(time);
	var min = date.getMinutes();
	return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+(min>9?min:("0"+min));
}

