const CustomButton = (props) => {
    const title = props.title;
    const backgroundColor = props.backgroundColor;
    const width = props.width;
    const color = props.color
    return (
        <>
            <div>
                <button style={{backgroundColor:backgroundColor, width:width, fontSize:30, color: color, padding:20, borderRadius:30, cursor:'pointer', }}>{title} </button>
            </div>
        </>
    );
}

export default CustomButton;