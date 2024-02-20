import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding,
} from '~/global-components/GlobalStyles';

const DetailContainer = memo(() => {
  return (
    <View style={styles.details}>
      <View style={styles.weightAndHeight}>
        <View style={styles.weight}>
          <Text style={[styles.weight1, styles.weight1Typo]}>Weight</Text>
          <Text style={[styles.cm23cm, styles.yearsTypo]}>10cm - 23cm</Text>
        </View>
        <View style={styles.lineDivider}>
          <View style={styles.lineDividerChild} />
        </View>
        <View style={styles.height}>
          <Text style={[styles.weight1, styles.weight1Typo]}>Height</Text>
          <Text style={[styles.cm23cm, styles.yearsTypo]}>9cm - 31cm</Text>
        </View>
      </View>
      <View style={styles.lineDivider1}>
        <View style={styles.lineDividerChild} />
      </View>
      <View style={styles.lifeSpanFlexBox}>
        <Text style={[styles.lifeSpan1, styles.weight1Typo]}>Life Span</Text>
        <Text style={[styles.years, styles.yearsTypo]}>12 - 14 years</Text>
      </View>
      <View style={styles.lifeSpanFlexBox}>
        <Text style={[styles.lifeSpan1, styles.weight1Typo]}>Origin</Text>
        <Text style={[styles.years, styles.yearsTypo]}>Germany, France</Text>
      </View>
      <View style={[styles.description, styles.lifeSpanFlexBox]}>
        <Text style={[styles.theAlapahaBlue, styles.yearsTypo]}>
          The Alapaha Blue Blood Bulldog is a well-developed, exaggerated
          bulldog with a broad head and natural drop ears. The prominent muzzle
          is covered by loose upper lips. The prominent eyes are set well apart.
          The Alapahas coat is relatively short and fairly stiff. Preferred
          colors are blue merle, brown merle, or red merle all trimmed in white
          or chocolate and white. Also preferred are the glass eyes (blue) or
          marble eyes (brown and blue mixed in a single eye). The ears and tail
          are never trimmed or docked. The body is sturdy and very muscular. The
          well-muscled hips are narrower than the chest. The straight back is as
          long as the dog is high at the shoulders. The dewclaws are never
          removed and the feet are cat-like.
        </Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  weight1Typo: {
    textAlign: 'left',
    color: Color.iconPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
    lineHeight: 24,
    fontSize: FontSize.size_xs,
  },
  yearsTypo: {
    color: Color.textPrimary,
    fontFamily: FontFamily.interMedium,
    fontWeight: '500',
    textAlign: 'left',
    lineHeight: 24,
  },
  lifeSpanFlexBox: {
    alignItems: 'center',
    marginTop: 8,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  weight1: {
    alignSelf: 'stretch',
  },
  cm23cm: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interMedium,
    fontWeight: '500',
    alignSelf: 'stretch',
  },
  weight: {
    width: 131,
  },
  lineDividerChild: {
    backgroundColor: Color.surfaceStatusNeutral,
    flex: 1,
    overflow: 'hidden',
    alignSelf: 'stretch',
  },
  lineDivider: {
    width: 1,
    height: 48,
    marginLeft: 24,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  height: {
    marginLeft: 24,
    width: 131,
  },
  weightAndHeight: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  lineDivider1: {
    height: 1,
    marginTop: 8,
    overflow: 'hidden',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  lifeSpan1: {
    width: 100,
  },
  years: {
    marginLeft: 16,
    flex: 1,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interMedium,
    fontWeight: '500',
  },
  theAlapahaBlue: {
    fontSize: FontSize.size_sm,
    flex: 1,
  },
  description: {
    paddingTop: Padding.p_base,
  },
  details: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.surfaceDefault,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    marginTop: 24,
    alignSelf: 'stretch',
  },
});

DetailContainer.displayName = 'DetailContainer';
export default DetailContainer;
