

function blankInput(){

elementsForms = document.getElementsByTagName("form");
if(elementsForms!=null){
for (var intCounter = 0; intCounter < elementsForms.length; intCounter++)  {  
	blankInput2(elementsForms[intCounter]);
}
}


}

function blankInput2(currentForm){

elementsInputs = currentForm.getElementsByTagName("input");  
if(elementsInputs!=null){
for (var intCounter = 0; intCounter < elementsInputs.length; intCounter++)  {  
	if(elementsInputs[intCounter].value=='null'){
			elementsInputs[intCounter].value='';
	}
}
}

}


jQuery.fn.sysdateMax = function(){ 
    return this.each(function(){
    	var inp = jQuery(this).val();
    	
    	var convertInpDate = 
    		(inp.constructor === Date ? d :
	    	inp.constructor === Array ? new Date(d[0],d[1],d[2]) :
	    	inp.constructor === Number ? new Date(d) :
	    	inp.constructor === String ? new Date(d) :
	        typeof inp === "object" ? new Date(inp.year,inp.month,inp.date) :  NaN)
        		
	    var currentDate = new Date();
    	var day = currentDate.getDate();
    	var month = currentDate.getMonth() + 1;
    	var year = currentDate.getFullYear();
    	var sysdate = day + "/" + month + "/" + year;
    	var sysdateConv = new Date(sysdate);
    	
    	if(convertInpDate > sysdateConv){
    		jQuery(this).val( sysdate ); 
    	}else{
    		jQuery(this).val( jQuery(this).val() ); 
    	}
    })
};

jQuery.fn.ageFilter = function(){ 
    return this.each(function(){
    	var convertInpDate = 
    		(inp.constructor === Date ? d :
	    	inp.constructor === Array ? new Date(d[0],d[1],d[2]) :
	    	inp.constructor === Number ? new Date(d) :
	    	inp.constructor === String ? new Date(d) :
	        typeof inp === "object" ? new Date(inp.year,inp.month,inp.date) :  NaN)
	    
	    var currentDate = new Date();
    	var day = currentDate.getDate();
    	var month = currentDate.getMonth() + 1;
    	var year = currentDate.getFullYear();
    	var sysdate = day + "/" + month + "/" + year;
    	var sysdateConv = new Date(sysdate);
    	
    	var yearInp = convertInpDate.getFullYear();
    	var ageInYear = year - yearInp;
    	var yearRet = null;
    	if(ageInYear > 200){
    		yearRet = year - 200;
    	}else{
    		yearRet = yearInp;
    	}
    	
    	var monthInp = convertInpDate.getMonth();
    	var ageInMonth = month - monthInp;
    	var monthRet = null;
    	if(ageInMonth > 12){
    		monthRet = 12;
    	}else{
    		monthRet = monthInp;
    	}
    	
    	var dayInp = convertInpDate.getDate();
    	var ageInDay = day - dayInp;
    	var dayRet = null;
    	if(ageInDay > 31){
    		dayRet = 31;
    	}else{
    		dayRet = dayInp;
    	}
    	
    	var convertInpDate = dayRet + "/" + monthRet + "/" + yearRet;
    	
    	if(convertInpDate > sysdateConv){
    		jQuery(this).val( sysdate ); 
    	}else{
    		jQuery(this).val( convertInpDate ); 
    	}
    })
};

jQuery.fn.timeFilter = function(){ 
    return this.each(function(){
    	var delimiter = ':';
    	var index = 0;
    	var temp = jQuery(this).val();
    	var index = temp.indexOf(delimiter);
    	var hour, min = 0;
    	if(index > 0){
	    	hour = temp.substring(0, index);
	    	min = temp.substring(index + 1, temp.length);
    	}else{
    		var validTime = temp.substring(0,3);
    		hour = validTime.substring(0,1);
    		min = validTime.substring(2,3);
    	}
    	
    	if(parseInt(hour) > 12){
    		hour = 12;
    	}
    	
    	if(parseInt(min) > 59){
    		min = 59;
    	}
    	
    	var t = hour + delimiter + min; 
    	jQuery(this).val( t ); 
    })
};
