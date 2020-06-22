import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getSet, Set } from './store/actions';

const Container = styled.div`
    width: 80%;
    margin: auto;
    @media all and (min-width: 1024px) {
        width: 60%;
    }
`;

const Title = styled.h2`
    font-family: NotoSansTC;
    padding-top: 20px;
    text-align: center;
    color: #666;
`;

const SubContainer = styled.div`
    padding-bottom: 30px;
`;

const SubTitle = styled.h3`
    margin: 0;
    padding: 20px 0 0;
    font-family: NotoSansTC;
`;

interface ISubTitleText {
    subColor?: string;
}

const SubTitleText = styled.span<ISubTitleText>`
    display: inline-block;
    margin: 0;
    padding: 15px 20px;
    background-color: ${(props) => props.subColor || "#d37c66"};
    font-size: 20px;
    color: #fff;
    border-radius: 10px;
`;

const Card = styled(Link)`
    display: block;
    margin: 20px 0 0;
    padding: 10px 20px;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0px 10px 25px -8px #aaa;
    transition: .5s;

    &:hover {
        color: #d37c66;
    }
`;

interface I_Props {
    set: any;
    location: any;
    getSet: (set_card: Set) => void;
}

const Module: React.FC<I_Props> = ({ set, location, getSet }) => {
    useEffect(() => {
        (async () => {
            const params = new URLSearchParams(location.search);
            const set_oid = params.get('set');

            const setJSON = await fetch(`/sets/${set_oid}`);
            const set = await setJSON.json();

            console.log('set', set);
            getSet(set);
        })();
    }, []);

    let words;
    let phrases;

    if (set.cards) {
        words = set.cards.filter((card: any) => card.type === 'word');
        phrases = set.cards.filter((card: any) => card.type === 'phrase');
    }

    return set.cards ? (
        <Container>
            <Title>{set.title}</Title>
            <SubContainer>
                <SubTitle>
                    <SubTitleText>詞彙</SubTitleText>
                </SubTitle>
                {words.map((word: any) => (
                    <Card key={word._id.$oid} to={`/card?card=${word._id.$oid}`}>
                        <h4>{word.name}</h4>
                    </Card>
                ))}
            </SubContainer>
            <SubContainer>
                <SubTitle>
                    <SubTitleText subColor="#95a1ae">句型</SubTitleText>
                </SubTitle>
                {phrases.map((phrase: any) => (
                    <Card key={phrase._id.$oid} to={`/card?card=${phrase._id.$oid}`}>
                        <h4>{phrase.name}</h4>
                    </Card>
                ))}
            </SubContainer>
        </Container>
    ) : null;
};

const mapStateToProps = (state: any) => ({
    set: state,
});

const mapDispatchToProps = (dispatch: any) => ({
    getSet: (set_card: Set) => dispatch(getSet(set_card)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Module);
