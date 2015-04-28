function confirm_action(url,str){ 
var msg = "Adakah anda pasti untuk "+
	"hapus rekod ?\n"+
	str;
if (confirm(msg)){ 
 window.location=url;
 
} 
} 
