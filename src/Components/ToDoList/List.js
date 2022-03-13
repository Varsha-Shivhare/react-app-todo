import React from 'react'

export default function List({item, handleDelete}) {
    return (
        <div>
            <ul>
                    {item.map((add, i) => <li key={i}>{add}<label className='cursor' onClick={() => handleDelete(i)}>&#10060;</label></li>)}
            </ul>
        </div>
    )
}
