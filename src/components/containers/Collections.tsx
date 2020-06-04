import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';

const Collection = styled(Link)`
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

const Collections = () => (
        <>
            <Collection to={`/words?collection=首爾大學第 13 課`}>
                <Title>
                    <Name>首爾大學第 13 課</Name>
                    <Date>{moment().locale('ko').format('MMMM Do')}</Date>
                </Title>
                <Vocab>25 個詞語</Vocab>
                <Phrase>4 個句型</Phrase>
            </Collection>
            <Collection to="/words?collection=首爾大學第13課">
                <Title>
                    <Name>首爾大學第 12 課</Name>
                    <Date>{moment().locale('ko').format('MMMM Do')}</Date>
                </Title>
                <Vocab>14 個詞語</Vocab>
                <Phrase>4 個句型</Phrase>
            </Collection>
        </>
    );

export default Collections;
