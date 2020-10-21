import React from "react";
import styled from "styled-components";
import {Colors} from "../Atoms/Colors";
import FieldIcon from "./FieldIcon";


const QuestionAnswerItem = ({questionNumber, question,answer,onClick,answerReveal,FieldLabel, source,secondsource,OtherSource, Color, Subquestion, Subanswer}) => {
    return <>
        <QuestionItemWrapper>
            <QuestionWrapper>
                <Question><span>{questionNumber}. </span>{question}</Question>
                <FieldIcon
                    FieldLabel={FieldLabel}
                    Color={Color}
                />
            </QuestionWrapper>

            { answerReveal ?
                <>
                <Answer>{answer}</Answer>
                <SubQuestion>{Subquestion}</SubQuestion>
                <SubAnswer>{Subanswer}</SubAnswer>

                <SourceWrapper>
                    <Source href={source}>ℹ️ {source}</Source>
                    { OtherSource ?
                        <>
                    <Source href={secondsource}>ℹ️ {secondsource}</Source>
                    </>
                        :
                        null
                    }
                </SourceWrapper>
                </>
                : null

            }

            <SolutionButton
            onClick={onClick}
            >
                See solution
                <span>👀</span>
            </SolutionButton>

        </QuestionItemWrapper>

    </>

};

export default QuestionAnswerItem;

export const Question = styled.p`
color : ${Colors.Primary};
margin-right: 8px;
font-weight: 700;
font-size: 1.2rem;
`;

export const Answer = styled.p`
color : ${Colors.Secondary};
margin-bottom: 16px;
line-height: 1.5;
`;

export const SolutionButton = styled.button`
width: fit-content;
font-size: .8rem;
border-radius: 16px;
border: 1px solid ${Colors.Secondary}16;
color : ${Colors.Secondary};
background-color: ${Colors.White};
padding: 4px 8px;
opacity: .5;
transition: .1s;

&:hover {
opacity: 1;
transition: .3s;
}

& > span {
margin-left: 8px;
}
`;

export const QuestionItemWrapper = styled.div`
display: flex;
flex-direction: column;
margin: 20px 0px;
`;

export const Source = styled.a`
display: inline-block;
font-size: .8rem;
margin-bottom: 8px;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
color: ${Colors.LightGrey02}50;
`;

export const SourceWrapper = styled.div`
display: flex;
flex-direction: column;
`;

export const QuestionWrapper = styled.div`
display: flex;
align-items: center;
margin-bottom: 16px;
`;

export const SubQuestion = styled.p`
color: ${Colors.Tertiary};
font-weight : 600;
margin-bottom: 8px;
`;

export const SubAnswer = styled.p`
color: ${Colors.LightGrey02};
margin-bottom: 24px;
`;
