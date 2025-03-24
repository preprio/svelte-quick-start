import prepr from '$lib/prepr'
import getPostBySlug from '$lib/queries/get-post-by-slug.js'

export async function load({ params }) {
    const response = await prepr(getPostBySlug, {slug: params.slug})

    const { data } = await response.json()

    return {
        post: data.Post
    }
}