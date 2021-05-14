import { IconButton } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import React, { useEffect, useState } from "react";
import {
  Autor,
  ButtonsContainer,
  Commentary,
  MainContainer,
  Text,
  Title,
  VoteContainer,
} from "./style";
import { vote } from "../../services/requests";

const PostCard = (props) => {
  const [direction, setDirection] = useState(0);
  const [colorLike, setColorLike] = useState("default");
  const [colorDislike, setColorDislike] = useState("default");
  const [voteNumber, setVoteNumber] = useState(0);

  const {
    title,
    text,
    id,
    commentsCount,
    userVoteDirection,
    username,
    votesCount,
  } = props.data;

  useEffect(() => {
    setDirection(userVoteDirection);
    setVoteNumber(votesCount);
  }, [userVoteDirection]);
  useEffect(() => {
    if (direction === 0) {
      setColorLike("default");
      setColorDislike("default");
    } else if (direction === 1) {
      setColorLike("primary");
      setColorDislike("default");
    } else if (direction === -1) {
      setColorLike("default");
      setColorDislike("primary");
    }
  }, [direction]);

  return (
    <MainContainer>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Autor>Autor: {username}</Autor>
      <ButtonsContainer>
        <VoteContainer>
          <IconButton
            color={colorLike}
            onClick={() => {
              setDirection(1);
              if (direction === 0) {
                setVoteNumber(voteNumber + 1);
              }else if(direction === -1){
                setVoteNumber(voteNumber + 2);
              }
              vote(1, id);
            }}
          >
            <ThumbUpAltIcon />
          </IconButton>
          <span>{voteNumber}</span>
          <IconButton
            color={colorDislike}
            onClick={() => {
              setDirection(-1);
              if (direction === 0) {
                setVoteNumber(voteNumber - 1);
              }else if(direction === 1){
                setVoteNumber(voteNumber - 2);
              }
              vote(-1, id);
            }}
          >
            <ThumbDownIcon />
          </IconButton>
        </VoteContainer>
        <Commentary>Comentarios: {commentsCount}</Commentary>
      </ButtonsContainer>
    </MainContainer>
  );
};

export default PostCard;
