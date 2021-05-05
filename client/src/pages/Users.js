import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Card from '../components/Card/index.js'
import {SortMenu, ShowMenu} from '../components/Menu/index'

function Users() {
  const [users, setUsers] = useState([])
  const [sortChoice, setSort] = useState(1)

  useEffect(() => {
    API.getUsers()
      .then(res => {
        setUsers(res.data.results)
      })
      .catch(err => console.log(err));
  }, [])

  function sortAlph(a, b) {
    if (a.name.last < b.name.last) {
      return -1;
    } else if (a.name.last > b.name.last) {
      return 1;
    } else {
      return 0
    }
  }

  function sortAge(a, b) {
    if (a.dob.age < b.dob.age) {
      return -1;
    } else if (a.dob.age > b.dob.age) {
      return 1;
    } else {
      return 0
    }
  }

  const handleMenuChange = event => {
    if (event.target.value === '1') {
      setSort(1)
    } else if (event.target.value === '2') {
      setSort(2)
    }
  }

  return (
    <Container fluid>
      <SortMenu
        onChange={handleMenuChange}
      />
      <ShowMenu />
      {users.sort(sortChoice === 1 ? sortAlph : sortAge).map(user => {
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
