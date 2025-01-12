
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const IssueFormSkeleton = () => {
  return (
    <div className='max-w-xl space-y-5'>
    <h1 className=' text-slate-400 text-xl my-3 font-sans font-semibold' > Create Issue </h1>

    

    <form className='flex  flex-col   space-y-5'

          >
        {/* creating Issues */}


      <Skeleton height='2rem'/>
      <Skeleton height={300}/>
      <Skeleton   />
     
       

    </form>
</div>
  )
}

export default IssueFormSkeleton