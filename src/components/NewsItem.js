import React from 'react'

const NewsItem =(props)=> {
    
      let {title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div className='my-3'>
        <div className="card" >
          <div style={{display:"flex",justifyContent:"flex-end",position:"absolute", right:"0"}}>
          <span className=" badge rounded-pill bg-danger">{source} 
  </span>
  </div>
  <img src={!imageUrl?"https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/imagegallery/03_03_2020_19_01_27_1763153.jpg?width=920&format=webp":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title" style={{textStyle:"bold"}}>{title} </h5>
    <p className="card-text">{description}</p>
    <p className="card-text">
        <small className="text-denger" style={{color:"blue"}}>By {!author?"unknown":author} on {new Date(date).toLocaleDateString()}</small>
      </p>
    <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
 
}

export default NewsItem
