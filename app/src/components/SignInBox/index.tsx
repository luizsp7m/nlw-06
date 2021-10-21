import React from 'react';

import { View } from 'react-native';
import { COLORS } from '../../theme';

import { Button } from '../Button';

import { styles } from './styles';

import { useAuth } from '../../hooks/auth';

export function SignInBox() {
  const { signIn, isSigninIn } = useAuth();

  return (
    <View style={styles.container}>
      <Button
        title="Entrar com o Github"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        isLoading={isSigninIn}
        onPress={signIn}
      />
    </View>
  );
}