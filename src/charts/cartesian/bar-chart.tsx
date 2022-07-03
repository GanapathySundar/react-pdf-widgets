import {View, Text} from '@react-pdf/renderer';
import * as React from 'react';
import {IBaseChartProps} from '../types';

export interface IBarChartProps<T extends Object> extends IBaseChartProps<T> {
}

const BarChart: React.FC = <T extends Object>(props: IBarChartProps<T>) => {
    return <View>
        <Text>Bar chart to be rendered here</Text>
    </View>
};

export default BarChart;
