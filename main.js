var p1, p2, n1;
var count =0;

function addDetail(){
	
	p1 = document.getElementById("pswd1").value;
	
	p2 = document.getElementById("pswd2").value;
	n1 = document.getElementById("name1").value;
	
	if((p1==p2)&& (p1!="")){
	localStorage.setItem("name1",n1);



	localStorage.setItem("pswd1",p1);
	window.alert("Password Saved. Check your local storage")	
		}
	else{
		document.getElementById("p1").innerHTML="password does't match";
		count =count+1;
		document.getElementById("divCount").innerHTML="Attempts: "+count;
		if(count==3){
			count=0;
			document.getElementById("divCount").innerHTML="Attempts Exhausted";
			document.getElementById("loginButton").style.display="none";
			

		}
	}
}



