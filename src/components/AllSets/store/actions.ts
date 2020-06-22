export const GET_SETS = 'GET_SETS';
export const CREATE_SET = 'CREATE_SET';

export interface simpleSet {
    id: string;
    title: string;
    date: string;
    totalWords: number;
    totalPhrases: number;
}

export const getSets = (allSets: simpleSet[]) => ({
    type: GET_SETS,
    allSets,
});

export const createSet = (title: string) => ({
    type: CREATE_SET,
    title,
});
