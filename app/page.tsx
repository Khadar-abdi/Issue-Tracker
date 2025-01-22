import Image from 'next/image'
import Pagination from './components/pagination'

export default function Home() {
  return (
    <div>
      <Pagination itemCount={100} currentPage={10} pageSize={10} />
    </div>
  )
}
