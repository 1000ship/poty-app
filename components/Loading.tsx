import React from "react";
import styled from "styled-components";
import { ActivityIndicator, View } from "react-native";

const Container = styled(View)`
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
`;

export default () => {
  return (
    <Container>
      <ActivityIndicator />
    </Container>
  );
};
