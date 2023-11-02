import React from 'react'

export default function Title({ name, title }) {
  return (
    <div className='row'>
      <div className='col-10 mx-auto my-2 text-center text-title'>
        <h1 className='text-capitalize font-weight-bold'>
          {name} <strong className='text-blue'>{title}</strong>
        </h1>
        <div className='row'>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>

        </div>
        <div class="row-md-4">
        <label for="cars">Sort by:</label>
          <select name="cars" id="cars">
            <option value="volvo">Price</option>
            <option value="saab">Brand</option>
            <option value="opel">Rating</option>
            
          </select>


        </div>


      </div>

    </div>
  )
}
