'use client';

import { useState } from 'react';

import { format } from 'date-fns';

import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

const UserPanel = () => {
  const [visible, setVisible] = useState(false);
  const currentDate = new Date();
  const formattedDate = format(currentDate, "do 'of' MMMM, yyyy");

  const confirmLogOut = () => {
    confirmDialog({
      message: 'Are you sure you want to log out?',
      header: 'Log out Confirmation',
      icon: 'pi pi-info-circle'
    });
  };

  return (
    <nav className="w-full p-3 lg:px-5 mb-4 flex justify-content-between align-items-center shadow-1">
      <div className="text-sm">
        <h3>
          Today is <span className="text-primary">{formattedDate}</span>
        </h3>
      </div>
      <div className="flex gap-5 align-items-center">
        <p className="hidden md:block">John Smith</p>
        <i
          className="pi pi-user cursor-pointer"
          style={{ fontSize: '1.5rem' }}
          onClick={() => setVisible(true)}></i>
      </div>
      <Sidebar
        visible={visible}
        position="right"
        onHide={() => setVisible(false)}
        className="bg-primary-reverse">
        <div className="flex flex-column align-items-center gap-5">
          <h2 className="mb-5">John Smith</h2>
          <Button label="Your account" icon="pi pi-cog" />
          <Button
            label="Log out"
            severity="warning"
            icon="pi pi-power-off"
            onClick={confirmLogOut}
          />
        </div>
      </Sidebar>
      <ConfirmDialog />
    </nav>
  );
};

export default UserPanel;
