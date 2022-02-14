import React from 'react'

function ToolTip({ label, children, id }) {
    return (
        <div className="tooltip">{label}
            <span className="tooltiptext" id={label}>{children}</span>
        </div>
    )
}

export default ToolTip