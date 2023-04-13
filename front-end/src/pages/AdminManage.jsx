import React, {
// useState,
// useEffect,
} from 'react';

import AdminForm from '../components/AdminForm';
import AdminNavBar from '../components/AdminNavBar/AdminNavBar';
import UserList from '../components/UserList';
// import api from '../axios/config';

function AdminManage() {
  return (
    <div>
      <AdminNavBar />
      <AdminForm />
      <UserList />
    </div>
  );
}

export default AdminManage;
