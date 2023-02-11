const baseUrl = 'https://localhost:7251/Cars';

export const getAll = async () => {
    const response = await fetch(baseUrl);
    return await response.json();
};

export const getSingle = async (carId) => {
    const response = await fetch(`${baseUrl}/${carId}`);
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

    console.log(result);
    return result;
};
