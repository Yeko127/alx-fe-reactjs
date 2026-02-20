import { Formik, Form, Field, ErrorMessage } from "formik"
import *as Yup from "yup";

const formikForm= () => {
    const validationSchema = Yup.object({
       username: Yup.string()
       .required("Username is required"),

       email: Yup.string()
       .email("Invalid email format")
       .required("Email is required"),

       password: Yup.string()
       .min(6, "Password must be at least 6 characters")
       .required("Password is required")
    });

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
            <Formik
                initialValues={{
                    username: "",
                    email: "",
                    password: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log("Form Data:", values);
                    alert("Registration successful");
                    resetForm();
                }}
            >
                <Form>
                {/* Username */}

                <div className="mb-4">
                    <label className="block mb-1 font-medium">Username</label>
                    <Field 
                    type="text"
                    name="username"
                    className="w-full border p-2 rounded"
                    />
                    <ErrorMessage
                    name="username"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Email</label>
                    <Field
                    type="email"
                    name="email"
                    className="w-full border p-2 rounded"
                    />
                    <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                    />
                </div>

                {/* Password*/}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Password</label>
                    <Field
                    type="password"
                    name="password"
                    className="w-full border p-2 rounded"
                    />
                    <ErrorMessage
                    name="password"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                    />
                </div>

                <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-800"
                >
                    Register
                </button>

                </Form>

            </Formik>
        </div>

                

                
    
    );
};
export default formikForm;