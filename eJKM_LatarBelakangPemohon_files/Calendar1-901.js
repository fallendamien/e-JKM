if(!Array.prototype.push)
{Array.prototype.push=function()
	{for(var i=0;i<arguments.length;i++)this[this.length]=arguments[i];};};
	
	function name_values($a){
	var $b=new Array();
	var rc="\235";
	var $a=$a.replace(/\\\;/g,rc);
	var $z=new RegExp("[a-zA-Z0-9]+\=[\<\>\/:#a-zA-Z0-9\-\+\., \235]+","gi");
	var y=$a.match($z);for(i=0;i<y.length;i++)
	{var s=y[i].split("=");s[1]=s[1].replace(rc,";");$b[i]="v_"+s[0];eval($b[i]+" = '"+s[1]+"'");};
	return $b;};

function chkVar($d)
{if(typeof(eval($d))=="number")
return true;
if(eval($d)&&eval($d)!="")
return true;else return false;};

function chkArg($e)
{if($e=="undefined"||$e==null||$e=="")
return false;else return true;};

function arrayElt($f,$g)
{var j=0;for(j=0;j<$f.length;j++)
	{if($f[j].toUpperCase()==$g.toUpperCase())
	return j;};
return "-1";};

function pad2($e)
{if(typeof $e=="number")
	return($e.toString().length<2)?"0"+$e:$e;
else if(typeof $e=="string")
		return($e.length<2)?("0"+$e):(""+$e);
	else return($e.toString().length<2)?"0"+$e:$e;};
var $h="";var $i="";

function onClickFn($j)
{var re=/pday/;$h=$i;$h=$h.replace(re,"'"+$j+"'");eval($h);};

function kdwn($k)
{if(event.keyCode==13)$k.onchange();
else return false;};

function Today()
{var d=new Date();
return((d.getMonth()+1)+"/"+d.getDate()+"/"+d.getFullYear());};

function dateAdd($l,$m,$n)
{var d=new Date($l);
var dv=d.valueOf();
var $o;
	if($n=="+")$o=dv+($m*(1000*60*60*24));
	else $o=dv-($m*(1000*60*60*24));
	var nd=new Date($o);
	return((nd.getMonth()+1)+"/"+nd.getDate()+"/"+nd.getFullYear());};

function IESplit(re,st)
{var $p;
var $q=new Array();
var $r;
while((x=re.exec(st))!=null)
{$q.push(st.substring(0,st.indexOf(x[1])));$q.push(x[1]);st=st.substr(st.indexOf(x[1])+x[1].length);};
return $q;};
var v_CloseOnSelect,v_AppendOrReplace,v_AppendChar,v_ReturnData;
var v_InlineX,v_InlineY,v_Title,v_CurrentDate,v_AllowWeekends;
var v_Resizable,v_Width,v_Height,v_SelectAfter,v_NSHierarchy;
var v_SelectBefore,v_CallFunction,v_PopupX,v_PopupY,v_Holidays;
var v_Nav,v_SmartNav,v_Fix,v_ShowFix,v_WeekStart,v_Weekends;
var $s,v_ShortNames,v_AllowHolidays;
var $t=new Array();
var $u=new Date();
var $v;
var $w;
var $x;
var $y,$z;
var cx,cy;
var x,y;
var $A,$B;
var $Z,$D;$E=(navigator.appName.indexOf("Netscape")!=-1)?true:false;
$F=(navigator.appName.indexOf("Microsoft")!=-1)?true:false;
$G=(document.getElementById)?true:false;
Calendar.Months=["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"];
Calendar.SMonths=["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ogs","Sep","Okt","Nov","Dis"];
Calendar.DOW=["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"];
Calendar.EMonths=["January","February","March","April","May","June","July","August","September","October","November","December"];
Calendar.EDOW=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
Calendar.DOMonth=[31,28,31,30,31,30,31,31,30,31,30,31];
Calendar.lDOMonth=[31,29,31,30,31,30,31,31,30,31,30,31];
Calendar.gInitText="Softricks.com Calendar";

function Calendar($H,$I,$J,$K,$L)
{if(($I==null)&&($J==null))return;if($I==null)
	{this.gMonthName=null;this.gMonth=null;this.gYearly=true;}
	else
	{this.gMonthName=Calendar.get_month($I,'F');
	this.gMonth=new Number($I);this.gYearly=false;};
	if($L==null)this.gType="POPUP";
		else this.gType=$L;this.CODE="";
		if(this.gType=="INLINE")
		{this.WHO="";this.INLINE="Calendar";}
			else this.WHO="window.opener.";this.gYear=$J;this.gFormat=$K;this.gReturnItem=$H;this.gTitle="Softricks.com Calendar";};
			Calendar.get_month=Calendar_get_month;
			Calendar.get_daysofmonth=Calendar_get_daysofmonth;
			Calendar.get_dow=Calendar_get_dow;
			Calendar.calc_month_year=Calendar_calc_month_year;
			Calendar.print=Calendar_print;
			Calendar.CreateCalendarLayer=Calendar_CreateCalendarLayer;
			Calendar.Close=Calendar_Close;
			Calendar.Lwwrite=Calendar_Lwwrite;
			Calendar.MoveTo=Calendar_MoveTo;
			Calendar.isWeekend=Calendar_isWeekend;
			Calendar.isHoliday=Calendar_isHoliday;
			Calendar.processDateData=Calendar_processDateData;
			Calendar.readDate=Calendar_readDate;

function Calendar_get_month($M,$N){if(!$N||$N=="E")return Calendar.EMonths[$M];
else return Calendar.Months[$M];};

function Calendar_get_dow($O){return Calendar.DOW[$O];};

function Calendar_get_daysofmonth($M,$J){if(($J%4)==0)
{if(($J%100)==0&&($J%400)!=0)return Calendar.DOMonth[$M];
return Calendar.lDOMonth[$M];}else return Calendar.DOMonth[$M];};

function Calendar_calc_month_year($P,$Q,$R)
{var $S=new Array();if($R==-1){if($P==0){$S[0]=11;$S[1]=parseInt($Q,10)-1;}
else{$S[0]=parseInt($P,10)-1;$S[1]=parseInt($Q,10);}}
else if($R==1)
{if($P==11)
{$S[0]=0;$S[1]=parseInt($Q,10)+1;}
else{$S[0]=parseInt($P,10)+1;$S[1]=parseInt($Q,10);}};
return $S;};

function Calendar_print(){$v.print();};

function Calendar_isWeekend($j)
{var i;
for(i=0;i<$t.length;i++)
{if(parseInt($j)==parseInt($t[i]))return true;};
return false;};

function Calendar_isHoliday($j)
{var i=arrayElt($s,$j);
if(parseInt(i)>-1)return true;return false;};

function Calendar_processDateData($T,$U)
{var m;var td=Today();var $V=new RegExp("(Today)(([\\+\\-])([0-9]+))?","i");
if((m=$T.match($V))!=null)
{if(m[1].toUpperCase()=="TODAY"&&m[0].length>5)return dateAdd(td,m[4],m[3]);
else if(m[1].toUpperCase()=="TODAY")return td;}
else{return Calendar.readDate($T,$U);}};

function Calendar_readDate($l,$W)
{var re="";var $X=new Array();$X.push("Dummy");var $Y="";var $Z="";var $00="";
for(i=0;i<12;i++){$00+=Calendar.Months[i]+((i<11)?"|":"");$Z+=Calendar.SMonths[i]+((i<11)?"|":"");};
for(i=0;i<7;i++)$Y+=Calendar.DOW[i]+((i<7)?"|":"");
var $01=IESplit(new RegExp("(DD|MM|MONTH|MON|YYYY|YY|DOW)"),$W.toUpperCase());
for(i=0;i<$01.length;i++)
{switch($01[i].toUpperCase())
{case "DD":re+="(\\d{1,2})";$X.push($01[i]);break;
case "DOW":re+="("+$Y+")";$X.push($01[i]);break;
case "MM":re+="(\\d{1,2})";$X.push($01[i]);break;
case "MON":re+="("+$Z+")";$X.push($01[i]);break;
case "MONTH":re+="("+$00+")";$X.push($01[i]);break;
case "YY":re+="(\\d{1,2})";$X.push($01[i]);break;
case "YYYY":re+="(\\d{4})";$X.push($01[i]);break;
default:re+=$01[i];}};
var $02,$03,$04;var $05=new RegExp(re,"i");
if($05.test($l))
{var ma=$l.match($05);
for(i=0;i<ma.length;i++)
{switch($X[i])
{case "DD":$02=parseInt(ma[i],10);break;
case "MM":$03=parseInt(ma[i],10);break;
case "MON":$03=parseInt(arrayElt(Calendar.SMonths,ma[i]),10)+1;break;
case "MONTH":$03=parseInt(arrayElt(Calendar.Months,ma[i]),10)+1;break;
case "YY":$06=parseInt(ma[i],10);$04=(($06>50)?($06+1900):($06+2000));break;
case "YYYY":$04=parseInt(ma[i],10);break;}}};
if(!($02||$03||$04))return null;
else return(new Date($03+"/"+$02+"/"+$04));};

function Calendar_Close($07,$08)
{if($07=="POPUP")$v.close();
if($07=="INLINE")Calendar.Lwwrite(Calendar.gInitText,$08);$v=null;};
new Calendar();Calendar.prototype.getMonthlyCalendarCode=function()
{var $09="";var $0a="";var $0b="";
$09=$09+"<link href='../css/body.css' rel='stylesheet' type='text/css'><TABLE WIDTH='"+(v_Width-30)+"' CLASS='calander_table' CELLPADDING=0 CELLSPACING=0>";
$0a=this.cal_header();
$0b=this.cal_data();
$09=$09+$0a+$0b;$09=$09+"</TABLE>";
return $09;};
Calendar.prototype.onclickfn=function()
{var $0z=this.WHO+((this.gType=="POPUP")?"document."+v_NSHierarchy:"window.document."+v_NSHierarchy)+this.gReturnItem+".value";
var $0d=(this.returnMode=="Replace")?" = ":" += ";
var $0e="apchar = ''"+((this.returnMode=="Replace")?";":" + ")+"(("+$0z+" == '') ? '' : '"+this.appendChar+"');\n"+$0z+$0d+"apchar + pday;\n";return $0e;};Calendar.prototype.showSmartNavBar=function(){var $0f="<table border=0 class='innerColor'><tr><td rowspan=2>";$0f+="<select name='selMonth' class='monthEntryStyle' onchange=\""+this.WHO+"Build("+"'"+this.gReturnItem+"', document.frmCal.selMonth.selectedIndex, '"+this.gYear+"', '"+this.gFormat+"', '"+this.gType+"');\">\n";for(i=0;i<12;i++){$0f+="<option value=\"" + i + "\" ";if(parseInt(this.gMonth)==i)$0f+="selected";$0f+=" CLASS='monthEntryStyle'>"+Calendar.Months[i]+"</option>\n";};$0f+="<\/select>\n</td><td rowspan=2>";$0f+="<input name=\"cy\" size=4 maxlength=4 value=\""+this.gYear+"\" onchange=\""+"javascript:"+this.WHO+"Build("+"'"+this.gReturnItem+"', '"+this.gMonth+"', document.frmCal.cy.value, '"+this.gFormat+"', '"+this.gType+"');\" "+"onkeydown=\"javascript:kdwn(this);\" "+"class='yearEntryStyle'>\n";$0f+="</td><td>"+"<A HREF=\"javascript:void(0);\" onClick=\"document.frmCal.cy.value++;document.frmCal.cy.onchange();return false;\" "+"class='yearArrowStyle'><img src='../images/cal_up.gif' border=0></A>"+"</td></tr><tr><td>"+"<A HREF=\"javascript:void(0);\" onClick=\"document.frmCal.cy.value--;document.frmCal.cy.onchange();return false;\" "+"class='yearArrowStyle'><img src='../images/cal_down.gif' border=0></A>"+"</td></tr></table>";this.wwrite($0f);};Calendar.prototype.show=function(){var $09="";this.wwrite("<html>");this.wwrite("<head><title>Calendar:"+this.gTitle+"</title>");if(this.gType=="POPUP"){this.wwrite("<LINK REL=stylesheet TYPE=\"text/css\" HREF=\"file:///D|/Apache Group/Tomcat 4.1/webapps/sis/css/body.css\">");this.wwrite("<script language='javascript'>"+"function onClickFn(pday) {\n"+this.onclickfn()+"}\n<\/script>");}else $i=this.onclickfn();if(v_SmartNav=="Yes"&&this.gType=="POPUP")this.wwrite("<script language='javascript1.2'>\n"+"function kdwn(pthis) {"+"if (event.keyCode == 13) pthis.onchange(); else return false;};\n"+"</script>");this.wwrite("</head>");this.wwrite("<body onload=\"window.focus();\">");this.wwrite("<form name=\"frmCal\" onsubmit=\"return false;\">");this.wwrite("<TABLE WIDTH='"+(v_Width-30)+"' BORDER=0 CELLPADDING=0 CELLSPACING=2 CLASS='borderColor'><TR><TD>"+"<TABLE BORDER=0 WIDTH='100%' CELLPADDING=1 CELLSPACING=0 CLASS='innerColor'>"+"<TR><TD CLASS='titleStyle'>"+this.gTitle+"</TD><TD CLASS='titleStyle' ALIGN=RIGHT>"+"<A HREF='javascript:"+this.WHO+"Calendar.Close(\"" + this.gType + "\", \"" + this.INLINE + "\");' "+"CLASS='titleStyle'>"+"x</A></TD></TR><TR>");this.wwrite("<TD CLASS='headerStyle'>"+this.gMonthName+" "+this.gYear+"</TD>");this.wwrite("<TD CLASS='headerStyle' ALIGN=RIGHT>"+((v_ShowFix=="No")?"":("Fix"+"<INPUT TYPE=CHECKBOX NAME=fixCheck "+((v_Fix=="Yes")?"CHECKED ":"")+"onClick=\""+((this.gType=="POPUP")?"alert('Fixing Window')":"fixCal(this.checked);")+"\">"))+"</TD></TR><TR><TD COLSPAN=2 CLASS='headerStyle'>");if(v_SmartNav=="Yes")this.showSmartNavBar();var $0g=Calendar.calc_month_year(this.gMonth,this.gYear,-1);var $0h=$0g[0];var $0i=$0g[1];var $0j=Calendar.calc_month_year(this.gMonth,this.gYear,1);var $0k=$0j[0];var $0l=$0j[1];if(v_Nav=="Yes"){this.wwrite("<TABLE WIDTH='"+(v_Width-30)+"' BORDER=1 CELLSPACING=0 CELLPADDING=0 CLASS='navStyle'><TR><TD ALIGN=center>");this.wwrite("[<A HREF=\""+"javascript:"+this.WHO+"Build("+"'"+this.gReturnItem+"', '"+this.gMonth+"', '"+(parseInt(this.gYear,10)-1)+"', '"+this.gFormat+"', '"+this.gType+"'"+");\"><<<\/A>]</TD><TD ALIGN=center>");this.wwrite("[<A HREF=\""+"javascript:"+this.WHO+"Build("+"'"+this.gReturnItem+"', '"+$0h+"', '"+$0i+"', '"+this.gFormat+"', '"+this.gType+"'"+");\"><<\/A>]</TD><TD ALIGN=center>");this.wwrite("[<A HREF=\"javascript:window.print();\">"+((v_ShortNames=="Yes")?"P":"Print")+"</A>]</TD><TD ALIGN=center>");this.wwrite("[<A HREF=\""+"javascript:"+this.WHO+"Build("+"'"+this.gReturnItem+"', '"+$u.getMonth()+"', '"+$u.getFullYear()+"', '"+this.gFormat+"', '"+this.gType+"'"+");\">"+((v_ShortNames=="Yes")?"*":"Today")+"<\/A>]</TD><TD ALIGN=center>");this.wwrite("[<A HREF=\""+"javascript:"+this.WHO+"Build("+"'"+this.gReturnItem+"', '"+$0k+"', '"+$0l+"', '"+this.gFormat+"', '"+this.gType+"'"+");\">><\/A>]</TD><TD ALIGN=center>");this.wwrite("[<A HREF=\""+"javascript:"+this.WHO+"Build("+"'"+this.gReturnItem+"', '"+this.gMonth+"', '"+(parseInt(this.gYear,10)+1)+"', '"+this.gFormat+"', '"+this.gType+"'"+");\">>><\/A>]</TD></TR></TABLE>");}$09=this.getMonthlyCalendarCode();this.wwrite($09);this.wwrite("</TD></TR></TABLE></TD></TR></TABLE>");this.wwrite("</form>");this.wwrite("</body></html>");if(this.gType=="POPUP"){$v.document.open("text/html","replace");$v.document.writeln(this.CODE);$v.document.close();}if(this.gType=="INLINE")Calendar.Lwwrite(this.CODE,this.INLINE);};Calendar.prototype.cal_header=function(){var $09="";var i=0,j=0;$09=$09+"<TR>";for(i=v_WeekStart,j=0;j<7;i++,j++,i=i%7)$09=$09+"<TD WIDTH='"+((i==6)?16:14)+"%' CLASS='weekdayHeaderStyle'>"+((v_ShortNames=="Yes")?Calendar.DOW[i].substring(0,1):Calendar.DOW[i].substring(0,3))+"</TD>";$09=$09+"</TR>";return $09;};Calendar.prototype.cal_data=function(){var $0m=new Date();$0m.setDate(1);$0m.setMonth(this.gMonth);$0m.setFullYear(this.gYear);var $0n=$0m.getDay();var $0o=1;var $0p=Calendar.get_daysofmonth(this.gMonth,this.gYear);var $0q=0,j=0;var $09="";if(this.closeable){$0r=((this.gType=="POPUP")?"window.close();":"");$0s="Calendar.Close(\"" + this.gType + "\", \"" + this.INLINE + "\"); ";}else{$0r="";$0s="void(0);' ";}var $0z=this.WHO+((this.gType=="POPUP")?"document.":"window.document.")+this.gReturnItem+".value";$09=$09+"<TR>";for(j=v_WeekStart,i=0;j!=$0n;j++,i++,j=j%7){$09=$09+"<TD WIDTH='14%' "+this.applySpecialStyle(0,j,"9999")+">&nbsp;</TD>";}for(j=$0n;i<7;j++,i++,j=j%7){$09=this.createDates($09,$0m,$0o,j);$0o=$0o+1;}$09=$09+"</TR>";for(k=2;k<7;k++){$09=$09+"<TR>";for(j=v_WeekStart,i=0;i<7;j++,i++,j=j%7){$09=this.createDates($09,$0m,$0o,j);$0o=$0o+1;if($0o>$0p){$0q=1;break;}}if(i==6)$09=$09+"</TR>";if($0q==1)break;}for(m=1;m<(7-i);m++){j=(j+1)%7;if(this.gYearly)$09=$09+"<TD WIDTH='14%'"+this.applySpecialStyle(0,j,"9999",1)+">&nbsp;</TD>";else $09=$09+"<TD WIDTH='14%' "+this.applySpecialStyle(0,j,"9999",1)+">"+m+"</TD>";}return $09;};Calendar.prototype.createDates=function($0t,$0u,$0v,pj){var $0w="";var $0x="";var $0y="";$0u.setDate($0v);$0y=String(pad2(this.gMonth+1))+String(pad2($0v));if((this.gAllowWeekends=="No"&&Calendar.isWeekend(pj))||($0u<v_SelectAfter||$0u>v_SelectBefore)||(this.gAllowHolidays=="No"&&Calendar.isHoliday($0y))){$0w="";$0x="";}else{$0w="<A HREF='javascript:"+((this.CallFunction!="")?(this.WHO+this.CallFunction+"();"):"")+$0s+"' "+"onClick=\"onClickFn('"+((this.returnData=="Date")?this.format_data($0v):this.format_dow($0v))+"');"+((this.CallFunction!="")?(this.WHO+this.CallFunction+"();"):"")+$0r+"return true;"+"\" "+(Calendar.isHoliday($0y)?"CLASS='holidayLinkStyle'":"CLASS='linkStyle'")+">";$0x="<\/A>";}$0t=$0t+"<TD WIDTH='14%' "+this.applySpecialStyle($0v,pj,$0y)+">"+$0w+$0v+$0x+"</TD>";return $0t;};Calendar.prototype.applySpecialStyle=function($0z,$0A,$0B,$0Z){var $0D;if(this.gCurrentDate!="NONE")$0D=this.gCurrentDate;else $0D=$u;var $0E=$0D.getDate();var $0F=$0D.getMonth();var $0G=$0D.getFullYear();if($0B!="9999"&&Calendar.isHoliday($0B))return("CLASS='holidayStyle'");if(parseInt($0z)==$0E&&parseInt(this.gMonth)==$0F&&parseInt(this.gYear)==$0G)return "CLASS='todayStyle'";if(Calendar.isWeekend($0A))return($0Z==1?"CLASS='dimWeekendStyle'":"CLASS='weekendStyle'");if($0Z==1)return "CLASS='dimStyle'";else return "CLASS='normalStyle'";};Calendar.prototype.format_data=function($0H){var $0I=this.gFormat;var $0J=1+this.gMonth;$0J=($0J.toString().length<2)?"0"+$0J:$0J;var $0K=Calendar.get_month(this.gMonth,'F').substr(0,3).toUpperCase();var $0L=Calendar.get_month(this.gMonth,'F').toUpperCase();var $0M=new String(this.gYear);var $0N=new String(this.gYear.substr(2,2));var $0O=($0H.toString().length<2)?"0"+$0H:$0H;var $0P=Calendar.get_dow(new Date($0J+"/"+$0O+"/"+$0M).getDay());if((new RegExp("YYYY","ig")).test($0I))$0I=$0I.replace(/YYYY/ig,$0M);else if((new RegExp("YY","ig")).test($0I))$0I=$0I.replace(/YY/ig,$0N);if((new RegExp("DD","ig")).test($0I))$0I=$0I.replace(/DD/ig,$0O);if((new RegExp("MM","ig")).test($0I))$0I=$0I.replace(/MM/ig,$0J);if((new RegExp("MONTH","ig")).test($0I))$0I=$0I.replace(/MONTH/ig,$0L);else if((new RegExp("MON","ig")).test($0I))$0I=$0I.replace(/MON/ig,$0K);if((new RegExp("DOW","ig")).test($0I))$0I=$0I.replace(/DOW/ig,$0P);return $0I;};Calendar.prototype.format_dow=function($0H){var $0I;var $0J=1+this.gMonth;$0J=($0J.toString().length<2)?"0"+$0J:$0J;var $0K=Calendar.get_month(this.gMonth,'F').substr(0,3).toUpperCase();var $0L=Calendar.get_month(this.gMonth,'F').toUpperCase();var $0M=new String(this.gYear);var $0O=($0H.toString().length<2)?"0"+$0H:$0H;var $0m=new Date($0J+"\/"+$0O+"\/"+$0M);$0I=Calendar.get_dow($0m.getDay());return $0I;};Calendar.prototype.wwrite=function($0Q){this.CODE+=$0Q;};function Calendar_CreateCalendarLayer($0R,$0S,pInitText){if(pInitText==null)pInitText=Calendar.gInitText;else Calendar.gInitText=pInitText;v_InlineX=$0R;v_InlineY=$0S;var Calendar_ID="Calendar";if($F){document.writeln("<DIV ID=\"" + Calendar_ID + "\" STYLE=\""+"position:absolute;zIndex:300;top:"+$0S+"px;left:"+$0R+"px;"+"\">" + pInitText + "<\/DIV>");}else if($G){document.writeln("<DIV ID=\"" + Calendar_ID + "\" STYLE=\""+"position:absolute;zIndex:300;top:"+$0S+"px;left:"+$0R+"px;"+"\">" + pInitText + "<\/DIV>");}else if($E){document.writeln("<DIV ID=\"" + Calendar_ID + "\" STYLE=\""+"position:absolute;zIndex:300;top:"+$0S+"px;left:"+$0R+"px;"+"\">" + pInitText + "<\/DIV>");}}function Calendar_Lwwrite($0T,$08){if($F){document.all[$08].innerHTML=$0T;}else if($G){$0U=document.createRange();el=document.getElementById($08);$0U.setStartBefore(el);$0V=$0U.createContextualFragment($0T);while(el.hasChildNodes())el.removeChild(el.lastChild);el.appendChild($0V);}else if($E){var $0W=document.layers[$08].document;$0W.open();$0W.write($0T);$0W.close();}}function Calendar_MoveTo(pX,pY,$08){if($F){document.all[$08].style.top=pY;document.all[$08].style.left=pX;}else if($G){document.getElementById($08).style.top=pY;document.getElementById($08).style.left=pX;}else if($E){document.layers[$08].top=pY;document.layers[$08].left=pX;}}$Z=false;$D=false;

function fixCal($0X)
{if($0X)initEvents(0);else initEvents(1);}

function click(e){x=($F)?(event.x+document.body.scrollLeft):e.pageX;y=($F)?(event.y+document.body.scrollTop):e.pageY;cx=($F)?(x-parseInt($0Y.left)):(($G)?(x-parseInt($0Y.left)):(x-$w.x));cy=($F)?(y-parseInt($0Y.top)):(($G)?(y-parseInt($0Y.top)):(y-$w.y));$D=false;$Z=true;}function unclick(e){$D=true;$Z=false;}function handleMove(e){$y=($F)?(event.x+document.body.scrollLeft):e.pageX;$z=($F)?(event.y+document.body.scrollTop):e.pageY;if($Z){v_InlineX=$y-cx;v_InlineY=$z-cy;MoveLayer($y-cx,$z-cy,"myLayer");}}function initEvents($0Z){if($0Z==1){if($E&&!$G)$w.captureEvents(Event.MOUSEDOWN|Event.MOUSEUP|Event.MOUSEMOVE);if($G&&$E){$w.addEventListener("mousemove",handleMove,true);$w.addEventListener("mousedown",click,true);$w.addEventListener("mouseup",unclick,true);}else{$w.onmousemove=handleMove;$w.onmousedown=click;$w.onmouseup=unclick;}}else{if($E&&!$G)$w.releaseEvents(Event.MOUSEDOWN|Event.MOUSEUP|Event.MOUSEMOVE);if($G&&$E){$w.removeEventListener("mousemove",handleMove,true);$w.removeEventListener("mousedown",click,true);$w.removeEventListener("mouseup",unclick,true);}else{$w.onmousemove="";$w.onmousedown="";$w.onmouseup="";}}}function MoveLayer(pX,pY){$0Y.top=pY;$0Y.left=pX;}function drag_init($10){if($F){$0Y=document.all[$10].style;$w=document.all[$10];}else if($G){$0Y=document.getElementById($10).style;$w=document.getElementById($10);}else if($E){$0Y=document.layers[$10];$w=document.layers[$10];}if(v_ShowFix=="Yes"&&v_Fix=="Yes")initEvents(0);else initEvents(1);}function CalResize(){v_Height=$v.innerHeight;v_Width=$v.innerWidth;}function Build($H,$I,$J,$K,$L,$11,$12){if($12&&$12!=""){v_Resizable=undefined;v_SelectAfter=undefined;v_SelectBefore=undefined;v_NSHierarchy=undefined;v_CallFunction=undefined;v_Nav=undefined;v_ShowFix=undefined;v_SmartNav=undefined;v_Fix=undefined;v_WeekStart=undefined;v_Width=undefined;v_Height=undefined;v_ShortNames=undefined;v_Holidays=undefined;}if($J==""||($J!=""&&isNaN($J))){window.status="Invalid Year";return true;}else window.status="";if($11&&$11!=""){v_CurrentDate="";var $13=name_values($11);var $0z="document."+$H+".value";var $14=eval($0z);if($14!="")v_CurrentDate=$14;v_Weekends=chkVar("v_Weekends")?v_Weekends:"06";for(i=0;i<v_Weekends.length;i++)$t.push(parseInt(v_Weekends.charAt(i)));}else v_CurrentDate="";var $15;if(chkVar("v_CurrentDate")){if(v_CurrentDate.charAt(0)=='<'&&v_CurrentDate.charAt(v_CurrentDate.length-1)=='>'){var $16="document."+v_CurrentDate.substring(1,v_CurrentDate.length-1)+".value";v_CurrentDate=eval($16);}if(Calendar.processDateData(v_CurrentDate,$K)==null)$15=new Date();else $15=new Date(Calendar.processDateData(v_CurrentDate,$K));$I=$15.getMonth();$J=$15.getFullYear().toString();}else $15="NONE";v_Resizable=chkVar("v_Resizable")?v_Resizable:"No";v_SelectAfter=(typeof v_SelectAfter=="string")?new Date(Calendar.processDateData(v_SelectAfter,$K)):v_SelectAfter;v_SelectBefore=(typeof v_SelectBefore=="string")?new Date(Calendar.processDateData(v_SelectBefore,$K)):v_SelectBefore;v_NSHierarchy=$E?(chkVar("v_NSHierarchy")?(v_NSHierarchy+".document."):""):"";v_CallFunction=chkVar("v_CallFunction")?v_CallFunction:"";v_Nav=chkVar("v_Nav")?v_Nav:"Yes";v_SmartNav=chkVar("v_SmartNav")?v_SmartNav:"No";v_Fix=chkVar("v_Fix")?v_Fix:"Yes";v_ShowFix=chkVar("v_ShowFix")?v_ShowFix:"No";v_ShortNames=chkVar("v_ShortNames")?v_ShortNames:"No";v_WeekStart=chkVar("v_WeekStart")?parseInt(v_WeekStart):1;$s=chkVar("v_Holidays")?v_Holidays.split(","):"";var $17,$18;v_Width=chkVar("v_Width")?v_Width:260;v_Height=chkVar("v_Height")?v_Height:250;if($L=="POPUP"){$18=chkVar("v_Width")?v_Width:260;if($F)$17=chkVar("v_Height")?v_Height:250;else if($E)$17=chkVar("v_Height")?v_Height:250;if(v_SmartNav=="Yes")$17+=30;v_PopupX=chkVar("v_PopupX")?v_PopupX:-1;v_PopupY=chkVar("v_PopupY")?v_PopupY:-1;if(v_PopupX>=0&&v_PopupY>=0){if(!$v||$v.closed)$v=window.open("","Calendar","width="+$18+",height="+$17+",status=no,dependent=yes,resizable="+v_Resizable+",screenX="+v_PopupX+",screenY="+v_PopupY+",left="+v_PopupX+",top="+v_PopupY);}else{if(!$v||$v.closed)$v=window.open("","Calendar","width="+$18+",height="+$17+",status=no,dependent=yes,resizable="+v_Resizable);}$v.opener=self;if($E&&!$G){$v.captureEvents(Event.RESIZE);}$v.onResize=CalResize;}$19=new Calendar($H,$I,$J,$K,$L);$19.gCurrentDate=$15;$19.gAllowWeekends=(chkVar("v_AllowWeekends")&&v_AllowWeekends=="Yes")?"Yes":"No";$19.gAllowHolidays=(chkVar("v_AllowHolidays")&&v_AllowHolidays=="No")?"No":"Yes";$19.closeable=chkVar("v_CloseOnSelect")?((v_CloseOnSelect=="Yes")?true:false):true;$19.returnMode=chkVar("v_AppendOrReplace")?v_AppendOrReplace:"Replace";$19.returnData=chkVar("v_ReturnData")?v_ReturnData:"Date";$19.appendChar=($19.returnMode=="Append")?chkVar("v_AppendChar")?v_AppendChar:";":"";$19.CallFunction=chkVar("v_CallFunction")?v_CallFunction:"";$19.InlineX=chkVar("v_InlineX")?v_InlineX:100;$19.InlineY=chkVar("v_InlineY")?v_InlineY:100;if($19.gType=="INLINE"){Calendar.MoveTo($19.InlineX,$19.InlineY,$19.INLINE);}$19.gTitle=v_Title?v_Title:$19.gMonthName+"/"+$19.gYear;$19.fontface="Arial";if($19.gYearly)$19.showY();else $19.show();if($19.gType=="INLINE"){drag_init($19.INLINE);}}

function show_calendar_ori()
{$H=arguments[0];
if(!chkArg(arguments[1]))$I=new String($u.getMonth());
else $I=(typeof(arguments[1])=="number")?arguments[1].toString():((arguments[1]=="")?new String($u.getMonth()):arguments[1]);if(!chkArg(arguments[2]))$J=new String($u.getFullYear().toString());
else $J=(typeof(arguments[2])=="number")?arguments[2].toString():arguments[2];if(!chkArg(arguments[3]))$K="DD/MM/YYYY";
else $K=(typeof(arguments[3])=="string")?arguments[3]:"DD/MM/YYYY";if(!chkArg(arguments[4]))$L="POPUP";
else $L=(typeof(arguments[4])=="string"&&(arguments[4]=="POPUP"||arguments[4]=="INLINE"))?arguments[4]:"POPUP";if(!chkArg(arguments[5]))$11="CloseOnSelect=Yes;AppendOrReplace=Replace;AppendChar=';';ReturnData=Date;Title=Please Select Date;AllowWeekends=Yes;Resizable=No";
else $11=((typeof(arguments[5])=="string")?arguments[5]:"CloseOnSelect=Yes;AppendOrReplace=Replace;AppendChar=';';ReturnData=Date;Title=Please Select Date;AllowWeekends=Yes;Resizable=No");Build($H,$I,$J,$K,$L,$11,1);}Calendar.prototype.showY=function()
{var $09="";var i;var vr,vc,vx,vy;var $1a=285;var $1b=200;var $1z=10;var $1d;if($F)$1d=75;
else if($G)$1d=25;
else if($E)$1d=25;
this.wwrite("<html>");
this.wwrite("<head><title>Calendar</title>");
this.wwrite("<style type='text/css'>\n<!--");
for(i=0;i<12;i++){vc=i%3;
if(i>=0&&i<=2)vr=0;
if(i>=3&&i<=5)vr=1;if(i>=6&&i<=8)vr=2;if(i>=9&&i<=11)vr=3;vx=parseInt($1a*vc)+$1z;vy=parseInt($1b*vr)+$1d;
this.wwrite(".lclass"+i+" {position:absolute;top:"+vy+";left:"+vx+";}");}
this.wwrite("-->\n</style>");
if(this.gType=="POPUP")this.wwrite("<script language='javascript'>"+"function onClickFn(pday) {\n"+this.onclickfn()+"}\n<\/script>");
else $i=this.onclickfn();this.wwrite("</head>");
this.wwrite("<FONT FACE='"+this.fontface+"' SIZE=2><B>");
this.wwrite("Year : "+this.gYear);this.wwrite("</B><BR>");var $0i=parseInt(this.gYear,10)-1;var $0l=parseInt(this.gYear,10)+1;this.wwrite("<TABLE WIDTH='"+(v_Width-30)+"' BORDER=1 CELLSPACING=0 CELLPADDING=0 BGCOLOR='#e0e0e0'><TR><TD ALIGN=center>");this.wwrite("[<A HREF=\""+"javascript:window.opener.Build("+"'"+this.gReturnItem+"', null, '"+$0i+"', '"+this.gFormat+"'"+");"+"\" alt='Prev Year'><<<\/A>]</TD><TD ALIGN=center>");this.wwrite("[<A HREF=\"javascript:window.print();\">Print</A>]</TD><TD ALIGN=center>");this.wwrite("[<A HREF=\""+"javascript:window.opener.Build("+"'"+this.gReturnItem+"', null, '"+$0l+"', '"+this.gFormat+"'"+");"+"\">>><\/A>]</TD></TR></TABLE><BR>");var j;for(i=11;i>=0;i--){if($F)this.wwrite("<DIV ID=\"layer" + i + "\" CLASS=\"lclass" + i + "\">");else if($G)this.wwrite("<DIV ID=\"layer" + i + "\" CLASS=\"lclass" + i + "\">");else if($E)this.wwrite("<LAYER ID=\"layer" + i + "\" CLASS=\"lclass" + i + "\">");this.gMonth=i;this.gMonthName=Calendar.get_month(this.gMonth,'F');$09=this.getMonthlyCalendarCode();this.wwrite(this.gMonthName+"/"+this.gYear+"<BR>");this.wwrite($09);if($F)this.wwrite("</DIV>");else if($G)this.wwrite("</DIV>");else if($E)this.wwrite("</LAYER>");};this.wwrite("</font><BR></body></html>");$v.document.open();$v.document.writeln(this.CODE);$v.document.close();};function show_yearly_calendar($H,$J,$K){if($J==null||$J=="")$J=new String($u.getFullYear().toString());else $J=(typeof($J)=="number")?$J.toString():$J;if($K==null||$K=="")$K="DD/MM/YYYY";var $v=window.open("","Calendar","scrollbars=yes");$v.opener=self;Build($H,null,$J,$K,"POPUP");}

function show_calendar(nm,fnc){
//alert('heheh');
var fncAfter="";
if(fnc!=null){
if(fnc.length>0){
	fncAfter = "CallFunction="+fnc+";";
}
}
show_calendar_ori(nm,null,null,null,null,'Title=Kalendar;SmartNav=Yes;Nav=No;Language=0;AllowWeekends=Yes;'+fncAfter);
}