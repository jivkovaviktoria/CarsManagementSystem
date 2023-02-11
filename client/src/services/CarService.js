const baseUrl = 'https://localhost:7251/Cars';

export const getAll = async () => {
    const response = await fetch(baseUrl);
    return await response.json();
};

export const getSingle = async (carId) => {
    const response = await fetch(`${baseUrl}/${carId}`);
    return await response.json();
};
