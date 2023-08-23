import Swal from "sweetalert2";
import SharedBanner from "../Contact/SharedBanner";
import campaignPhoto from "../../assets/img/Final/10.jpg";

const Form = () => {
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const country = form.country.value;
    const money = form.money.value;
    const ideas = form.ideas.value;

    const saveUser = { name, email, phone, address, country, money, ideas };
    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(saveUser)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Project Details Submitted',
            showConfirmButton: false,
            timer: 1000
          });
          form.reset();
        }
      });
  };

  return (
    <div>
      <SharedBanner
        background={campaignPhoto}
        title="Projects"
        titleHead="Submit your project details"
        titleDes={
          <>
            We will help you to start a new project or to collect funds for disasters.
          </>
        } />

      <h2 className="pt-10 text-center text-xl md:text-3xl font-bold text-yellow-600">Submit Detail</h2>

      <form className="card card-compact shadow-2xl p-10 max-w-7xl mx-auto w-11/12 text-base leading-6 space-y-6 sm:text-lg sm:leading-7 overflow-hidden mb-16 mt-8" onSubmit={handleSubmit}>

        <div className="relative">
          <input
            name="name"
            type="text"
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="Full Name"
            required />

          <label
            htmlFor="name"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
            Full Name*
          </label>
        </div>

        <div className="relative">
          <input
            name="email"
            type="email"
            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="Email"
            required />

          <label
            htmlFor="email"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
            Email*
          </label>
        </div>

        <div className="relative">
          <input
            name="phone"
            type="number"
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="+880"
          />

          <label
            htmlFor="phone"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
            Phone Number*
          </label>
        </div>

        <div className="relative">
          <input
            name="address"
            type="text"
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="address"
            required />

          <label
            htmlFor="address"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
            Address*
          </label>
        </div>

        <div className="relative">
          <select className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:borer-rose-600 text-sm text-gray-700" name='country'>
            <option disabled selected required>Country*</option>
            <option value="USA">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Canada">Bangladesh</option>
            <option value="Canada">Nepal</option>
            <option value="Australia">Australia</option>
            <option value="India">India</option>
            <option value="Japan">Japan</option>
            <option value="Japan">Egypt</option>
            <option value="Japan">Niger</option>
            <option value="Japan">Venezuela</option>
          </select>
        </div>

        <div className="relative">
          <input
            name="money"
            type="text"
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="Approximate Value"
          />

          <label
            htmlFor="money"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
            Approximate Value*
          </label>
        </div>

        <div className="relative">
          <input
            name="ideas"
            type="text"
            className="peer placeholder-transparent h-10  w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="ideas"
          />

          <label
            htmlFor="ideas"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
            Project Details*
          </label>
        </div>

        <div className="text-center">
          <button type="submit" className="px-3 py-1 border border-yellow-600 text-yellow-600 font-semibold hover:bg-yellow-700 hover:text-white cursor-pointer hover:scale-95 duration-300 hover:duration-300 rounded mt-4">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;