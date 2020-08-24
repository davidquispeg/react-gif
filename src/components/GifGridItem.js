import React from 'react'
export const GifGridItem = ({id,title,url}) => {
//export const GifGridItem = (props) => {
    //console.log(props.img.title);
    return (
        <div className="card animate__animated animate__backInLeft">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
