import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Typography, Button } from '@material-tailwind/react';
import { UserPlusIcon } from '@heroicons/react/24/solid';
import MyToggle from '../../ui/MyToggle';
import modifyIcon from '../../assets/modifyIcon.png';
import deleteIcon from '../../assets/deleteIcon.png';
import Filters from '../../assets/Filters.png';
import CreateConsumer from './CreateConsumer';
import { useSelector } from 'react-redux';
import ConfirmDelete from '../../ui/ConfirmDelete';

const TABLE_HEAD = [
  "User Name",
  'First Name',
  'Last Name',
  'Email',
  'Structure',
  'Activity',
  'More',
];

function Consumers() {
  const [open, setOpen] = useState(false);
  const [openD, setOpenD] = useState(false);
  const [consumers, setConsumers] = useState([]);
  const [error, setError] = useState(null);

  const admin = useSelector((state) => state.admin);
  const searchQuery = admin ? admin.searchQuery : '';

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenD = () => {
    setOpenD(true);
  };

  const handleCloseD = () => {
    setOpenD(false);
  };

  useEffect(() => {
    async function fetchConsumers() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/consom/listcreate/');
        setConsumers(response.data);
      } catch (error) {
        setError('An error occurred while fetching consumer data.');
        console.error('Error fetching consumer data:', error);
      }
    }

    fetchConsumers();
  }, []);

  const handleToggle = async (consumerId, newStatus) => {
    
      // Send PATCH request to update activity status of the consumer
      await axios.patch(`http://127.0.0.1:8000/user/rud/${consumerId}/`, { is_active: newStatus })
      .then(response => {
      // Update local state with new activity status
      setConsumers(prevConsumers => {
        const updatedConsumers = prevConsumers.map(consumer => {
          if (consumer.id === consumerId) {
            return { ...consumer, is_active: newStatus };
          }
          return consumer;
        });
        return updatedConsumers;
      });
    })
    .catch(error => {
      console.error("Error updating user activity status:", error);
    });
};
  
  return (
    <main className="table-container m-4 h-full rounded-[11px]" style={{ borderRadius: '20px !important', backgroundColor: '#ffffff' }}>
      <Card className="h-full w-full overflow-auto rounded-[11px]" style={{ borderRadius: '20px !important' }}>
        <div className="ml-8 mr-12 mt-4 mb-8 flex items-center justify-between gap-8">
          <Typography color="blue-gray" style={{ fontSize: '24px', color: '#444', fontFamily: 'Poppins', fontWeight: 600 }}>
            Consumers
          </Typography>
          <div className="flex items-center">
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', padding: '8px', marginLeft: '8px', display: 'flex', alignItems: 'center' }}>
              <div style={{ borderRadius: '10px', border: '1px solid #D0D3D9' }}>
                <Button className="flex items-center gap-3 p-[8px]" style={{ color: '#5D6679', fontFamily: 'Poppins', fontSize: '12px' }}>
                  <img src={Filters} alt="FilterIcon" className="h-6 w-6" />
                  Filters
                </Button>
              </div>
            </div>
            <div style={{ backgroundColor: '#2185D5', borderRadius: '10px', marginLeft: '8px', display: 'flex', alignItems: 'center' }}>
              <CreateConsumer open={open} handleClose={handleClose} setOpen={setOpen}>
                <Button className="flex items-center gap-3 p-[8px]" onClick={handleClickOpen} style={{ color: 'white', fontFamily: 'Poppins', fontSize: '12px' }}>
                  <UserPlusIcon strokeWidth={2} className="h-6 w-6" />
                  Add consumer
                </Button>
              </CreateConsumer>
            </div>
          </div>
        </div>
        {/* Error handling */}
        {error && (
          <div className="text-red-600 bg-red-200 p-4 mb-4 rounded-md">
            Error: {error}
          </div>
        )}
        {/* Table Content */}
        <table className="w-full ml-6 min-w-max table-auto text-left" style={{ fontSize: '14px', fontFamily: 'Poppins', fontWeight: 100 }}>
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70" style={{ fontFamily: 'Poppins', fontWeight: 500 }}>
                    {head}
                    </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {consumers.map((consumer) => (
              <tr key={consumer.id}>
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" style={{ fontFamily: 'Poppins', fontWeight: 500, color: '#48505E' }}>
                    {consumer.username}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" style={{ fontFamily: 'Poppins', fontWeight: 500, color: '#48505E' }}>
                    {consumer.first_name}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal" style={{ fontFamily: 'Poppins', fontWeight: 500, color: '#48505E' }}>
                    {consumer.last_name}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal" style={{ fontFamily: 'Poppins', fontWeight: 500, color: '#48505E' }}>
                    {consumer.email}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal" style={{ fontFamily: 'Poppins', fontWeight: 500, color: '#48505E' }}>
                    {consumer.structure}
                  </Typography>
                </td>
                <td className="p-4">
                <MyToggle enabled={consumer.is_active} onToggle={(newStatus) => handleToggle(consumer.id, newStatus)} />
                </td>
                <td className="p-4">
                  <div className="flex justify-start">
                    <button className="bg-white border border-blue-500 rounded-[6px] w-10 h-10 flex items-center justify-center mr-[1px]" style={{ borderColor: '#D0D3D9' }}>
                      <img src={modifyIcon} alt="Modify" className="h-5 w-5" />
                    </button>
                    <ConfirmDelete open={openD} handleClose={handleCloseD} setOpen={setOpenD} concern="consumer">
                      <button className="bg-white border border-blue-500 rounded-[6px] w-10 h-10 flex items-center justify-center " style={{ borderColor: '#D0D3D9', marginLeft: '3px' }} onClick={handleClickOpenD}>
                        <img src={deleteIcon} alt="Delete" className="h-5 w-5" />
                      </button>
                    </ConfirmDelete>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </main>
  );
}

export default Consumers;
