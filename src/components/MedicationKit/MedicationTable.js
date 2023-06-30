'use client';

import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import AddMedicationToHomekitForm from '../Forms/AddMedicationToHomekit/AddMedicationForm';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const MedicationTable = () => {
  const medicationKit = useSelector((state) => state.medicationKit);
  const [data, setData] = useState(medicationKit);

  useEffect(() => {
    setData(medicationKit);
  }, [medicationKit]);

  return (
    <div className="mt-7 px-2">
      <div className="w-12 xl:w-1 mb-3">
        <AddMedicationToHomekitForm />
      </div>
      <DataTable
        value={data}
        removableSort
        sortMode="multiple"
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10]}>
        <Column selectionMode="multiple" exportable={false} className="w-1rem" />
        <Column field="name" header="Name" sortable />
        <Column
          field="expirationDate"
          header="Expiration date"
          sortable
          body={(rowData) => new Date(rowData.expirationDate).toDateString()}
        />
        <Column
          field="openedOn"
          header="Opened on"
          sortable
          body={(rowData) => new Date(rowData.openedOn).toDateString()}
        />
      </DataTable>
    </div>
  );
};

export default MedicationTable;
