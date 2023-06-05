import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/UseAuth";


const UserReview = () => {
const { user } = useAuth(); // Assuming useAuth provides the user object

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data, e) => {
        console.log(data);
        // TODO: Perform form submission logic here
      
        try {
          const response = await fetch('your/backend/api/endpoint', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...data, email: user.email }),
          });
      
          if (response.ok) {
            console.log('Form submitted successfully!');
            // Handle success scenario
          } else {
            console.log('Form submission failed!');
            // Handle failure scenario
          }
        } catch (error) {
          console.log('Error occurred while submitting form:', error);
          // Handle error scenario
        }
      
        // Reset the form values
        e.target.reset();
      };
      

  return (
    <div>
      <SectionTitle
        heading={"GIVE A REVIEW..."}
        subHeading={"---Sharing is Caring!!!---"}
      ></SectionTitle>
      <Helmet>
        <title>Bistro Boss/review</title>
      </Helmet>
      <div className="w-full">
      <form className="border px-4 py-10 bg-gray-200" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Which recipe you liked most?</span>
          </label>
          <input
            type="text"
            placeholder="Recipe you liked most"
            className="input input-bordered w-full"
            {...register('recipe')}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Do you have any suggestion for us?</span>
          </label>
          <input
            type="text"
            placeholder="Suggestion"
            className="input input-bordered w-full"
            {...register('suggestion')}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Kindly express your care in a short way.</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Review in detail"
            {...register('review')}
          ></textarea>
        </div>
        <input
          className="btn btn-sm mt-4 justify-center mx-auto flex"
          type="submit"
          value="Send Review"
        />
      </form>
    </div>
    </div>
  );
};

export default UserReview;
