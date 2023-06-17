import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaCalendarAlt } from 'react-icons/fa';
import Location from "../location/Location";

const Reservations = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    // Handle form submission here
    console.log(data);
    // Clear the form
    e.target.reset();
// TODO MORE FUNCTIONALITY


  };
  

  return (
    <div>
      <div>
        <SectionTitle
          heading={"BOOK A TABLE"}
          subHeading={"Reservation"}
        ></SectionTitle>
        <Helmet>
          <title>Bistro Boss/reservations</title>
        </Helmet>
      </div>
      <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mr-4 mb-4">
          <div>
            <label className="text-sm">Date:</label>
            <input type="date" {...register('date')} className="input" />
          </div>

          <div>
            <label className="text-sm">Time:</label>
            <input type="time" {...register('time')} className="input" />
          </div>

          <div>
            <label className="text-sm">Guests:</label>
            <select {...register('guests')} className="input">
              <option value="1">1 Person</option>
              <option value="2">2 Person</option>
              <option value="3">3 Person</option>
              <option value="4">4 Person</option>
              <option value="5">5 Person</option>
            </select>
          </div>
        </div>

        <div className="md:w-1/2">
          <div>
            <label className="text-sm">Name:</label>
            <input type="text" {...register('name')} className="input" />
          </div>

          <div>
            <label className="text-sm">Phone:</label>
            <input type="tel" {...register('phone')} className="input" />
          </div>

          <div>
            <label className="text-sm">Email:</label>
            <input type="email" {...register('email')} className="input" />
          </div>
        </div>
      </div>

      <button type="submit" className="btn mt-4 mx-auto bg-orange-500 flex">
        <FaCalendarAlt className="mr-2" />
        Book A Table
      </button>
    </form>
<Location></Location>
      </div>
    </div>
  );
};

export default Reservations;
