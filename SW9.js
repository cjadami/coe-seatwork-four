var LeapYear = function(leap){
 	if(leap%4===0){
 		if(leap%100===0){
 			if(leap%400===0){
 				console.log(leap+" is leap year");
 			}
 			else{
 				console.log(leap +" is not leap year");
 			}
 		}
 		else{
 			console.log(leap +" is leap year");	
 		}
 	}
 	else{
 		console.log(leap +" is not leap year");
 	}
 }

 LeapYear(2008);
 LeapYear(2002);