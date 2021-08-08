export async function fetchByEndpoint(endpoint) {
	const requestUrl = process.env.BASE_URL + endpoint
	return await fetch(requestUrl, { headers: { 'X-API-KEY': process.env.API_KEY } })
}
