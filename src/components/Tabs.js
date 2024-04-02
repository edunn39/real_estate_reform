import Tab from './Tab'

function Tabs({active, setActive, setAnimate}) {
    const tabData = [
        {id: 1, value: "About"},
        {id: 2, value: "Price Discovery"},
        {id: 3, value: "Alternate Solutions"},
    ]

    return (
        <div className="tabs">
            {tabData.map(data => (
                <Tab
                    key={data.id}
                    data={data}
                    active={active}
                    setActive={setActive}
                    setAnimate={setAnimate}
                />
            ))}
        </div>
    )
}

export default Tabs