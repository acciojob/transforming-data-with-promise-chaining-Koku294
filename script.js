document.getElementById("btn").onclick=function(){
	const input = document.getElementById("ip").value;
	const output= document.getElementById("output");
	const number=parseFloat("input");

	output.innerText="";

	if(isNaN(number)){
		output.innerText="Please enter a valid number";
		return;
	}
	
	new Promise((resolve)=>{
		setTimeout(()=>{
			output.innerText='Result: ${number}';
			resolve(number);
			
		},2000);
	})

	.then((result)=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			const newResult=result*2;
			output.innerText='Result: ${newResult}';
			resolve(newResult);
		},2000);
	});
	})
	.then((result)=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			const newResult=result*2;
			output.innerText='Result: ${newResult}';
			resolve(newResult);
		},2000);
	});
	})
	.then((result)=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			const newResult=result-3;
			output.innerText='Result: ${newResult}';
			resolve(newResult);
		},1000);
	});
	})
	.then((result)=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			const newResult=result/2;
			output.innerText='Result: ${newResult}';
			resolve(newResult);
		},1000);
	});
	})
	.then((result)=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			const finalResult=result+10;
			output.innerText='Final Result: ${finalResult}';
			resolve(finalResult);
		},1000);
	});
	});
	
};