
const styledFooter = {
    position: "fixed",
    width: "100%",
    bottom: "0",
    left: "0",
    padding: "15px"
}

const styledButton = {
    display: "block",
    background: "#3a80f7",
    color: "white",
    fontSize: "18px",
    border: "none",
    width: "100%",
    padding: "15px",
    borderRadius: "10px"
}

function FooterButton() {
    return (
        <div style={styledFooter}>
        <button style={styledButton}>{}개 금융사 연동하기</button>
        </div>
    )
}

export default FooterButton; 