
import furniture from "./assets/furniture.webp"
function CustImg({src,pt}){
    return(
        <div className="cust-img" style={{paddingTop:pt}}>
            <img src={furniture} alt="" />
        </div>
    )
}

export default CustImg