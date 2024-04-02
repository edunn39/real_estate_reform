import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

function Panel({data, active, animate, setAnimate}) {
    const nodeRef = useRef(null);
    
    return (
        <CSSTransition
            in={animate}
            timeout={1000}
            nodeRef={nodeRef}
            classNames="panel-fade"
            onEntered={() => setAnimate(false)}
        >
            <div ref={nodeRef}>
                {active === data.id &&
                    <div className="panel">
                    {data.content}
                    </div>
                }
            </div>
        </CSSTransition>
    )
}

export default Panel