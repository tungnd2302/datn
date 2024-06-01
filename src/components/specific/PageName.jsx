import React from 'react';

function PageName(props) {
    return (
        <h2>
            {props.name || "Untitle"}
        </h2>
    );
};

export default PageName;