import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Color, FontFamily, FontSize } from '~/global-components/GlobalStyles';
import TraitsContainer from './TraitsContainer';

const CalmContainer = memo(() => {
  return (
    <View style={styles.traits}>
      <Text style={styles.traits1}>Traits</Text>
      <TraitsContainer
        cheerful={require('../../../../../assets/cheerful.png')}
        trait="Cheerful"
        alert1={require('../../../../../assets/alert.png')}
        trait1="Alert"
        companionable={require('../../../../../assets/companionable.png')}
        trait2="Companionable"
      />
      <TraitsContainer
        cheerful={require('../../../../../assets/intelligent.png')}
        trait="Intelligent"
        alert1={require('../../../../../assets/protective.png')}
        trait1="Protective"
        companionable={require('../../../../../assets/calm.png')}
        trait2="Calm"
      />
    </View>
  );
});

const styles = StyleSheet.create({
  traits1: {
    alignSelf: 'stretch',
    fontSize: FontSize.size_xs,
    lineHeight: 24,
    fontWeight: '700',
    fontFamily: FontFamily.interBold,
    color: Color.iconPrimary,
    textAlign: 'left',
  },
  traits: {
    marginTop: 24,
  },
});

CalmContainer.displayName = 'CalmContainer';
export default CalmContainer;
