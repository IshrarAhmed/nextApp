 import cardStyle from "../styles/CarProduct.module.css"
 import Skeleton from "react-loading-skeleton"




 interface loaderskeletonProps{
    count:number
}
export default function LoaderSkeleton ( {count}:loaderskeletonProps){ 
    const skeletonsCount = []
    for(let i=0 ;i< count; i++){
        skeletonsCount.push(
            <div className={cardStyle["product-card"]} key={i} >

            {/* <img src={image} alt="Product" className={cardStyle['product-image']} loading="lazy"  /> */}
            <Skeleton height={146} width={120}/>
            
            <div className={cardStyle['product-details']}>
            <Skeleton height={20} width={200}  count={3}/>
            <Skeleton height={30} width={80} />
            
              <div className={cardStyle['button-container']}>
            
                <div className={cardStyle['clickable-icon']} >
                <Skeleton height={30} width={40} />
            
                 
                </div>
            
                <div className={cardStyle['clickable-icon']} >
             
                <Skeleton height={30} width={40} />
            
                </div>
              </div> 
            </div>
            </div>
        )
    }
    
    return (
        <>
       {skeletonsCount}

        </>
    )
}