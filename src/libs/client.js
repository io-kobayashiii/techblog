import { createClient } from 'microcms-js-sdk'

export const client = createClient({
	serviceDomain: 'for',
	apiKey: process.env.API_KEY,
})
