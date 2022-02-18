import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { Button, Col, Form, Row } from 'react-bootstrap'

const MainModal = ({ modalIsOpen, errors, handleSubmit, register, onSend, closeModal }) => {
  return (
    <>
      <CSSTransition unmountOnExit in={modalIsOpen} timeout={500} classNames="alert">
        <div className="modal-window">
          <div className="position-relative modal-content">
            <Form onSubmit={handleSubmit(onSend)}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    id="formGridName"
                    {...register('first_name', { required: true })}
                    type="text"
                  />
                  {errors.first_name && <span className="text-danger">Add firstname</span>}
                </Form.Group>
                <Form.Group as={Col} controlId="formGridLastname">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    id="formGridLastname"
                    {...register('last_name', { required: true })}
                    type="text"
                  />
                  {errors.last_name && <span className="text-danger">Add lastname</span>}
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    id="formGridUsername"
                    {...register('username', { required: true })}
                    type="text"
                  />
                  {errors.username && <span className="text-danger">Add username</span>}
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    id="formGridEmail"
                    {...register('email', { required: true })}
                    type="email"
                  />
                  {errors.email && <span className="text-danger">Add name</span>}
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridLink">
                  <Form.Label>Link</Form.Label>
                  <Form.Control
                    id="formGridLink"
                    {...register('profile_link', { required: true })}
                    type="text"
                  />
                  {errors.profile_link && <span className="text-danger">Add link</span>}
                </Form.Group>
                <Form.Group as={Col} controlId="formGridStatus">
                  <Form.Label>Status</Form.Label>
                  <Form.Select id="formGridStatus" {...register('pay_status', { required: true })}>
                    <option selected disabled>
                      Choose status
                    </option>
                    <option>Payed</option>
                    <option>Not payed</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Button className="student-modal-btn" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <div onClick={closeModal} className="close-modal position-absolute">
              ❌
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  )
}

export default MainModal
