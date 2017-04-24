import { Dimensions } from 'react-native';

const deviceWidthDp = Dimensions.get('window').width;
const UI_WIDTH_PX = 375;
const PxToDp = (uiElementPx) => {
    return uiElementPx * deviceWidthDp / UI_WIDTH_PX;
}

export default PxToDp;

