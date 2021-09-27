import React from 'react';


const Comment = (props) => {
    console.log(props);
    const style1 = {
        fontSize: '15px',
        display: 'flex',
    }
    const style2={
        flex: 1,
       
    }
    const style3={
        flex: 2,
        color: '#8E8E8E',
    }
    return (
        <div className="comment1" style={style1} >
            <div className="second">
            <a href="/" className="avatar1">
                <img src={props.picture} alt="dp" className="dp" />
            </a>
            <div className="content" >
                <a href="/" className="commentor1">
                    <span style={style2}><strong>{props.name}</strong></span>
                </a>
                <div className="metadata1" >
                    <span className="date1" style={style3}>
                     {props.time}
                    </span>
                </div>
                
                <div className="text1" style={{font:'15px'}}>
                    <strong>{props.text}</strong>
                </div>
               <br/>
            </div>
            </div>
        </div>
    )
}
export default Comment;