import React from "react";
import styled from "styled-components/native";
import { Text, View } from "./Themed";

const Container = styled(View)`
  width: 100%;
  height: 100%;
  padding: 100px;
  display: flex;
  justify-content: center;
`;

export default ({ error }) => {
  const {
    request: { status },
    message,
  } = error;
  return (
    <Container>
      <Text>Error {status}</Text>
      <Text>{message}</Text>
    </Container>
  );
};
