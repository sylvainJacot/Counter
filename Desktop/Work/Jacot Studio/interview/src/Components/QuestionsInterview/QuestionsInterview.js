import React,{useState} from "react";
import styled from "styled-components";
import {Route, Switch} from "react-router-dom";
import QuestionAnswerItem from "./QuestionAnswerItem";
import { QuestionsAnswersData } from "../Atoms/QuestionsData";
import {Colors} from "../Atoms/Colors";


const QuestionsInterview = () => {


    const [revealToggle, setRevealToggle] = useState(QuestionsAnswersData);

    const HandleRevealToggle = (index) => {
        const actualQuestions = [...revealToggle]
        actualQuestions[index].Reveal = !actualQuestions[index].Reveal;
        setRevealToggle(actualQuestions)
    }


    return <>
        <Container>
                {
                    QuestionsAnswersData.map((item,index) =>
                     <Switch>
                            <Route path={item.path}>
                                <QuestionAnswerItem
                                    key={index}
                                    questionNumber={item.id}
                                    question={item.Question}
                                    answer={item.Answer}
                                    Subquestion={item.SubQuestion}
                                    Subanswer={item.SubAnswer}
                                    answerReveal={item.Reveal}
                                    FieldLabel={item.Field}
                                    source={item.Source}
                                    secondsource={item.OtherSource}
                                    ItemField={item.Field}
                                    Color={item.ColorField}
                                    OtherSource={item.OtherSource}
                                    onClick={() => HandleRevealToggle(index)}
                                />
                            </Route>
                    </Switch>
                    )
                }

        </Container>
    </>

};

export default QuestionsInterview;

export const Container = styled.div`
display: flex;
position: relative;
flex-direction: column;
margin: auto;
background-color: ${Colors.White};
width: 600px;
border-radius: 32px;
padding: 24px 40px;

`;