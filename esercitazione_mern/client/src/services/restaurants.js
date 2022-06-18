const BASE_URL = 'http://localhost:3005/api/v1/restaurants',
    HEADERS = {"Content-Type": "application/json"};

export default {
    getAll: (next = null) => {
        return fetch(next ? BASE_URL + '/?next=' + next : BASE_URL + '/', {
            headers: HEADERS
        }).then(res => res.json())
            .then(data => data)
    },

    getOne: (id) => {
        return fetch(BASE_URL + '/' + id, {
            headers: HEADERS
        }).then(res => res.json())
            .then(data => data)
    },

    postReview: (requestBody) => {
        return fetch(BASE_URL + '/review',
            {
                method: 'post',
                body: JSON.stringify(requestBody),
                headers: HEADERS
            })
            .then(res => res.json())
    }
}