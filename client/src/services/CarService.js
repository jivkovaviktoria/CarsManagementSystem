const baseUrl = 'https://localhost:7251/Cars';

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    return result;
};
