import React, { useState } from 'react'
import Tabs from './Tabs'
import Content from './Content'
import panelData from './panelData'

function TabsMenu() {
    const [active, setActive] = useState(2)
    const [animate, setAnimate] = useState(false)

    return (
        <div className="tab-menu">
            <Tabs
                active={active}
                setActive = {setActive}
                setAnimate = {setAnimate}
            />
            <Content
                active={active}
                panelData={panelData}
                animate={animate}
                setAnimate={setAnimate}
            />
        </div>
    )
}



export default TabsMenu