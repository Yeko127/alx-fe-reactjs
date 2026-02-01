import { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService";


const Search = () => {
    const [query, setQuery]= useState("")
    const [location, setLocation] = useState("");
    const [miniRepos, setminiRepos] = useState("")
    const [user, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError]= useState("")
    

    
    const handleSearch = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');
        setUsers([]);
        setPage(1);

        try {
            const results= await searchUsers ({
                query,
                location,
                miniRepos,
                page: 1,
            });
            setUsers(results);        
        } catch  {
            setError(true)
        }finally {
           setLoading(false);
        }
    };

    const loadMore = async () =>{
        const nextPage =page + 1;
        setLoading(true);

        try {
            const results = await searchUsers({
                query,
                location,
                miniRepos,
                page: nextPage,
            });
            setUsers((prev) => [...prev, ...results]);
            setPage(nextPage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
           <form 
           onSubmit={handleSearch}
           className="grid gap-4 md:grid-cols-4"
           >
            <input 
            type="text"
            placeholder="Username"
            className="border p-2 md:col-span-2"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            required
            />

            <input 
            type="number"
            placeholder="Mini repos"
            className="border p-2"
            value={miniRepos}
            onChange={(event) => setminiRepos(event.target.value)}
            />

            <button 
            type="submit"
            className="bg-black text-white p-2 md: col-span-4"
            >
                Search
            </button>            
           </form>

            {loading && <p className="mt-4">Loading ...</p>}
            {error && <p className="mt-4 text-red-500">"Looks like we cant find the user"</p>}

            <div className="grid gap-4 mt-6">
                {user.map((user) => (
                    <div 
                    key={user.id}
                    className="flex items-center gap-4 border p-4 rounded"
                    >
                        <img 
                        src={user.avatar_url}
                        alt={user.login}
                        className="w-16 rounded-full"
                        />

                        <div>
                            <p className="font-bold">{user.login}</p>
                            <a 
                            href={user.html.url}
                            target="_blank"
                            className="text-blue-500"
                            >
                            View Profile
                            </a>
                        </div>
                    </div>    
                ))}
            </div>

            {user.length > 0 && !loading && (
                <button 
                onClick={loadMore}
                className="mt-6 w-full border p-2"
                >
                  Load
                </button>
            )}                      
        </div>
    );
};
export default Search;
