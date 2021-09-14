export type Article = {
	'id': string
	'createdAt': string
	'updatedAt': string
	'publishedAt': string
	'revisedAt': string
	'title': string
	'body': string | null
}

export type Articles = Article[]

export type ArticleList = {
	'contents': Article[] | null
	'totalCount': number
	'offset': number
	'limit': number
}

export type getStaticPropsArticles = () => Promise<{ props: { articles: Articles }}>
