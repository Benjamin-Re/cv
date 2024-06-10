function Section(props) {

    return (
        <>
            <h3>{props.title}</h3>
            { (props.active === props.title) ?
                Object.keys(props.data).map((field) => (
                    <div key={field}>
                        <label htmlFor={field}>{field}: </label>
                        <input
                            id={field} 
                            type="text" 
                            value={props.data[field]}
                            onChange={(e)=>{props.handleChange(props.title, field, e.target.value)}}
                        />
                    </div>
                ))
            : null}
            <button type='button' onClick={()=>{props.handleClick(props.title)}}>show</button>
        </>
    )
}

export default Section