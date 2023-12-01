import Card from "./Card";

const Catalogue = (props)=>{
    return(
        <div>
            <h1 className="font-extrabold text-4xl py-3" >Choose Stylish Rugs for Your Home</h1>
            <div className="">
                {
                  props.catData.map((catSinData) => {
                    return <Card key={catSinData.id} catSinData ={catSinData} className = ""/>
                  })
                }
            </div>
        </div>
    )
}
export default Catalogue;