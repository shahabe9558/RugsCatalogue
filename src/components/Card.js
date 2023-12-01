const Card = (props) => {
   return (
     <div className="flex justify-around h-[80vh] mt-5">
        <img className="h-[95%]" src={props.catSinData.img1} width="700px" height="700px"/>
        <div className="flex flex-col justify-center items-center">
          <p className="bg-red-100 font-semibold text-sm">{props.catSinData.des}</p>
           <div className="flex">
             <img src={props.catSinData.img2} height="150px" width="150px"/>
             <img src={props.catSinData.img3} height="150px" width="150px"/>
             <img src={props.catSinData.img4} height="150px" width="150px"/>
           </div>
        </div>
     </div>
   )
}
export default Card;
