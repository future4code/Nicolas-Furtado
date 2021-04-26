import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/feed'>
          <FeedPage />
        </Route>
        <Route exact path='/'>
          <LoginPage />
        </Route>
        <Route exact path='/post/:id'>
          <PostPage />
        </Route>
        <Route exact path='/signup'>
          <SignupPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
