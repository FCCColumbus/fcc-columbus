import React from 'react'
import { Admins } from 'components'
import { AdminsStore } from 'stores'

const AdminsContainer = () => <Admins admins={AdminsStore} />

export default AdminsContainer
