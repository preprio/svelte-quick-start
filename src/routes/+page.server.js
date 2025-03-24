import prepr from '$lib/prepr'
import GetPosts from '$lib/queries/get-posts.js'

export async function load() {
    const response = await prepr(GetPosts)

    const { data } = await response.json()
    const { items } = data.Posts

    return {
        posts: items
    }
}