import React, { useState, useEffect } from 'react';
import StarRating from '../SharedComponents/StarRating';
import ProgressBar from './ProgressBar';
import RatingProvider from '../SharedContexts/RatingProvider';
import Reviews from './Reviews';
import styled from 'styled-components';
import { useData } from '../SharedContexts/DataProvider';

function RatingsReviews() {
  const { productId } = useData();
  return (
    <>
      <RatingProvider>
        <ContainerWrapper>
        <Container>
          <BoxOne>
            <StarRating showAverage currentProduct />
            <ProgressBar/>
          </BoxOne>
          <BoxTwo>
            <Reviews />
          </BoxTwo>
        </Container>
      </ContainerWrapper>
      </RatingProvider>
    </>
  );
}
const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  display: grid;
  grid-auto-flow: dense;
  grid-auto-rows: minmax(130px, 1fr);
  grid-gap: 13px;
  grid-template-columns: 3fr 7fr;
  max-width: 1000px;
`
const BoxOne = styled.div`
  grid-column: 1/ span 1;
  grid-row: span 1;
  min-width: 150px;
  background-color: rgba(40, 40, 236, 0.801);
  padding: 5px;
`
const BoxTwo = styled.div`
  grid-column: 2/ span 4;
  grid-row: span 2;
  background-color: rgba(243, 243, 62, 0.507);
`

export default RatingsReviews;
