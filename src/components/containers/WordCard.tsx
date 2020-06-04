import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width: 60%;
    margin: 30px auto 0;
    padding: 10px 30px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 10px;
`;

const MainWord = styled.h3`
    font-size: 24px;
`;

const AddField = styled.div`
    display: flex;
`;

const AddInput = styled.input`
    border: none;
    outline: none;
    flex-grow: 1;
    padding: 10px;
    border-bottom: 1.5px solid #aaa;
    color: #c89483;
    transition: .3s;

    &:focus {
        border: none;
        border-bottom: 1.5px solid #c89483;
    }
`;

const AddButton = styled.button`
    outline: none;
    border: none;
    margin-left: 20px;
    padding: 10px 20px;
    color: #fff;
    border-radius: 5px;
    background-color: #c89483;
    cursor: pointer;
    transition: .5s;

    &:hover {
        background-color: #d37c66;
    }
`;

const Example = styled.li`
    padding: 5px 0;
`;

const WordCard: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [examples, setExamples] = useState<string[]>([]);

    const addExample = () => {
        if (input) {
            const newExamples = [...examples, input];
            setExamples(newExamples);
            setInput('');
        }
    };

    return (
        <Card>
            <MainWord>기숙사</MainWord>
            <p>{`已完成 ${examples.length} / 2`}</p>
            <AddField>
                <AddInput type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="加入新的練習吧~" />
                <AddButton type="button" onClick={addExample}>ADD</AddButton>
            </AddField>
            <ul>
                {examples.map((example) => (
                    <Example>{example}</Example>
                ))}
            </ul>
        </Card>
    );
};

export default WordCard;
