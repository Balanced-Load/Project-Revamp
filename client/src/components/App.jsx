import React from 'react';
// import Overview from './Overview/Overview';
import QuestAnswers from './QuestAnswers/QuestAnswers';
import RatingsReviews from './RatingsReviews/RatingsReviews';
import DataProvider, { useData } from './Context/DataProvider';
import OverviewProvider from './Context/OverviewProvider';
import RelatedItemsParent from './RelatedItems/RelatedItemsParent';

// import styles from './App.css';

function App() {
  const { productId } = useData();

  return (
    <>
      {productId ? (
        <DataProvider>
          <OverviewProvider>
            {/* <Overview /> */}
            <RelatedItemsParent />
          </OverviewProvider>
          <QuestAnswers />
          <RatingsReviews />
        </DataProvider>
      ) : (<div>loading</div>)}
    </>
  );
}

export default App;
