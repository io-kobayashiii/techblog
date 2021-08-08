export function fetchMicroCMS(endpointStrings) {
	let queryString = ''
	for(let i = 0; i < endpointStrings.length; i++) {
		i === 0 ? queryString = endpointStrings[0] : queryString += `/${endpointStrings[i]}`
	}
	const requestUrl = 'https://for.microcms.io/api/v1/' + queryString
	return fetch(requestUrl, { headers: { 'X-API-KEY': process.env.API_KEY } })
}
