const baseUrl = 'https://localhost:7251/Cars';

export const getAll = async () => {
    const response = await fetch(baseUrl);
    return await response.json();
};

export const getSingle = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`);
    return await response.json();
};

export const create = async (car) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(car)
    });

    const result = await response.json();

    return result;
};

export const deleteCar = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE'});
}

export const editCar = async (id, newCarData) => {
    newCarData.id = id;
    const response = await fetch(baseUrl, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newCarData)
    });

    const result = await response.json();
    return result;
}
