const baseUrl = 'https://localhost:7251/Cars';

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    return result;
};

export const getSingle = async (carId) => {
    const response = await fetch(`${baseUrl}/${carId}`);
    const result = await response.json();

    return result;
};
