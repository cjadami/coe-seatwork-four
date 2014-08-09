for (var i = 1; i < 100; i = i + 1) {
	if(i%3 === 0 && i%5 === 0){
		console.log("Computer Engineering");

	}else if(i%3 === 0 || i%5 === 0){
		if(i%3 === 0){
			console.log("Computer");
		}else{
			console.log("Engineering");
		}

	}else

	console.log(i);
}