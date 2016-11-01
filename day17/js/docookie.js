function setcookie(name,value,n){
			var d=new Date()
			d.setDate(d.getDate()+n)
			document.cookie=name+"="+value+";expires="+d+";path=/";
			console.log("set cookie is ok")
		}
function getcookie(name){
			var arr=document.cookie.split("; ");
			var n;
			for(var i=0;i<arr.length;i++){
				if(arr[i].indexOf(name!=-1)){
					n=i;
					break;
				}
			}
			return arr[n].split("=")[1];
			
}
function delcookie(name,path){
	        var d=new Date();
	        
	
}
