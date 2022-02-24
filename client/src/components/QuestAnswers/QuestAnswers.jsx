import React, { useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import SearchBar from './SearchBar';
import QuestionList from './QuestionList';
import { useData } from '../SharedContexts/DataProvider';
import { useQAData } from './QAContext/DataProvider';
import Spinner from '../SharedComponents/Spinner';

function QuestAnswers() {
  /* TEST:
    Describe: 'should be working with the current products data'
    Test: 'after rendering, my question state should be equal to a fresh get request'
  */

  const { productId } = useData();
  const { updateID } = useData();
  const { questions } = useQAData();

  useEffect(() => {
  }, [productId]); // should auto update when id changes.
  // console.log('am i rerendering from questionAnswers?');
  return !questions ? <SpinnerContainer><Spinner /></SpinnerContainer> : (
    <div>
      <button style={{ backgroundColor: 'orange' }} type="button" onClick={updateID}> Get Another Product ID {productId} </button>
      <QAFlexContainer>
        <QASection>
          <QAHeader><TitleStyle>Questions and Answers</TitleStyle></QAHeader>
          <SearchBar />
          <QuestionList />
        </QASection>
      </QAFlexContainer>
    </div>
  );
}

export default QuestAnswers;

const QAHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const TitleStyle = styled.h1`
  ${GlobalStyle.Title};
`;

const QAFlexContainer = styled.div`
  display: flex;
  border: solid 2px rgb(238, 238, 238);
  border: solid black 6px;
  justify-self: center;
  min-width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  `;

const QASection = styled.div`
justify-content: center;
min-width: 100%;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;
