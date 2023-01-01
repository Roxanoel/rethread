import { View } from 'react-native';

function Spacer({ height }) {
    const defaultHeight = 16;

    return (
        <View style={{height: height ? height : defaultHeight}} />
    )
}

export default Spacer;