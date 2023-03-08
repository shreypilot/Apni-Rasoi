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
              <div className=" flex flex-col mt-24 ml-96 my-auto box-border border-black  items-center justify-center bg-blue-400 border-8 w-96 h-96 shadow-md  ">
                <div className="flex flex-col text-center  relative px-6 py-10">
               {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                  <form noValidate onSubmit={handleSubmit}>
                    <h1 className="text-black font-bold  uppercase" >Login</h1>
                  {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="Enter email id / username"
                      className=" w-72 p-4 mt-24 border border-black "
                      id="email"
                    />
                    {/* If validation is not passed show errors */}
                    <p className="error">
                      {errors.email && touched.email && errors.email}
                    </p>
                     {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder="Enter password"
                      className="m-2 p-4 w-72 border border-black "
                    />
                     {/* If validation is not passed show errors */}
                    <p className="error">
                      {errors.password && touched.password && errors.password}
                    </p>
                    {/* Click on submit button to submit the form */}
                    <button type="submit" className="bg-green-800 p-2 m-2 w-24 uppercase text-white rounded-sm">Login</button>
                  </form>
                </div>
              </div>
            )}
          </Formik>
        </>
      );
    };
    export default Login;
