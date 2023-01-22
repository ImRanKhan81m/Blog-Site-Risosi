import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { articleDataContext } from '../../App';

const DeleteModal = ({ blog, setOpenDeleteModal }) => {

    const { _id } = blog;
    const { refresh, setRefresh } = useContext(articleDataContext);

    const handleDelete = () => {
        // delete method 
        setOpenDeleteModal(false)
        fetch(`https://blog-post-server-risosi.vercel.app/api/v1/blog/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Blog deleted successfully')
                    setRefresh(!refresh)
                }
            }
            )
    }

    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold text-center">Are you sure you want to delete this product?</h3>
                    <div className='flex justify-center items-center gap-3 mt-5'>
                        <button onClick={() => handleDelete()} className='btn-error rounded-md btn-sm font-bold text-white'>Yes</button>
                        <label onClick={() => setOpenDeleteModal(false)} className='btn btn-success font-bold text-white rounded-md btn-sm'>No</label>
                    </div>
                </label>
            </label>
        </div>
    );
};

export default DeleteModal;