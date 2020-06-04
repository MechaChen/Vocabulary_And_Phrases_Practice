import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const Words: React.FC = (props: any) => {
    useEffect(() => {
        console.log('props', props);
    }, []);

    return (
        <Container>
            <Title>首爾大學第 13 課</Title>
            <SubContainer>
                <SubTitle>
                    <SubTitleText>詞彙</SubTitleText>
                </SubTitle>
                <Card to="/word-card">
                    <h4>기숙사</h4>
                </Card>
                <Card to="/word-card">
                    <h4>빌라</h4>
                </Card>
                <Card to="/word-card">
                    <h4>원룸</h4>
                </Card>
                <Card to="/word-card">
                    <h4>주택</h4>
                </Card>
                <Card to="/word-card">
                    <h4>오피스텔</h4>
                </Card>
            </SubContainer>
            <SubContainer>
                <SubTitle>
                    <SubTitleText subColor="#95a1ae">句型</SubTitleText>
                </SubTitle>
                <Card to="/word-card">
                    <h4>A/V(으)ㄹ 모르겠어요</h4>
                </Card>
            </SubContainer>
        </Container>
    );
};

export default Words;
