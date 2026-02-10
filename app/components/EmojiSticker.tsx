import { ImageSourcePropType, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

type Props = {
  imageSize: number;
  stickerSource: ImageSourcePropType;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  console.log('LAGARI!..', imageSize, stickerSource)
  const scaleImage = useSharedValue(imageSize);
  const doubleTap = Gesture.Tap()
  .numberOfTaps(2)
  .onStart(() => {
    if (scaleImage.value !== imageSize * 4) {
      scaleImage.value = scaleImage.value * 4;
    } else {
      scaleImage.value = Math.round(scaleImage.value / 4);
    }
  });

  const imageStyle = useAnimatedStyle(() => {
  return {
    width: withSpring(scaleImage.value),
    height: withSpring(scaleImage.value),
  };
});


  return (
    <View style={{ top: -350 }}>
      {/* <Image source={stickerSource} style={{ width: imageSize, height: imageSize }} /> */}
      <GestureDetector gesture={doubleTap}>
       <Animated.Image
        source={stickerSource}
        resizeMode="contain"
        style={[imageStyle, { width: imageSize, height: imageSize }]}
      />
      </GestureDetector>
    </View>
  );
}
