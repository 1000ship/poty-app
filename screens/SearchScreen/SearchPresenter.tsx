import React, { useState } from "react";
import { TextInput } from "react-native";

import styled from "styled-components/native";
import { View } from "../../components/Themed";

const Container = styled(View)``;

const SearchTextInput = styled(TextInput)`
  height: 40px;
  border-color: #888;
  border-width: 1px;
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
`;

const SearchPresenter = (props: any) => {
  const [value, onChangeText] = useState("");

  return (
    <Container>
      <SearchTextInput
        onChangeText={(text) => onChangeText(text)}
        value={value} placeholder="Search here..."
      ></SearchTextInput>
    </Container>
  );
};

export default SearchPresenter;
