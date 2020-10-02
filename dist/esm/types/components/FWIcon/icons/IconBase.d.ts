import React from 'react';
export interface IIconBase {
    size?: number;
    viewBox?: string;
    children?: SVGAElement;
    disabled?: boolean;
    style?: {
        [key: string]: string;
    };
}
declare const IconBase: React.FC<IIconBase>;
export default IconBase;
