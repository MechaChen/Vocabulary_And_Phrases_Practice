import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { I_Card } from './store/reducer';
import { addExample, deleteExample } from './store/actions';
import Bin from '../../assets/pics/bin.png';

const Card = styled.div`
    width: 80%;
    margin: 30px auto 0;
    padding: 10px 30px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 10px 25px -8px #aaa;
    
    @media all and (min-width: 1024px) {
        width: 60%;    
    }
`;

const MainWord = styled.h3`
    font-size: 24px;
`;

const PracStatus = styled.p`
    font-family: NotoSansTC;
`;

interface I_PracNum {
    completed?: boolean;
}

const PracNum = styled.span<I_PracNum>`
    font-family: NotoSansTC;
    color: ${(props) => (props.completed ? '#333' : '#d37c66')}
`;

const AddField = styled.div`
    display: flex;
    flex-direction: column;

    @media all and (min-width: 1024px) {
        flex-direction: row;
    }
`;

const AddInput = styled.input`
    border: none;
    outline: none;
    flex-grow: 1;
    padding: 10px;
    border-bottom: 1.5px solid #aaa;
    color: #c89483;
    transition: .3s;
    font-size: 16px;
    border-radius: 0;

    &::placeholder {
        font-family: NotoSansTC;
    }

    &:focus {
        border: none;
        border-bottom: 1.5px solid #c89483;
    }
`;

const AddButton = styled.button`
    outline: none;
    border: none;
    margin: 20px 0 0 0;
    padding: 10px 20px;
    color: #fff;
    border-radius: 5px;
    background-color: #c89483;
    font-size: 20px;
    cursor: pointer;
    transition: .5s;
    @media all and (min-width: 1024px) {
        margin: 0 0 0 20px;
        font-size: 16px;
    }

    &:hover {
        background-color: #d37c66;
    }
`;

const ExampleList = styled.ul`
    padding: 30px 0;
    width: 80%;
    margin: auto;
`;

const Example = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`;

const Delete = styled.img`
    width: 24px;
`;

interface I_Props {
    card: I_Card;
    addExample: any;
    deleteExample: (index: number) => void;
}

const Module: React.FC<I_Props> = ({ card, addExample, deleteExample }) => {
    console.log('Bin', Bin);

    const [input, setInput] = useState<string>('');

    const setInputValue = (e: any) => {
        setInput(e.target.value);
    };

    const addNewExample = () => {
        if (input) {
            addExample(input);
            setInput('');
        }
    };

    return (
        <Card>
            <MainWord>기숙사</MainWord>
                <PracStatus>
                    已完成
                    {' '}
                    <PracNum completed={card.practice.length >= 2}>{card.practice.length}</PracNum>
                    {' '}
                    / 2
                </PracStatus>
            <AddField>
                <AddInput type="text" value={input} onChange={setInputValue} placeholder="加入新的練習吧~" />
                <AddButton type="button" onClick={addNewExample}>ADD</AddButton>
            </AddField>
            <ExampleList>
                {card.practice.map((example, i) => (
                    <Example key={i}>
                        <span>{example}</span>
                        <Delete src={Bin} alt="delete" onClick={() => deleteExample(i)} />
                    </Example>
                ))}
            </ExampleList>
        </Card>
    );
};

const mapStateToProps = (state: any) => ({
    card: state,
});

const mapDispatchToProps = (dispatch: any) => ({
    addExample: (input: string) => dispatch(addExample(input)),
    deleteExample: (index: number) => dispatch(deleteExample(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Module);
