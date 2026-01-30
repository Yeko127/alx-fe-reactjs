import { useState } from "react";
import { fetchUserData } from "./services/githubService";


const Search = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError]= useState("")
    

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!username.trim()) return;

        setLoading(true);
        setError('');
        setUser(null);

        try {
            const data= await fetchUserData(username);
            setUser(data);
        
        } catch  {
            setError(true)
        }finally {
           setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                style={{display:"block", margin:"10px 0"}}
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loadin ...</p>}
            {error && <p>Looks like we cannot find the user</p>}

            {user && (
                <div>
                    <img
                    src={user.avatar_url}
                    alt={user.login}
                    width="120"
                    />  
                <>             
                <p>{user.name || user.login}</p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                   View GitHub Profile
                </a>
                </>
                </div>
            )}            
        </div>
    );
}
export default Search;
