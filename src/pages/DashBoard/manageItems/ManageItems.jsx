import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useMenu from "../../../hooks/UseMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";

const ManageItems = () => {
    const [menu, , refetch]=useMenu();
    const [axiosSecure]=useAxiosSecure()

    const handleDelete = item=>{
        Swal.fire({
            title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              
                
            axiosSecure.delete(`/menu/${item._id}`)
        .then(res=>{
          console.log('deleted response', res.data);
          if(res.data.deletedCount > 0){
            refetch()
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
  
        })



            }
          })
    }

    return (
        <div className="w-full lg:mx-14">
            <SectionTitle heading={'Manage All Items'} subHeading={'Hurry Up'}></SectionTitle>
            <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <td>#</td>
        <th>Item Image</th>
        <th>Item Category</th>
        <th>Price</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
{
    menu.map((item, index)=>      <tr key={item._Id}>
        <td>
          {index+1}
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.name}</div>
            </div>
          </div>
        </td>
        <td>
          {item.category}
        </td>
        <td className="text-right">${item.price}</td>
        <td>
          <button className="btn btn-ghost btn-xs">Update</button>
        </td>
        <td>
        <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-xs bg-red-500 text-white"><FaTrashAlt></FaTrashAlt></button>
        </td>
      </tr>)
}

    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default ManageItems;
