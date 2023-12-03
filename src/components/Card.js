import { useState } from "react";

const Card = (props) => {
  const[currImg, setImage] = useState(props.catSinData.img1);
  function imgHandler(e)
  {
    setImage(e.target.src);
  }
   return (
     <div className="flex justify-around h-[80vh] mt-5">
        <img className="h-[95%]" src={currImg} width="700px" height="700px"/>
        <div className="flex flex-col justify-center items-center">
          <p className="bg-red-100 font-semibold text-sm">{props.catSinData.des}</p>
           <div className="flex">
             <img src={props.catSinData.img1} height="100px" width="100px" onClick={imgHandler}/>
             <img src={props.catSinData.img2} height="100px" width="100px" onClick={imgHandler}/>
             <img src={props.catSinData.img3} height="100px" width="100px" onClick={imgHandler}/>
             <img src={props.catSinData.img4} height="100px" width="100px" onClick={imgHandler}/>
           </div>
        </div>
     </div>
   )
}
export default Card;
