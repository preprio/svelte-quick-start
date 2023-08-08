import prepr from '$lib/prepr'
import getArticleDetail from '$lib/queries/get-article-detail'

export async function load({ params }) {
    const response = await prepr(getArticleDetail, {slug: params.slug})

    const { data } = await response.json()

    return {
        article: data.Article
    }
}