import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingIssueDetailsPage =   () => {
  

   
  return (
    <div className='flex flex-row max-w-screen w-full '>
            <div className='flex flex-col px-10 w-1/2 space-y-3   '>

                <Skeleton/>
                <div className='flex  items-center gap-10 w-full px-4 mt-4 '>
                <Skeleton width={100}/>
                <Skeleton width={100}/>
                                      
                </div>


                <div className='w-full h-auto shadow shadow-[#ffeed5] rounded px-4 prose'>
                    
                <Skeleton count={9}/>
                </div> 
            </div>
            <div className='w-fit'>
                 <Skeleton width={80}/>
            </div>
 
        </div>
  )
}

export default LoadingIssueDetailsPage