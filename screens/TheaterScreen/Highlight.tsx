import React, { useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, View } from "../../components/Themed";
import {View as DefaultView} from "react-native";

const CommentContainer = styled(View)`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 20px;
  margin: 5px 10px;
  display: flex;
`;

const CommentRow = styled(DefaultView)`
  display: flex;
  flex-direction: row;
`;

const CommentUserId = styled(Text)`
  font-weight: 700;
  font-size: 15px;
  margin-right: 5px;
`;

const CommentText = styled(Text)`
  font-size: 13px;
  flex: 1;
  margin-left: 5px;
`;

const CommentLikeCount = styled(Text)`
  font-weight: 500;
  font-size: 12px;
  color: #888;
  margin-left: 5px;
`;

type CommentPropType = {
  userId: string;
  likeCount: number;
  commentText: string;
};
const Comment: React.FC<CommentPropType> = ({
  userId,
  likeCount,
  commentText,
}) => {
  return (
    <CommentContainer lightColor={"#EFEFEF"} darkColor={"#202020"}>
      <CommentRow>
        <CommentUserId>{userId}</CommentUserId>
        <CommentLikeCount>👍{likeCount}</CommentLikeCount>
      </CommentRow>
      <CommentText>{commentText}</CommentText>
    </CommentContainer>
  );
};

const Container = styled(View)`
  margin: 15px 3px;
  display: flex;
  flex-direction: column;
`;

const Header = styled(View)`
  margin-left: 5px;
  display: flex;
  flex-direction: row;
`;

const TimestampButton = styled(TouchableOpacity)``;

const Timestamp = styled(Text)`
  color: #5d9cec;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 3px;
  margin-right: 5px;
`;

const LikeDisplay = styled(Text)`
  font-weight: 500;
  color: #888;
  align-self: center;
`;

const Comments = styled(View)`
  display: flex;
  flex-direction: column;
`;

const Rank = styled(Text)`
  margin-right: 5px;
  font-size: 18px;
  font-weight: 600;
`;

type HighlightPropType = {
  videoId: string;
  lastUpdate: string;
  rank: string;
  totalLikeCount: number;
  totalReplyComment: number;
  timestamp: string;
  comments: any[];
  youtubeSeekTo: Function;
};

const Highlight: React.FC<HighlightPropType> = (props) => {
  const [state, setState] = useState({
    videoId: props.videoId,
    lastUpdate: props.lastUpdate,
    rank: props.rank,
    totalLikeCount: props.totalLikeCount,
    totalReplyComment: props.totalReplyComment,
    timestamp: props.timestamp,
    comments: props.comments,
    youtubeSeekTo: props.youtubeSeekTo,
  });

  const {
    videoId,
    lastUpdate,
    rank,
    totalLikeCount,
    totalReplyComment,
    timestamp,
    comments,
    youtubeSeekTo,
  } = state;

  const timestampToSecond = (timestamp: string) => {
    let second = 0;
    let multiply = 1;
    let arr = timestamp.split(":");
    for (let i = arr.length - 1; i >= 0; --i) {
      second += multiply * Number(arr[i]);
      multiply *= 60;
    }
    return second;
  };

  return (
    <Container>
      <Header>
      <Rank>{rank}위</Rank>
      <TouchableOpacity onPress={youtubeSeekTo(timestampToSecond(timestamp), true)}>
        <Timestamp>{timestamp}</Timestamp>
      </TouchableOpacity>
      <LikeDisplay>{`👍${totalLikeCount}`}</LikeDisplay>
      </Header>
      <Comments>
        {comments.map((comment, i) => (
          <Comment
            key={i}
            userId={comment.userId}
            likeCount={comment.likeCount}
            commentText={comment.commentText}
          ></Comment>
        ))}
      </Comments>
    </Container>
  );
};

export default Highlight;
