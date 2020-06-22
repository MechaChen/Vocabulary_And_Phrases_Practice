export const GET_SET = 'GET_SET';

export interface Set {
    title: string;
    cards: any;
}

export const getSet = (set_card: Set) => ({
    type: GET_SET,
    set_card,
});
