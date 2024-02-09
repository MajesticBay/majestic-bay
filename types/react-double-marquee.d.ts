// react-double-marquee.d.ts
declare module 'react-double-marquee' {
    import { ComponentType, ReactNode } from 'react';
  
    interface MarqueeProps {
      children?: ReactNode; // Add this line
      direction?: "left" | "right";
      childMargin?: number;
      delay?: number;
      scrollWhen?: string;
      speed?: number;
    }
  
    const Marquee: ComponentType<MarqueeProps>;
    export default Marquee;
  }
  