
import React, { useState, useEffect } from 'react'

function Item(props) {
    const { item , value } = props;
    const [changeItem, setChangeItem] = useState(item);
    
    useEffect(() => {
        if (item.includes(value)) {
            let marked = item.replaceAll(value, "<mark>" + value + "</mark>")
            setChangeItem(marked)
        }
    }, [])

    return (
        <li>
            <div dangerouslySetInnerHTML={{
                __html: changeItem
            }} />
        </li>
    )
}

export default Item;