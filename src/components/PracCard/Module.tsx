import React, { useState } from 'react';
import { connect } from 'react-redux';
import { I_Card } from './store/reducer';
import styled from 'styled-components';
import { addExample, deleteExample } from './store/actions';
import Bin from '../../assets/pics/bin.png';

const Card = styled.div`
    width: 80%;
    margin: 30px auto 0;
    padding: 10px 30px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 10px;
    
    @media all and (min-width: 1024px) {
        width: 60%;    
    }
`;

const MainWord = styled.h3`
    font-size: 24px;
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
    cursor: pointer;
    transition: .5s;
    @media all and (min-width: 1024px) {
        margin: 0 0 0 20px;
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
    }

    const addNewExample = () => {
        if (input) {
            addExample(input);
            setInput('');
        }
    }

    return (
        <Card>
            <MainWord>기숙사</MainWord>
            <p>{`已完成 ${card.practice.length} / 2`}</p>
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
