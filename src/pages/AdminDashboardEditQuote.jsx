import React from 'react'
import AdminSideBar from '../components/Admin/Layout/AdminSidebar';
import EditQuoteAdmin from '../components/Admin/EditQuote';

const AdminDashboardEditQuote = () => {
  return (
    <div>
    <div className="w-full flex">
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] pr-[40px] 800px:w-[330px]">
          <AdminSideBar />
        </div>
        <EditQuoteAdmin />
      </div>
    </div>
  </div>
  )
}

export default AdminDashboardEditQuote