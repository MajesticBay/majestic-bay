import React from 'react';
import { Btn } from './Btn';

export const Banner: React.FC = () => {
    return (
        <div className="banner">
            <p className="banner__text">We always solve client's problem in the most optimal and effective way.</p>
            <Btn className={"banner__btn"} dark={true} />
        </div>
    )
}