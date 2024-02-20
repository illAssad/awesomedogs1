import * as React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding,
} from '~/global-components/GlobalStyles';
import { DogsListScreenProps } from '../../navigation/types';
import CalmContainer from './CalmContainer';
import CommentsContainer from './CommentsContainer';
import DetailContainer from './DetailContainer';

const DogDetailsScreen: React.FC<DogsListScreenProps> = ({
  navigation,
  route,
}: DogsListScreenProps) => {
  const { image, name } = route.params;

  return (
    <ScrollView>
      <View style={[styles.details, styles.detailsLayout]}>
        <Image
          testID="dog-image"
          style={styles.detailsChild}
          resizeMode="cover"
          source={{ url: image?.url }}
        />
        <LinearGradient
          style={styles.content}
          locations={[0, 1]}
          colors={['#f2f3f5', 'rgba(242, 243, 245, 0)']}
          useAngle={true}
          angle={180}
        >
          <View style={styles.title}>
            <Text style={[styles.detailsContainer, styles.title1Typo]}>
              Details
            </Text>
            <Text style={styles.smallVerminHunting}>{name}</Text>
          </View>
          <DetailContainer />
          <CalmContainer />
          <CommentsContainer />
        </LinearGradient>
        <View style={[styles.topNavBar, styles.topNavBarPosition]}>
          <View style={styles.navigation}>
            <Pressable
              testID="back-button"
              style={styles.iconsChevronLeftWrapper}
              onPress={() => navigation.navigate('DogsListScreen')}
            >
              <Image
                style={styles.iconsChevronLeft}
                resizeMode="cover"
                source={require('../../../../../assets/icons_chevron_left.png')}
              />
            </Pressable>
            <Text style={[styles.title1, styles.title1Typo]}>Details</Text>
          </View>
        </View>
        <View style={[styles.indicator, styles.topNavBarPosition]}>
          <View style={styles.line} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  detailsLayout: {
    width: '100%',
    overflow: 'hidden',
  },
  title1Typo: {
    color: Color.textPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
    textAlign: 'left',
  },
  topNavBarPosition: {
    left: 0,
    position: 'absolute',
    width: 390,
  },
  detailsChild: {
    height: 248,
    zIndex: 0,
    width: 390,
  },
  detailsContainer: {
    fontSize: 24,
    textAlign: 'left',
    lineHeight: 24,
  },
  smallVerminHunting: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: FontFamily.interMedium,
    color: Color.iconPrimary,
    marginTop: 4,
    textAlign: 'left',
    lineHeight: 24,
  },
  title: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    alignSelf: 'stretch',
  },
  content: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_13xl,
    backgroundColor: 'transparent',
    zIndex: 1,
    alignSelf: 'stretch',
    overflow: 'hidden',
  },
  iconsChevronLeft: {
    width: 24,
    height: 24,
  },
  iconsChevronLeftWrapper: {
    padding: Padding.p_5xs,
    flexDirection: 'row',
  },
  title1: {
    fontSize: FontSize.size_base,
    marginLeft: 24,
    textAlign: 'left',
  },
  navigation: {
    paddingLeft: Padding.p_base,
    paddingRight: Padding.p_5xl,
    marginTop: 2,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  topNavBar: {
    top: 0,
    backgroundColor: Color.topbarBG,
    zIndex: 2,
    marginTop: 18,
  },
  line: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.iconPrimary,
    width: 135,
    height: 5,
  },
  indicator: {
    bottom: 0,
    paddingHorizontal: Padding.p_53xl,
    paddingTop: Padding.p_lgi,
    paddingBottom: Padding.p_5xs,
    justifyContent: 'center',
    zIndex: 3,
    alignItems: 'center',
  },
  details: {
    backgroundColor: Color.surfaceDefault,
    flex: 1,
    paddingTop: Padding.p_67xl,
    paddingBottom: Padding.p_13xl,
    overflow: 'hidden',
  },
});

export default DogDetailsScreen;
