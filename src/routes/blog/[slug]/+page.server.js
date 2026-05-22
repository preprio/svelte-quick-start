import { error } from '@sveltejs/kit'
import prepr from '$lib/prepr'
import getPostBySlug from '$lib/queries/get-post-by-slug.js'

export async function load({ params }) {
    const response = await prepr(getPostBySlug, {slug: `blog/${params.slug}`})

    const { data } = await response.json()

    if (!data.Post) {
        error(404, 'Post not found')
    }

    return {
        post: data.Post
    }
}
