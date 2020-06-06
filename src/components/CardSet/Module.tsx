import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';
import styled from 'styled-components';
import console = require('console');

const Container = styled.div`
    width: 80%;
    margin: auto;
    @media all and (min-width: 1024px) {
        width: 60%;
    }
`;

const Title = styled.h2`
    padding: 20px 0;
    text-align: center;
`;

const SubContainer = styled.div`
    padding-bottom: 30px;
`;

const SubTitle = styled.h3`
    margin: 0;
    padding: 20px 0 0;
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
}

const Module: React.FC<I_Props> = ({ set }) => {
    return (
        <Container>
            <Title>首爾大學第 13 課</Title>
            <SubContainer>
                <SubTitle>
                    <SubTitleText>詞彙</SubTitleText>
                </SubTitle>
                {set.words.map((word: any) => (
                    <Card key={word.name} to={`/word-card?card=${word.id}`}>
                        <h4>{word.name}</h4>
                    </Card>
                ))}
            </SubContainer>
            <SubContainer>
                <SubTitle>
                    <SubTitleText subColor="#95a1ae">句型</SubTitleText>
                </SubTitle>
                {set.phrases.map((phrase: any) => (
                    <Card key={phrase.name} to="/word-card">
                        <h4>{phrase.name}</h4>
                    </Card>
                ))}
            </SubContainer>
        </Container>
    );
};

const mapStateToProps = (state: any) => ({
    set: state,
});

const mapDispatchToProps = (dispatch: any) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Module);
