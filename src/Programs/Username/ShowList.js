import React from 'react';

function ShowList({item}) {
return <ul>
        {item.map((add, i) => <li key={i}>{add}</li>)}
    </ul>
}

export default ShowList;