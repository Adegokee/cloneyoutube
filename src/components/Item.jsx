import React from 'react';
import {Link} from "react-router-dom";


const myurl ="https://youtube.com/video/";


const Item = ({x}) => {
  return (
    <div style={{margin:'30px', width:'350px'}} >
         <Link to={`${myurl}${x.id.videoId}`}> <img style={{width:"300px"}} src={x.snippet?.thumbnails?.high.url} alt="" /></Link> <br />
         
           <div>
           <small>{x.snippet?.title.slice(0, 70)}</small>
            <p>{x.id.videoId}</p>
           </div>
    </div>
  )
}

export default Item