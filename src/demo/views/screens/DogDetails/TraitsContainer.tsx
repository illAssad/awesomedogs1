import React, { memo } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Color,
  FontFamily,
  FontSize,
  Padding,
} from '~/global-components/GlobalStyles';

type TraitsContainerType = {
  cheerful?: ImageSourcePropType;
  trait?: string;
  alert1?: ImageSourcePropType;
  trait1?: string;
  companionable?: ImageSourcePropType;
  trait2?: string;
};

const TraitsContainer = memo(
  ({
    cheerful,
    trait,
    alert1,
    trait1,
    companionable,
    trait2,
  }: TraitsContainerType) => {
    return (
      <View style={styles.row1}>
        <View style={styles.traitFlexBox}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.cheerfulIcon}
              resizeMode="cover"
              source={cheerful}
            />
          </View>
          <Text style={styles.trait1}>{trait}</Text>
        </View>
        <View style={[styles.trait2, styles.traitFlexBox]}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.cheerfulIcon}
              resizeMode="cover"
              source={alert1}
            />
          </View>
          <Text style={styles.trait1}>{trait1}</Text>
        </View>
        <View style={[styles.trait2, styles.traitFlexBox]}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.cheerfulIcon}
              resizeMode="cover"
              source={companionable}
            />
          </View>
          <Text style={styles.trait1}>{trait2}</Text>
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  traitFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: Padding.p_5xs,
  },
  cheerfulIcon: {
    width: 40,
    height: 40,
    overflow: 'hidden',
  },
  iconContainer: {
    overflow: 'hidden',
  },
  trait1: {
    fontSize: FontSize.size_sm,
    lineHeight: 24,
    fontWeight: '500',
    fontFamily: FontFamily.interMedium,
    color: Color.textPrimary,
    textAlign: 'center',
    marginTop: 12,
  },
  trait2: {
    marginLeft: 8,
  },
  row1: {
    width: 342,
    flexDirection: 'row',
    marginTop: 8,
    padding: Padding.p_5xs,
  },
});

TraitsContainer.displayName = 'TraitsContainer';
export default TraitsContainer;
