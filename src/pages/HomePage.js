import React from 'react';

import Spotlight from '../components/Spotlight';

function HomePage(props) {
    return (
        <Spotlight 
        title={props.title}
        subTitle={props.subTitle}
        text={props.text}
        />
    );
}

export default HomePage; 