export const GET_CARD = 'GET_CARD';
export const ADD_EXAMPLE = 'ADD_EXAMPLE';
export const DELETE_EXAMPLE = 'DELETE_EXAMPLE';

export interface Card {
    _id: { $oid: string };
    type: string;
    name: string;
    practice: string[];
    set_oid: string;
}

export const getCard = (card: Card) => ({
    type: GET_CARD,
    card,
});

export const addExample = (example: string) => ({
    type: ADD_EXAMPLE,
    example,
});

export const deleteExample = (index: number) => ({
    type: DELETE_EXAMPLE,
    index,
});
