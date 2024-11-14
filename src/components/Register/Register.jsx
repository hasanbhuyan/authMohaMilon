
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../Provider/AuthProvider';

const Register = () => {
  const navigate = useNavigate()
  const {createUser} = useContext(AuthContex)
  console.log(createUser)
    const handleRegister =(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('name:',name, 'email:',email, 'password',password)

        createUser(email, password)
        .then(result =>{
          console.log(result)
          e.target.reset()
          navigate('/')
        })
        .catch(error =>{
          console.log('ERROR', error.messege)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl w-96">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
            <p className="px-5 py-3">
                Already have and account ? Please <Link to='/login'><span className="text-cyan-700 font-medium">Login</span></Link>
            </p>
        </div>
      </div>
    </div>
    );
};

export default Register;