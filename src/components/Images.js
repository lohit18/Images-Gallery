const Images = ({data}) => {
    
    return(
        <div  className="flex-container">
            {
                data.map((item)=>{
                    const {farm, server, id, secret} = item
                    return(
                        <div key={item.id}>
                        <div className="photo">
                           <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`} alt="random photos"  width="250px" height="200"></img>
                       </div>  
                      </div> 
                    )
                }
    
                )
            }
        </div>
    )
};

export default Images;