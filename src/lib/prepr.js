
import { PREPR_ENDPOINT } from '$env/static/private'

const prepr = async (query, variables) => {
    const response = await fetch(PREPR_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query, variables }),
    })
    return response
}

export default prepr