import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage'

const FeedPage = () => {
  useProtectedPage();
  return (
    <>
      FeedPage
    </>
  );
}

export default FeedPage;
