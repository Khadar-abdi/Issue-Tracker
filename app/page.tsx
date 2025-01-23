import Pagination from './components/pagination'

 
async function Home({searchParams}: {searchParams: {page: string}}) {
  const SearchParams = await searchParams;
  return (
    <div>
      <Pagination itemCount={100}  pageSize={2} currentPage={parseInt(SearchParams.page)} />
    </div>
  )
}
export default Home
