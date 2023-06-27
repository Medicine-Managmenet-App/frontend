'use client';

import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import AddMedicationToHomekitForm from '../Forms/AddMedicationToHomekit/AddMedicationForm';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

const MedicationTable = () => {
  const medicineKit = useSelector((state) => state.medicineKit);
  const [data, setData] = useState(medicineKit);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setData(medicineKit);
  }, [medicineKit]);

  return (
    <div className="mt-7 px-2">
      <div className="w-12 xl:w-1 mb-3">
        <Button label="Add" icon="pi pi-plus" className="w-full" onClick={() => setVisible(true)} />
        <Dialog
          header="Add medicine"
          visible={visible}
          className="w-11 md:w-6"
          onHide={() => setVisible(false)}>
          <AddMedicationToHomekitForm />
        </Dialog>
      </div>
      <DataTable
        value={data}
        removableSort
        sortMode="multiple"
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10]}
        showGridlines>
        <Column selectionMode="multiple" exportable={false}></Column>
        <Column field="name" header="Name" sortable />
        <Column field="expirationDate" header="Expiration date" sortable />
        <Column field="openedOn" header="Opened on" sortable />
      </DataTable>
    </div>
  );
};

export default MedicationTable;
