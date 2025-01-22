export const formatToken = (token) => {
    const start = token?.slice(0, 7);
    const end = token?.slice(-6);
    return `${start}....${end}`;
}