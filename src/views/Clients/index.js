import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table, Button, Form, Col, Container } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import ClientsItem from '../../components/ClientsItem'
import MainModal from '../../components/MainModal'

const Clients = () => {
  const [clients, setClients] = useState([])
  const [modalIsOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  const searchClients = clients.filter((item) => item.first_name.toLowerCase().includes(search))

  useEffect(() => {
    axios('https://620e7ad2585fbc3359e4344b.mockapi.io/test-physical').then(({ data }) =>
      setClients(data)
    )
  }, [])

  const onSend = (data) => {
    if (data.pay_status === 'Payed') {
      data.pay_status = true
    } else if (data.pay_status === 'Not payed') {
      data.pay_status = false
    }
    axios
      .post('https://620e7ad2585fbc3359e4344b.mockapi.io/test-physical', data)
      .then(({ data: client }) => {
        setClients([...clients, client])
        setIsOpen(false)
        reset()
      })
  }

  const deleteClient = (id) => {
    axios
      .delete(`https://620e7ad2585fbc3359e4344b.mockapi.io/test-physical/${id}`)
      .then(() => setClients(clients.filter((item) => item.id !== id)))
  }

  const editClient = (id, data) => {
    if (data.pay_status === 'Payed') {
      data.pay_status = true
    } else if (data.pay_status === 'Not payed') {
      data.pay_status = false
    }
    axios
      .put(`https://620e7ad2585fbc3359e4344b.mockapi.io/test-physical/${id}`, data)
      .then(({ data }) =>
        setClients(clients.map((item) => (item.id === id ? { ...item, ...data } : item)))
      )
  }

  const handleInput = (e) => {
    setSearch(e.target.value.trim().toLowerCase())
  }

  function closeModal() {
    setIsOpen(false)
  }

  const tableSort = () => {
    const sorted = [...clients].sort((a, b) =>
      a.first_name.toLowerCase() - b.first_name.toLowerCase() ? 1 : -1
    )
    setClients(sorted)
  }

  return (
    <Container>
      <Button onClick={tableSort} className="btn btn-sm mb-2">
        Sort by first name
      </Button>
      <Form.Group as={Col} controlId="formGridSearch">
        <Form.Label>Search by first name</Form.Label>
        <Form.Control
          id="formGridSearch"
          type="text"
          className="w-25 mb-3"
          onChange={handleInput}
        />
      </Form.Group>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Pay status</th>
            <th>Email</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {searchClients.map((item, idx) => (
            <ClientsItem
              key={item.id}
              item={item}
              idx={idx}
              editClient={editClient}
              deleteClient={deleteClient}
              onSend={onSend}
              closeModal={closeModal}
              modalIsOpen={modalIsOpen}
              setIsOpen={setIsOpen}
            />
          ))}
        </tbody>
      </Table>
      <Button className="edit-btn d-block mt-5" onClick={() => setIsOpen(true)}>
        Add student
      </Button>
      <MainModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        onSend={onSend}
        closeModal={closeModal}
      />
    </Container>
  )
}

export default Clients
