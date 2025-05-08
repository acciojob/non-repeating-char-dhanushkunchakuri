function firstNonRepeatedChar(str) {
 // Write your code here
	let hm={};
	for(let char of str){
		hm.set(char,(hm.get(char) || 0)+1);
	}
	for(let [key,value] of hm.entries()){
		if(value === 1){
			return `${key}`;
		}
	}
	return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
