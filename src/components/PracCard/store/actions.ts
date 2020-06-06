export const ADD_EXAMPLE = 'ADD_EXAMPLE';
export const DELETE_EXAMPLE = 'DELETE_EXAMPLE';

export const addExample = (example: string) => ({
    type: ADD_EXAMPLE,
    example,
});

export const deleteExample = (index: number) => ({
    type: DELETE_EXAMPLE,
    index,
});
