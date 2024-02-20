import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding,
} from '~/global-components/GlobalStyles';
import CommentContainer from './CommentContainer';

const CommentsContainer = memo(() => {
  return (
    <View style={styles.comments}>
      <Text style={styles.title}>Comments</Text>
      <View style={styles.form}>
        <View style={styles.textArea}>
          <Text style={[styles.placeholderLabel, styles.sendTypo]}>
            Add a Comment
          </Text>
        </View>
        <View style={styles.button}>
          <Text style={[styles.send, styles.sendTypo]}>Send</Text>
        </View>
      </View>
      <View style={styles.list}>
        <CommentContainer />
        <CommentContainer propMarginTop={8} />
        <CommentContainer propMarginTop={8} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  sendTypo: {
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    textAlign: 'left',
  },
  title: {
    fontSize: FontSize.size_xs,
    lineHeight: 24,
    width: 342,
    textAlign: 'left',
    color: Color.iconPrimary,
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
  },
  placeholderLabel: {
    flex: 1,
    fontFamily: FontFamily.interRegular,
    color: Color.iconPrimary,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
  },
  textArea: {
    borderRadius: Border.br_9xs,
    borderStyle: 'solid',
    borderColor: '#001b40',
    borderWidth: 1,
    height: 104,
    padding: Padding.p_5xs,
    flexDirection: 'row',
    width: 342,
  },
  send: {
    color: Color.surfaceDefault,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
  },
  button: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.textDisabled,
    overflow: 'hidden',
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_xs,
    flexDirection: 'row',
    marginTop: 8,
  },
  form: {
    alignItems: 'flex-end',
    marginTop: 8,
  },
  list: {
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_base,
    marginTop: 8,
    alignSelf: 'stretch',
  },
  comments: {
    marginTop: 24,
    alignSelf: 'stretch',
  },
});

CommentsContainer.displayName = 'CommentsContainer';
export default CommentsContainer;
