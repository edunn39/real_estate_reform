import Panel from './Panel'

function Content({active, panelData, animate, setAnimate}) {
    return (
        <div className="content">
            <div className="content-container">
                {panelData.map(data => (
                    <Panel
                        key={data.id}
                        data={data}
                        active={active}
                        animate={animate}
                        setAnimate={setAnimate}
                    />
                ))}
            </div>
        </div>
    )
}

export default Content