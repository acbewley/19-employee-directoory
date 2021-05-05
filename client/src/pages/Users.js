import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Card from '../components/Card/index.js'


function Users() {
  const [users, setUsers] = useState([])
  const [sort, setSort] = useState({
    sort: 'alphabetical'
  })

  useEffect(() => {
    loadUsers()
  }, [])

  function loadUsers() {
    API.getUsers()
      .then(res => {
        setUsers(res.data.results)
      })
      .catch(err => console.log(err));
  };

  return (
    <Container fluid>
      {users.map(user => {
        return <Row>
          <Col size="md-12">
            <Card
            name={user.name.first + " " + user.name.last}
            email={user.email}
            picture={user.picture.large}
            age={user.dob.age}
            />
          </Col>
        </Row>
      })}

    </Container>
  );
}


export default Users;
