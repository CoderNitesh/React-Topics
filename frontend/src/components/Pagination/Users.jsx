import React, {useState} from 'react'
import JsonData from '../../data/MOCK_DATA.json'
import ReactPaginate from 'react-paginate'
// Components
import Table from './Table'



export default function Users() {
    const [users, setUsers] = useState(JsonData.slice(0, 55))
    const [pageNumber, setPageNumber] = useState(0)

    // ********************************** Logic for Pagination **********************************
    const usersPerPages = 10  // per page how many entry you want to see
    const usersVisited = pageNumber * usersPerPages // if you are in 4th page that means you visited pagenumber = 4 and usersPerPages = 10 i.e 4*10 = 40
    const displayUsers = users.slice(usersVisited, usersVisited + usersPerPages) // Display users slice collect the that 10 users that gone display on the page

    const pageCount = Math.ceil(users.length / usersPerPages) // total number of pages want to be displayed

    // handle Events
    const changePage = ({selected}) =>{
      console.log(selected)
      setPageNumber(selected)
    }
    // ********************************** Logic for Pagination **********************************

    return (
        <div className='container'>
          <Table users={displayUsers} />
          <ReactPaginate 
            previousLabel = {'Previous'}
            nextLabel = {'Next'}
            pageCount = {pageCount}
            onPageChange={changePage}
            containerClassName = {"paginationBtn"}
            previousLinkClassName={'previousBtn'}
            nextLinkClassName={'nextBtn'}
            disabledClassName={'paginationDisabled'}
            activeClassName={'paginationActive'}
          /> 
        </div>
    )
}
