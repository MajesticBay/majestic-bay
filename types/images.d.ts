declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.svg' {
    const content: string;
    export default content;
}

// declare module '*.svg' {
//     import React = require('react');
//     const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
//     export default SVG;
// }