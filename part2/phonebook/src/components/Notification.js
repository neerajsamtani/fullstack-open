import React from 'react'

const Notification = ({ data }) => {
    if (data === null) {
        return null
    }

    return (
        <div className={data.status}>
            {data.message}
        </div>
    )
}

export default Notification