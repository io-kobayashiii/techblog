export function FetchMicroCMS(endpointStrings) {
	let queryString = ''
	for (let index in endpointStrings) {
		index == 0 ? (queryString = endpointStrings[0]) : (queryString += `/${endpointStrings[index]}`)
	}
	const requestUrl = 'https://for.microcms.io/api/v1/' + queryString
	return fetch(requestUrl, { headers: { 'X-API-KEY': process.env.API_KEY } })
}
