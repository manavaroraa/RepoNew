import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";

function Exportexcel() {
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    const getuserdata = async () => {
      const userreq = await fetch("http://localhost:3001/user");
      const userres = await userreq.json();
      console.log(userres);
      setUserdata(userres);
    };
    getuserdata();
  }, []);

  // npm install react-csv --save

  return (
    <>
      <div>
        <div>
          <div>
            <CSVLink
              data={userdata}
              filename="InvoiceData"
              className="btn btn-success mb-3"
            >
              Export User Data
            </CSVLink>

            <table>
              <thead>
                <tr>
                  {/* <th scope="col">ClientEmail</th> */}
                  {/* <th scope="col"></th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Gender</th> */}
                </tr>
              </thead>
              <tbody>
                {userdata.map((getuser, index) => (
                  <tr key={index}>
                    {/* <td> {index + 1} </td> */}
                    {/* <td >{getuser.ClientEmail} </td> */}
                    {/* <td >{getuser.last_name} </td>
                    <td >{getuser.email} </td>
                    <td >{getuser.gender} </td>              */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Exportexcel;
