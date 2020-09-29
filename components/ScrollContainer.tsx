import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

const ScrollContainer = ({children}) => {
    return <ScrollView>{children}</ScrollView>
}

export default ScrollContainer;