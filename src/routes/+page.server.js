import prepr from '$lib/prepr'
import GetArticles from '$lib/queries/get-articles'

export async function load() {
    const response = await prepr(GetArticles)

    const { data } = await response.json()
    const { items } = data.Articles

    return {
        articles: items
    }
}