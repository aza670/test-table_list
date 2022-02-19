import React, { useState } from 'react'
import EditModal from '../EditModal'

const ClientsItem = ({ item, idx, deleteClient, editClient }) => {
  const [modalIsOpen, setIsOpen] = useState(false)

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
      </td>
      <EditModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        handleUpdate={handleUpdate}
        item={item}
      />
    </tr>
  )
}

export default ClientsItem
