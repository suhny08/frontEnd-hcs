import mockData from '../list.json';

function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }
   const images = importAll(require.context('../images', false, /\.(png)$/));


const styleContainer = {
    display: "grid",
    gridTemplateColumns: "33% 33% 33%",
    background: "#fafafa",
    color: "#a3a3a3",
    borderRadius: "15px"
} 

const styleItem = {
    padding: "20px", 
    textAlign: "center"
}

function FLists() {
    return (
        <div >
            <ul style={styleContainer}>
                {
                    mockData.orgList.map((e, idx) => (
                    e.mdatRcmmYn === "Y" &&
                    <li style={styleItem} key={idx} id={idx} onClick={(e => console.log(e))}>
                        <span>{}</span>
                        <img src={images[e.mdatOrgId+"_L.png"]} alt={idx}/>
                    </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FLists; 