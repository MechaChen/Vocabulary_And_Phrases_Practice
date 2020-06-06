export const ADD_EXAMPLE = 'ADD_EXAMPLE';

export const addExample = (example: string) => ({
    type: ADD_EXAMPLE,
    example
});
