let Forecast = (props)=>{
    let data = props.item
    console.log(data)
    return(
        <div>
             <h1>Temperature for remaining days : </h1>
             {data.map((eachData)=>(
                <h4>{Math.round((eachData.temp.day)-273)}</h4>
             ))}
        </div>
        
    )

}

export default Forecast