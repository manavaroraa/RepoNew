import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import {
  Button,
} from "reactstrap";
import Exportexcel from '../examples/Exceel'
import {Link} from 'react-router-dom'
const Search = () => {
  const [data, getData] = useState([]);
  const [query, setQuery] = useState("");
  const URL = "http://localhost:3001/user";
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())

      .then((response) => {
        console.log(response);
        getData(response);
      });
  };
  return (
    <>
       <Header/>
       <Button color="info" href="#pablo" to="/admin/Page" tag={Link}>
          <small>Page</small>
        </Button>
        <h1>Listing</h1>
        <Exportexcel/>
      <input
        type="text"
        name="search"
        className="input-new"
        onChange={(event) => setQuery(event.target.value)} placeholder="Search"
      />

        {data
          .filter((post) => {
            if (query === "") {
              return post;
            } else if (post.ClientEmail.toLowerCase().includes(query.toLowerCase())) {
              return post;
            }
          })
          .map((post, index) => (
            <div className="box" key={index}>
            <div class="container mt-3">
  <h2>Listing</h2>
  <p></p>            
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>ClientEmail</th>
        <th>Amount</th>
        <th>InvoiceLink</th>
        <th>ClientType</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{post.ClientEmail}</td>
        <td>{post.Amount}</td>
        <td>{post.InvoiceLink}</td>
        <td>{post.ClientType}</td>
        <td>{post.Date}</td>
        <td>{post.Status}</td>
      </tr>
    </tbody>
  </table>
</div>
</div>
          ))}
    </>
  );
}

export default Search;
//  import React, { useState, useEffect } from "react";
// function TableData() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [data, getData] = useState([]);
//   const URL = "http://localhost:3001/user";

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     fetch(URL)
//       .then((res) => res.json())

//       .then((response) => {
//         console.log(response);
//         getData(response);
//       });
//   };
//   return (
  
//     <div className="App">
//       <h1>Listing</h1>
//       <input
//         type="text"
//         name="search"
//         onChange={(event) => {
//           setSearchTerm(event.target.value);
//         }}
//       />
//       {data.filter((val =>{
//         if (searchTerm == ""){
//           return val
//         } else if (val.email.toLowerCase().includes(searchTerm.toLowerCase())){
//           return val
//         }
//       }).map((val, key) => (
//           <div className="user" key={key}>
//             <tbody>
//               <tr>
//                 <th>Email</th>
//                 <th>Amount</th>
//                 <th>Client Type</th>
//                 <th>Invoice Link</th>
//                 <th>Date</th>
//               </tr>
//               <tr>
//                 <td>{val.email}</td>
//                 <td>{val.Amount}</td>
//                 <td>{val.ClientType}</td>
//                 <td>{val.InvoiceLink}</td>
//                 <td>{val.date}</td>
//               </tr>
//             </tbody>
//           </div>
//            )
//            )}
//           </div>
//   );
// };


// export default TableData; 