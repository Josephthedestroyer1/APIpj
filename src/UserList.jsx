import axios from "axios";
import { useState, useEffect } from "react";
import './app.css'

function UserList() {
     const [listOfUser , setListOfUser] = useState([])
     useEffect(() => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {setListOfUser(response.data)
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
    });
    console.log(listOfUser);
});

  return <div className="cards">
     {listOfUser.map((user,index) => (
     <div key={index} className="cardz">
     <div id="gradient"></div>
     <div className="card">
       <h2>{user.name}
       <span className="username">
       {" ("}{user.username}{")"}
       </span>
        </h2>
       <p>Student of IT in Czech republic.</p>
       <p>{user.address.city}{' '}{user.address.street}{" zipcode: "}{user.address.zipcode}</p>
       <p>Email {user.email}</p>
       <span class="left bottom">tel {user.phone}</span>
       <span class="right bottom">Website: {user.website}</span>
     </div>
     </div>
     ))
     
     }
  </div>;
}

export default UserList;
