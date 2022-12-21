export default defineEventHandler(async (event) => {

    // hanlde query params
    const { name } = getQuery(event)

    // handle post data
    const { age } = await readBody(event)

    return {
        message: `Hello ninja, ${name}! You are ${age} year old.`
    }

})