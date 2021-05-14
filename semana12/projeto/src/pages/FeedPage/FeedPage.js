import React from "react";
import { useHistory } from "react-router-dom";
import PostCard from "../../components/PostCard/PostCard";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import {
  MainContainer,
  StyledGrid,
  StyledIconButton,
  StyledIcon,
} from "./style";
import { BASE_URL } from "../../constants/urls";
import { Grid } from "@material-ui/core";
import { goToCreate } from "../../routes/coordinator";

const FeedPage = () => {
  useProtectedPage();
  const history = useHistory();
  const feed = useRequestData([], `${BASE_URL}/posts`);

  return (
    <MainContainer>
      <StyledIconButton onClick={() => goToCreate(history)}>
        <StyledIcon />
      </StyledIconButton>
      <StyledGrid container>
        {feed.posts &&
          feed.posts.map((post) => {
            return (
              <Grid key={post.id} item>
                <PostCard data={post} />
              </Grid>
            );
          })}
      </StyledGrid>
    </MainContainer>
  );
};

export default FeedPage;
