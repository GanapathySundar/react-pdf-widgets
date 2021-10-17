import * as React from 'react';
import {IWidgetContainerProps} from './types';
import {StyleSheet, View} from '@react-pdf/renderer';

const deriveWidgetContainerStyles = (props: IWidgetContainerProps) => {
    return StyleSheet.create({
        'container': {
            backgroundColor: props && props.backgroundColor ? props.backgroundColor.color : 'transparent'
        }
    })
};

const WidgetContainer: React.FC<IWidgetContainerProps> = (props) => {
    const styles = React.useMemo(() => {
        return deriveWidgetContainerStyles(props);
    }, [props.backgroundColor, props.border]);
    return <View debug style={styles.container}>
        {props.children}
    </View>
};

export default WidgetContainer;
