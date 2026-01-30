import {useState} from "react";

export default function LikeButton(){
let [isLiked, setLiked] = useState(false) ;

    const toggleLike = () => {
        setLiked(!isLiked);
        if (!isLiked) {
            console.log("isLiked!");
        } else {
            console.log("Unliked!");
        }
    };
let likeStyle={color:"blue"};
   return(
    <button onClick={toggleLike}>
        {isLiked ? <i className="fa-solid fa-thumbs-up" style={likeStyle}></i> : <i className="fa-regular fa-thumbs-up"></i>}
    </button>
   )
    
    }