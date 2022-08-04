const styleButton = {
    borderRadius: "20px",
    background: "#3a80f7",
    lineHeight: "1.5",
    color: "white", 
    cursor: "pointer", 
    padding: "5px 15px",
    border: "none",
    fontWeight: "600",
    margin: "2px"
}

function Slider() {
    return (
        <div className="App-Slider">
            <button style={styleButton}>업권별</button>
            <button style={styleButton}>이름순</button>
        </div>
    )
}

export default Slider; 