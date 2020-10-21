import React from "react";
import styled from "styled-components";
import QuestionsInterview from "../QuestionsInterview/QuestionsInterview";
import FiltersTabs from "../QuestionsInterview/FiltersTabs";
import {Colors} from "../Atoms/Colors";

export const Title = styled.div`
font-weight: 800;
font-size: 3.5em;
text-align: center;
color: ${Colors.Primary};
padding-top: 40px;
margin-bottom: 40px;
`;

const QuestionsInterviewPage = () => {
    return <>
    <Title>💼 Interview questions</Title>
        <FiltersTabs />
        <QuestionsInterview />
    </>

};

export default QuestionsInterviewPage;