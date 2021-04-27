import React from "react";
import { Route, Switch } from "react-router-dom";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = (props) => {
  return (
    <Switch>
      <Route exact path="/">
        <FeedPage />
      </Route>
      <Route exact path="/login">
        <LoginPage setAuth={props.setAuth}/>
      </Route>
      <Route exact path="/post/:id">
        <PostPage />
      </Route>
      <Route exact path="/signup">
        <SignupPage setAuth={props.setAuth}/>
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default Router;
