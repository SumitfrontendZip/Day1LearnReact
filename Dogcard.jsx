function Dogcard(props) {
    let title = "This is a Dog Card"
    return (
        <>
            <h1>{title}</h1>
            <img src={props.src} alt="" />
        </>
    )
}

export default Dogcard;