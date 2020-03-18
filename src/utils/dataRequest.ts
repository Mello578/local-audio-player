const defaultParams = { cache: 'no-cache' };

export async function dataRequest(url, params = {}) {
    Object.assign(params, defaultParams);
    const response = await fetch(url, params);
    try {
        if (response.status !== 200) {
            throw new Error(`Looks like there was a problem. Status Code: ${response.status}`);
        }
        return response.json();
    } catch (err) {
        console.log('Fetch Error :-S', err);
    }
}
