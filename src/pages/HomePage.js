import React from 'react';

import Spotlight from '../components/Spotlight';

function HomePage(props) {
    return (
        <Spotlight 
        title={props.title}
        subTitle={props.subTitle}
        />
        
    );
}

export default HomePage; 