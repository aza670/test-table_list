import React from 'react'
import Modal from 'react-modal'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const EditModal = ({ modalIsOpen, setIsOpen, handleUpdate, item }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

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
  return (
    <>
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
    </>
  )
}

export default EditModal
