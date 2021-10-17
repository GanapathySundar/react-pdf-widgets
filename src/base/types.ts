export type RECORD = Record<string, number | string | boolean | Date>;
export type RECORDS = RECORD[];

/**
 * Definition of color for a specific element. It can be a background or color element
 */
export interface IColorDefinition {
    color: string;
    transparency?: number;
}

/**
 * Type of the border
 */
export type BorderType = 'solid' | 'dash' | 'dotted' | 'none';

/**
 * Border definition
 */
export interface IBorderDefinition {
    borderType?: BorderType
    color?: IColorDefinition;
}

/**
 *
 * Widget container props
 */
export interface IWidgetContainerProps {
    backgroundColor?: IColorDefinition;
    border?: IBorderDefinition;
}

/**
 * Props definition of the base widget. All widgets need to extend this class
 */
export interface IBaseWidgetProps {
    container?: IWidgetContainerProps;
    data: RECORDS;
}
