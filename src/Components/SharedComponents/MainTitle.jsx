import React from 'react';

const MainTitle = (props) => {
    const { heading } = props

    return (
        <div>
            <h2 className="text-3xl font-bold">{heading}</h2>
            <div className="h-1 w-[106px] mt-3 rounded-md bg-gradient-to-br from-blue-600 to-purple-600 mx-auto" />
        </div>
    );
};

export default MainTitle;