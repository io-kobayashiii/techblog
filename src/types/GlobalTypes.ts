export type LayoutType = 'default' | 'article' | '404' | '500'

export type CategoryType = {
	id: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	revisedAt: string
	name: string
	slug: string
}

export type CategoriesType = CategoryType[]

export type ArticleType = {
	id: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	revisedAt: string
	title: string
	description: string
	body: string | null
	categories: CategoryType[]
}

export type ArticlesType = ArticleType[]
