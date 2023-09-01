import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
const Comments = () => {
    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch('https://crowdfunding-gamma.vercel.app/addComment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        iconColor:'#F99F24',
                        color:'#F99F24',
                        background:'black',
                        title: 'Comment Successful',
                        showConfirmButton: false,
                        timer: 1500
                        })
                } 
            })

    }

   
    return (
        <div className="border text-black">
            
            <div className="">
                <form className="md:grid md:grid-cols-1 lg:grid lg:grid-cols-1  p-5 gap-3  justify-end" onSubmit={handleSubmit(onSubmit)}>
                   
                 
                    <div>
                        <h5 className="font-bold mt-3"> Comment Here </h5>
                        <input className="p-2  w-full text-black  bg-white border border-black h-32"  {...register("text")} />
                    </div>
                   
                    <div className="md:grid md:grid-cols-1 lg:grid grid-cols-1 mt-3">

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input type="submit" className='btn bg-[#f99F24] text-white hover:bg-black hover:text-[#F99F24] '/>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Comments;