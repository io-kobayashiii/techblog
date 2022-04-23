class ApiRequests {
	baseUrl: string
	headers: {
		headers: {
			'X-API-KEY': string
		}
	}
	fetch: (path: string) => Promise<Response>
	constructor() {
		this.baseUrl = 'https://for.microcms.io/api/v1/'
		this.headers = { headers: { 'X-API-KEY': process.env.API_KEY } }
		this.fetch = (path: string) => {
			return fetch(this.baseUrl + path, this.headers)
		}
	}
	async article(id: string) {
		console.log(`log ::: ApiRequests.article`)
		const response = await this.fetch(`articles/${id}`)
		return response.json()
	}
	async articles() {
		console.log(`log ::: ApiRequests.articles`)
		const response = await this.fetch('articles')
		return response.json()
	}
	async categories() {
		console.log(`log ::: ApiRequests.categories`)
		const response = await this.fetch('categories')
		return response.json()
	}
}

const ApiRequestsInstance = new ApiRequests()
export default ApiRequestsInstance
