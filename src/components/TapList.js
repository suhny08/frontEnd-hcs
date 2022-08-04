

const tabList = [
    {tabName: '추천', id: 'rcmm', isOn: true}, 
    {tabName: '은행', id: 'bank', isOn: false}, 
    {tabName: '캐피탈', id: 'capital', isOn: false}, 
    {tabName: '카드', id: 'card', isOn: false}, 
];

const minWidth = Math.floor(window.innerWidth / tabList.length)


const Tab = (props) => {
    const tabName = props.tab.tabName;
    const isOn = props.tab.isOn;
    const tabId = props.tab.id;

    const changeTab = () => {
        document.querySelector('.tabList li a.on').classList.remove('on');
        document.querySelector('.tabList li a#' + tabId).classList.add('on');
    };

    return (
        <li role="presentation" style={{minWidth: props.minWidth + 'px'}}>
            <a href="#" 
                role="tab" 
                tabIndex="0" 
                id={tabId}
                aria-selected={isOn.toString()} 
                className={isOn ? 'on' : ''}
                onClick={changeTab}>
                <span>{tabName}</span>
            </a>
        </li>
    );
};


function TapList({tapId, getTapId}) {
    
    return (
        <div className="tab">
            <ul className="tabList" role="tabList" style={{whiteSpace: "nowrap"}}>
            {
                tabList && 
                tabList.map (v => {
                    return <Tab key={v.id}
                                tab={v}
                                minWidth={minWidth} />
                })
            }
            </ul>
        </div>
    )
}

export default TapList; 