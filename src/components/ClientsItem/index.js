import React, { useState } from 'react'
import Modal from 'react-modal'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const ClientsItem = ({ item, idx, deleteClient, editClient }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const [modalIsOpen, setIsOpen] = useState(false)
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  }

  const handleUpdate = (data) => {
    editClient(item.id, data)
    setIsOpen(false)
  }

  return (
    <tr>
      <td>{idx + 1}</td>
      <td className="text-secondary">{item.username}</td>
      <td>{item.first_name}</td>
      <td>{item.last_name}</td>
      <td className={item.pay_status ? 'text-success' : 'text-danger'}>
        {item.pay_status ? 'Payed' : 'Not payed'}
      </td>
      <td>
        <a href={`mailto:${item.email}`}>{item.email}</a>
      </td>
      <td>
        <a target="_blank" href={item.profile_link} rel="noreferrer">
          {item.profile_link}
        </a>
      </td>
      <td className="text-center">
        <i
          role="button"
          onClick={() => setIsOpen(true)}
          className="bx bx-edit-alt text-info me-4 "
        />
        <i
          role="button"
          onClick={() => deleteClient(item.id)}
          className="bx bx-trash text-danger"
        />
        <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
          <div className="position-relative">
            <Form onSubmit={handleSubmit(handleUpdate)}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    defaultValue={item.first_name}
                    id="formGridName"
                    {...register('first_name', { required: true })}
                    type="text"
                  />
                  {errors.firstname && <span className="text-danger">Add firstname</span>}
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastname">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    defaultValue={item.last_name}
                    id="formGridLastname"
                    {...register('last_name', { required: true })}
                    type="text"
                  />
                  {errors.lastname && <span className="text-danger">Add lastname</span>}
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    defaultValue={item.username}
                    id="formGridUsername"
                    {...register('username', { required: true })}
                    type="text"
                  />
                  {errors.username && <span className="text-danger">Add username</span>}
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    defaultValue={item.email}
                    id="formGridEmail"
                    {...register('email', { required: true })}
                    type="email"
                  />
                  {errors.email && <span className="text-danger">Add email</span>}
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridLink">
                  <Form.Label>Link</Form.Label>
                  <Form.Control
                    defaultValue={item.profile_link}
                    id="formGridLink"
                    {...register('profile_link', { required: true })}
                    type="text"
                  />
                  {errors.link && <span className="text-danger">Add username</span>}
                </Form.Group>

                <Form.Group as={Col} controlId="formGridStatus">
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    id="formGridStatus"
                    {...register('pay_status', { required: true })}
                    defaultValue={item.pay_status ? 'Payed' : 'Not payed'}
                  >
                    <option selected disabled>
                      Choose status
                    </option>
                    <option value="Payed">Payed</option>
                    <option value="Not payed">Not payed</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Button className="student-modal-btn" variant="primary" type="submit">
                Update
              </Button>
            </Form>
            <div onClick={() => setIsOpen(false)} className="close-modal position-absolute">
              ❌
            </div>
          </div>
        </Modal>
      </td>
    </tr>
  )
}

export default ClientsItem
