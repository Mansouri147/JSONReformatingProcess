let i =  (1 / 4) % 1

function objectToArray(obj) {
	return Object.keys(obj).map((key, index)=> {		
					value = obj[key]
		res = [...res, [key, value]]
	})
	
}