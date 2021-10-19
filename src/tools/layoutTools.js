import { Dimensions } from 'react-native';
import {
    widthPercentageToDP as wp2dp,
    heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';

export const wp = dimension => {
    return wp2dp((dimension / 500) * 100 + '%');
};
  
export const hp = dimension => {
    return hp2dp((dimension / 1000) * 100 + '%');
};

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;