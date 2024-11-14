import React, { useContext, useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { DataContext } from '../../Context/DataContext';

const Actions = ({ data }) => {
    const { deletePost, updatePost } = useContext(DataContext);
    const [visible, setVisible] = useState(false);
    const [selectedData, setSelectedData] = useState({ id: '', title: '', body: '' });

    const handleEdit = () => {
        setSelectedData(data);
        setVisible(true);
    };

    const handleDelete = () => {
        deletePost(data.id);
        console.log(`Deleted post with ID: ${data.id}`);
    };

    const handleUpdate = () => {
        updatePost(selectedData.id, {title: selectedData.title,body: selectedData.body});
        setVisible(false);
    };

    return (
        <div className='actions'>
            <button onClick={handleEdit}  className='edit'>Edit</button>
            <button onClick={handleDelete} className='delete'>Delete</button>
            <Dialog header="Edit Post" visible={visible} style={{ width: '50vw', border: '1px solid grey', padding: "3rem", backgroundColor: 'white' }} onHide={() => setVisible(false)} maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <input 
                    type="text" 
                    value={selectedData.id} 
                    readOnly 
                    placeholder='ID'
                    style={{ display: 'block', marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
                    disabled
                />
                <input 
                    type="text" 
                    value={selectedData.title} 
                    onChange={(e) => setSelectedData({ ...selectedData, title: e.target.value })}
                    placeholder='Title'
                    style={{ display: 'block', marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
                />
                <input 
                    type="text" 
                    value={selectedData.body} 
                    onChange={(e) => setSelectedData({ ...selectedData, body: e.target.value })}
                    placeholder='Body'
                    style={{ display: 'block', padding: '0.5rem', width: '100%' }}
                />
                <button onClick={handleUpdate} style={{ padding: '0.5rem', marginTop: '1rem' }}>Update</button>
            </Dialog>
        </div>
    );
};

export default Actions;
