import React from 'react';

function ShowList({item, handleValidate}) {
return <ul>
        {item.map((add, i) => <li key={i}>{add}<p onClick={() => handleValidate()}></p></li>)}
    </ul>
}

export default ShowList;