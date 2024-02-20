import React, { memo } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding,
} from '~/global-components/GlobalStyles';

type BreedContainerType = {
  imageBox?: ImageSourcePropType;
  title?: string;
  description?: string;
  image?: { url: string };
};

const BreedContainer = memo(
  ({ title, description, image }: BreedContainerType) => {
    return (
      <View style={styles.breadCard}>
        <View style={styles.dogImage}>
          <Image
            style={styles.imageboxIcon}
            resizeMode="cover"
            source={{ uri: image?.url }}
          />
        </View>
        <View style={styles.details}>
          <Text style={[styles.title, styles.titleFlexBox]}>{title}</Text>
          <Text style={[styles.description, styles.titleFlexBox]}>
            {description}
          </Text>
        </View>
        <Image
          style={styles.iconsChevronRight}
          resizeMode="cover"
          source={require('../../../../../assets/icons_chevron_right.png')}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  titleFlexBox: {
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  imageboxIcon: {
    borderRadius: Border.br_9xs,
    width: 48,
    height: 48,
  },
  dogImage: {
    borderRadius: Border.br_5xs,
    borderStyle: 'solid',
    borderColor: '#7d4dc7',
    borderWidth: 1,
    padding: Padding.p_9xs,
    flexDirection: 'row',
  },
  title: {
    fontSize: FontSize.size_sm,
    fontWeight: '600',
    fontFamily: FontFamily.interSemibold,
    color: Color.textPrimary,
  },
  description: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    color: Color.iconPrimary,
    marginTop: 4,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 16,
  },
  iconsChevronRight: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  breadCard: {
    alignItems: 'center',
    marginTop: 8,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
});

BreedContainer.displayName = 'BreedContainer';
export default BreedContainer;
