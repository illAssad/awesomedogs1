import React, { useCallback, useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Breed } from '~/demo/domain/entities/Breed';
import { getBreedsAction } from '~/demo/host/redux/actions';
import { DogsListScreenProps } from '~/demo/views/navigation/types';
import {
  Color,
  FontFamily,
  FontSize,
  Padding,
} from '~/global-components/GlobalStyles';
import { AppDispatch, RootState } from '~/store';
import BreedContainer from './BreedContainer';

const DogsListScreen: React.FC<DogsListScreenProps> = ({
  navigation,
  route,
}: DogsListScreenProps) => {
  const [limit, setLimit] = useState({ limit: 10, page: 1 });
  const dispatch = useDispatch<AppDispatch>();
  const breeds = useSelector((state: RootState) => state.dogs.breeds);

  const getBreeds = useCallback(async () => {
    try {
      dispatch(getBreedsAction({ limit: limit.limit, page: limit.page }));
    } catch (exception) {
      console.error(exception);
    }
  }, [dispatch, limit.limit, limit.page]);

  React.useEffect(() => {
    getBreeds();
  }, [getBreeds]);

  const handleSelectBreed = (breed: Breed) => {
    navigation.navigate('DogDetailsScreen');
  };

  return (
    <ScrollView
      style={styles.list}
      contentContainerStyle={styles.listScrollViewContent}
    >
      <View style={[styles.sectionTitle, styles.list1SpaceBlock]}>
        <View style={[styles.label, styles.labelFlexBox]}>
          <Text style={[styles.breads, styles.breadsTypo]}>Breeds</Text>
          <Pressable style={[styles.iconsFilter, styles.iconsLayout]}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require('../../../../../assets/icons_filter.png')}
            />
          </Pressable>
        </View>
        <View style={styles.lineDivider}>
          <View style={styles.lineDividerChild} />
        </View>
      </View>
      <View style={[styles.list1, styles.list1SpaceBlock]}>
        {breeds.map((breed) => (
          <View key={breed.id}>
            <Pressable
              testID="breed-container"
              style={styles.labelFlexBox}
              onPress={() => navigation.navigate('DogDetailsScreen', breed)}
            >
              <BreedContainer
                title={breed.name}
                description={breed.id}
                image={breed.image}
              />
            </Pressable>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listScrollViewContent: {
    flexDirection: 'column',
    paddingTop: 20,
    paddingBottom: 48,
  },
  list1SpaceBlock: {
    paddingHorizontal: Padding.p_5xl,
    alignSelf: 'stretch',
  },
  labelFlexBox: {
    marginTop: 6,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  breadsTypo: {
    color: Color.iconPrimary,
    fontFamily: FontFamily.interRegular,
    textAlign: 'left',
  },
  iconsLayout: {
    height: 24,
    width: 24,
  },
  breads: {
    lineHeight: 24,
    textAlign: 'left',
    fontSize: FontSize.size_sm,
    flex: 1,
  },
  icon: {
    height: '100%',
    width: '100%',
  },
  iconsFilter: {
    marginLeft: 8,
  },
  label: {
    flexDirection: 'row',
  },
  lineDividerChild: {
    backgroundColor: Color.surfaceSecondary,
    height: 1,
    overflow: 'hidden',
    flex: 1,
  },
  lineDivider: {
    marginTop: 8,
    flexDirection: 'row',
    alignSelf: 'stretch',
    overflow: 'hidden',
  },
  sectionTitle: {
    paddingTop: Padding.p_5xl,
    zIndex: 0,
    paddingBottom: Padding.p_5xs,
  },
  list1: {
    paddingVertical: 0,
    zIndex: 1,
  },
  list: {
    backgroundColor: Color.surfaceDefault,
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%',
    flex: 1,
  },
});

export default DogsListScreen;
