const request = async (url, method = "GET", data) => {
    const response = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: data ? JSON.stringify(data) : null,
    })
    return response.json()
}
export default request