import {View, Text} from '@react-pdf/renderer';
import * as React from 'react';
import WidgetContainer from '../../../base/WidgetContainer';
import {ITableProps} from '../../types';

/**
 * Table Component
 *
 * Renders a table at the specified container
 * @param props
 * @constructor
 */
const Table: React.FC<ITableProps> = (props) => {
    return <WidgetContainer {...props.container}>
        <Text>Sample table to be rendered here</Text>
    </WidgetContainer>
};

export default Table;
