const GetPostBySlug = `
query ($slug: String) {
    Post (slug: $slug) {
        _id
        title
        content {
            __typename
            ... on Text {
                _id
                body
                text
            }
            ... on Assets {
                items {
                    _id
                    url
                }
            }
        }
    }
}
`

export default GetPostBySlug