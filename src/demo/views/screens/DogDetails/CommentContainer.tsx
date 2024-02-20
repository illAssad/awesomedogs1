import React, { memo, useMemo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {
  Border,
  Color,
  FontFamily,
  FontSize,
} from '~/global-components/GlobalStyles';

type CommentContainerType = {
  /** Style props */
  propMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === 'unset' ? undefined : value };
};
const CommentContainer = memo(({ propMarginTop }: CommentContainerType) => {
  const commentStyle = useMemo(() => {
    return {
      ...getStyleValue('marginTop', propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[styles.comment, commentStyle]}>
      <View style={styles.content}>
        <View style={styles.avatar}>
          <Image
            style={styles.avatarIcon}
            resizeMode="cover"
            source={require('../../../../../assets/avatar.png')}
          />
        </View>
        <View style={styles.details}>
          <Text style={[styles.name, styles.nameFlexBox]}>Joshua</Text>
          <Text style={[styles.comment1, styles.nameFlexBox]}>
            This breed is well tempered and soft with kids.
          </Text>
        </View>
      </View>
      <View style={styles.lineDivider}>
        <View style={styles.lineDividerChild} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  nameFlexBox: {
    textAlign: 'left',
    color: Color.textPrimary,
    fontSize: FontSize.size_sm,
    alignSelf: 'stretch',
  },
  avatarIcon: {
    borderRadius: Border.br_13xl,
    width: 32,
    height: 32,
  },
  avatar: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  name: {
    lineHeight: 24,
    fontWeight: '600',
    fontFamily: FontFamily.interSemibold,
  },
  comment1: {
    fontFamily: FontFamily.interRegular,
    marginTop: 4,
  },
  details: {
    marginLeft: 16,
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  lineDividerChild: {
    backgroundColor: Color.surfaceSecondary,
    height: 1,
    overflow: 'hidden',
    flex: 1,
  },
  lineDivider: {
    width: 342,
    marginTop: 16,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  comment: {
    alignSelf: 'stretch',
  },
});

CommentContainer.displayName = 'CommentContainer';
export default CommentContainer;
