import { SafeAreaView } from 'react-native-safe-area-context'
import styled from "styled-components/native";
import { FontAwesome } from '@expo/vector-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Content = styled(KeyboardAwareScrollView)`
`;

export const Icon = styled(FontAwesome).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GREEN_700
}))`
  align-self: center;
`;