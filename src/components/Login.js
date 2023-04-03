import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
// create a schema for validation
const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
  });

const Login = () => {
const navigate = useNavigate();

  function handleNavigate(values) {
    // Alert the input values of the form that we filled
    alert(values);
    // setTimeout for navigate from login page to home page
    setTimeout(() => {
      navigate("/");
    }, 0);
  }
    
    return (
        <>
          {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
          <Formik
            validationSchema={schema}
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              // Alert the input values of the form that we filled
              alert(JSON.stringify(values));
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <div className="flex flex-col justify-center items-center mt-10 md:mt-24 bg-gray-100 h-screen w-screen">
                  <div className="box-border border-black bg-blue-400 border-8 shadow-md w-full md:w-96">
                    <div className="relative px-6 py-10 text-center">
                      {/* Passing handleSubmit parameter to html form onSubmit property */}
                      <form noValidate onSubmit={handleSubmit}>
                        <h1 className="text-black font-bold uppercase mb-6">Login</h1>
                        {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                        <div className="mb-4">
                          <label className="block text-black font-bold mb-2" htmlFor="email">Email / Username</label>
                          <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Enter your email or username"
                            className="w-full p-4 border border-black rounded-md"
                            id="email"
                          />
                          {/* If validation is not passed show errors */}
                          {errors.email && touched.email && (
                            <p className="text-red-500 text-xs italic">{errors.email}</p>
                          )}
                        </div>
                        {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                        <div className="mb-6">
                          <label className="block text-black font-bold mb-2" htmlFor="password">Password</label>
                          <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder="Enter your password"
                            className="w-full p-4 border border-black rounded-md"
                            id="password"
                          />
                          {/* If validation is not passed show errors */}
                          {errors.password && touched.password && (
                            <p className="text-red-500 text-xs italic">{errors.password}</p>
                          )}
                        </div>
                        {/* Click on submit button to submit the form */}
                        <button type="submit" className="bg-green-800 text-white uppercase py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
                          Login
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
            )}
          </Formik>
        </>
      );
    };
    export default Login;
