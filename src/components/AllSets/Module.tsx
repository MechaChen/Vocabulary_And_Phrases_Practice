import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';

import { simpleSet, getSets, createSet } from './store/actions';

const Set = styled(Link)`
    display: block;
    width: 80%;
    margin: 30px auto 0;
    padding: 15px 20px;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0px 10px 25px -8px #aaa;

    @media all and (min-width: 1024px) {
        width: 60%;
    }
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    font-family: NotoSansTC;
    color: #333;

    @media all and (min-width: 1024px) {
        flex-direction: row;
        align-items: center;
        padding-bottom: 10px;
    }
`;

const Name = styled.h2`
`;

const Date = styled.span`
    display: block;
    color: #333;
    
    @media all and (min-width: 1024px) {
        margin-left: 60px;
    }
`;

const Vocab = styled.span`
    display: inline-block;
    margin-right: 15px;
    padding: 10px;
    border-radius: 5px;
    background-color: #f6ccb2;
    color: #fff;
`;

const Phrase = styled(Vocab)`
    background-color: #c8cfd6;
`;

interface I_Props {
    sets: any;
    getSets: (allSets: simpleSet[]) => void;
}

const Module: React.FC<I_Props> = ({ sets, getSets }) => {
    useEffect(() => {
        (async () => {
            const allSetsJSON = await fetch('/sets');
            const allSets = await allSetsJSON.json();
            getSets(allSets);
        })();
    }, []);

    return (
        <>
            {sets.map((set: any) => (
                <Set key={set.title} to={`/set?set=${set._id.$oid}`}>
                    <Title>
                        <Name>{set.title}</Name>
                        <Date>{moment(set.date).locale('ko').format('MMMM Do')}</Date>
                    </Title>
                    <Vocab>{`${set.wordNum} 個詞語`}</Vocab>
                    <Phrase>{`${set.phraseNum} 個句型`}</Phrase>
                </Set>
            ))}
        </>
    );
};

const mapStateToProps = (state: any) => ({
    sets: state,
});

const mapDispatchToProps = (dispatch: any) => ({
    getSets: (allSets: simpleSet[]) => dispatch(getSets(allSets)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Module);
