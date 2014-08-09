var countBs = function(word,name){
	var count = 0;
	for(var i=0; i<word.length; i++){
		if(word[i]===name){
			count++;
		}
	}
	return count;
}

console.log(countBs("CJcccccC","C"));