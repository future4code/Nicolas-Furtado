import { Typography } from '@material-ui/core';
import React from 'react';
import { ErrorImage, MainContainer } from './style';
import error_img from '../../assets/img/404.png'

const ErrorPage = () => {
  return (
    <MainContainer>
      <ErrorImage src={error_img}/>
      <Typography color='primary'>Essa página não existe</Typography>
    </MainContainer>
  );
}

export default ErrorPage;
