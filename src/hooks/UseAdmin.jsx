import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";
import useAxiosSecure from "./UseAxiosSecure";

const useAdmin= ()=>{
const {user}=useAuth();
const [axiosSecure]= useAxiosSecure()
// Use axios Secure With  react. Query.
const {data:isAdmin, isLoading:isAdminLoading} =useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn: async ()=>{
        const res = await axiosSecure.get(`/users/admin/${user?.email}`)
        return res.data.admin;
    }
})
return [isAdmin,isAdminLoading]


}
export default useAdmin;

