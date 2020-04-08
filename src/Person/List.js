import React from 'react';

const DisplayItem = (props) => (
    <ul>
        {props.itemList.map((add, i) =><li key={i}>{add}</li> )}
    </ul>
)


export default DisplayItem;