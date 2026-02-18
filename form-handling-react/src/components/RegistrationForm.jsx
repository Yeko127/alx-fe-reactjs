import { useState } from "react";

const RegistrationForm = () => {
    const [username, setUsername] =useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] =useState({});
    const [success, setSuccess] = useState(false);

    const validate = () => {
        let newErrors ={};

        if (!username.trim()) {
            newErrors.username = "Username is required"
        }
        return newErrors;
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        const validationErrors = validate ();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length ===0) {
            setSuccess(true);

            setUsername("");
            setEmail("");
            setPassword("");
        } else {
            setSuccess(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
            <form onSubmit={handleSubmit}>
                {/* Username */}

                <div className="mb-4">
                    <label className="block mb-1 font-medium">Username</label>
                    <input 
                    type="text"
                    className="w-full border p-2 rounded"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    />
                    {errors.username && (
                        <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                    )}
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                    type="email"
                    className="w-full border p-2 rounded"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                </div>

                {/* Password*/}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Password</label>
                    <input
                    type="password"
                    className="w-full border p-2 rounded"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                    )}
                </div>

                <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-800"
                >
                    Register
                </button>

                {success && (
                    <p className="text-green-600 text-center mt-4">Registration successful</p>
                )}
            </form>
        </div>
    );
};

export default RegistrationForm;