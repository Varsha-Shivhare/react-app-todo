import React from 'react';

function List({item, handleDelete}) {
return <ul>
        {item.map((add, i) => <li key={i}>{add}<label onClick={() => handleDelete(i)}>&#10060;</label></li>)}
    </ul>
}

export default List;