'use client';

import { useSelector, useDispatch } from 'react-redux';

import { differenceInYears } from 'date-fns';

import { removeFamilyMember } from '@/redux/slices/family-slice';

import AddFamilyMemberForm from '../Forms/AddFamilyMember/AddFamilyMemberForm';
import EditFamilyMemberForm from '../Forms/EditFamilyMember/EditFamilyMemberForm';

import Image from 'next/image';
import { DataView } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { confirmDialog } from 'primereact/confirmdialog';

const FamilyView = () => {
  const family = useSelector((state) => state.family);
  const dispatch = useDispatch();
  const today = new Date();

  const handleDelete = (family) => {
    dispatch(removeFamilyMember(family));
  };

  const confirmDelete = (family) => {
    confirmDialog({
      message: 'Do you want to delete this member?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptClassName: 'p-button-danger',
      accept: () => handleDelete(family)
    });
  };

  const memberTemplate = (family) => {
    return (
      <div className="col-12 flex justify-content-between">
        <div className="flex p-3">
          <div className="mr-3">
            <Image
              src={family.isMale ? '/male.png' : '/female.png'}
              width={75}
              height={75}
              alt="Picture of member"
            />
          </div>
          <div className="mt-2 flex flex-column gap-1">
            <div>
              <h3>{family.name}</h3>
              {family.isChild && <small className="text-primary">{`Child`}</small>}
            </div>
            <p>{`Age: ${differenceInYears(today, family.dateOfBirth)}`}</p>
            {family.isChild && <p>{`Weight: ${family.weight} kg`}</p>}
          </div>
        </div>
        <div className="flex align-items-center p-3 gap-1">
          <EditFamilyMemberForm member={family} />
          <Button icon="pi pi-trash" severity="danger" onClick={() => confirmDelete(family)} />
        </div>
      </div>
    );
  };

  return (
    <div className="card mt-7 px-2 xl:px-4">
      <AddFamilyMemberForm />
      <div className="container-family-panel ">
        {family.length === 0 && <h3>No family members added</h3>}
        {family.length > 0 && (
          <DataView
            value={family}
            itemTemplate={memberTemplate}
            className="overflow-auto  border-round-xl shadow-3"
          />
        )}
      </div>
    </div>
  );
};

export default FamilyView;
