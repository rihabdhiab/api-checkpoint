import React from "react";
import { Table } from "react-bootstrap";

export default function UserList({ users }) {
  return (
    <div className="user-list">
      <Table style={{border:'2px black solid'}} bordered hover>
        <thead>
          <tr >
            <th style={{backgroundColor:' rgb(231, 228, 228) '}}><h5>#</h5></th>
            <th style={{backgroundColor:'rgb(210, 245, 247)'}}> <h5>Name</h5></th>
            <th style={{backgroundColor:'rgb(180, 231, 214)'}}> <h5>UserName</h5></th>
            <th style={{backgroundColor:'rgb(252, 225, 230)'}}><h5>Email</h5></th>
            <th style={{backgroundColor:'rgb(248, 214, 150)'}}><h5>Address</h5></th>
            <th style={{backgroundColor:'rgb(229, 245, 158)'}}><h5>Phone</h5></th>
            <th style={{backgroundColor:'rgb(235, 178, 235)'}}><h5>Website</h5></th>
            <th style={{backgroundColor:'rgb(223, 217, 217)'}}><h5>Company</h5></th>
          </tr>
        </thead>
        {users.map((user, key)=>
        <tbody key={user.id}>
          <tr >
           <td style={{backgroundColor:' rgb(231, 228, 228) '}}> <h5>{user.id}</h5></td>
            <td style={{backgroundColor:'rgb(210, 245, 247)'}}>{user.name}</td>
            <td style={{backgroundColor:'rgb(180, 231, 214)'}}>{user.username}</td>
            <td style={{backgroundColor:'rgb(252, 225, 230)'}}>{user.email}</td>
            <td style={{backgroundColor:'rgb(248, 214, 150)'}}> {user.address.street}, {user.address.suite}, {user.address.city},{user.address.zipcode}</td>
            <td style={{backgroundColor:'rgb(229, 245, 158)'}}>{user.phone}</td>
            <td style={{backgroundColor:'rgb(235, 178, 235)'}}>{user.website}</td>
            <td style={{backgroundColor:'rgb(223, 217, 217)'}}>{user.company.name} <br/>  {user.company.catchPhrase} <br/> {user.company.bs} </td>
            
          </tr>
        </tbody>
        )}
      </Table> 
      
    </div>
  );
}
