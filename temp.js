const getEnglish = async (str) => {
	await fetch('https://translation.googleapis.com/language/translate/v2', {
		method: 'POST',
		body: {
			q: str,
			target: 'en',
	      		key: 'AIzaSyBc8KzDa4Y5wmf0AhIb7LWyXpmm_jaoMME'
		}
	})
}

var t = getEnglish("Humara payment ni ho pa rha h")
console.log(t)
