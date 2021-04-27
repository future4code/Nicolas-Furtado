import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage'

const PostPage = () => {
  useProtectedPage();

  return (
    <>
      PostPage
    </>
  );
}

export default PostPage;
