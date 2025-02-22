import { useState, useEffect } from 'react';
import resume from '../data/projects.json'

export default function Projects() {
    const [repos, setRepos] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.github.com/users/Anton-Dahlstrom/repos');

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();

                setRepos(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <main><h1>Loading...</h1></main>;
    if (error) return <main><h1>Error</h1></main>;
    const sortedRepos = repos.sort((a, b) => {
        const aHasMatch = a.name in resume ? 1 : 0;
        const bHasMatch = b.name in resume ? 1 : 0;
        const aHasKey = aHasMatch && resume[a.name].image ? 1 : 0;
        const bHasKey = bHasMatch && resume[b.name].image ? 1 : 0;
        return (bHasKey - aHasKey) || (bHasMatch - aHasMatch);
    });


    return (
        <main>
            <div>
                <div className="card-container">

                    {sortedRepos.map((r) => {
                        const data = resume[r.name] ?? {};
                        if (data.skip) {
                            return
                        }
                        return (
                            <>
                                <div className="card">
                                    <a href={r.html_url} target="_blank">
                                        <img src={data.image ?? "./images/github.png"} alt="odds project" />
                                    </a>
                                    <div className="card-content">
                                        <h2>{data.title ?? r.name}</h2>
                                        <p>{data.header ?? "Visit github to learn more!"}</p>
                                        <details>
                                            <summary className="read-more">Read more</summary>
                                            <div className="details-content">
                                                {r.language !== null && <p>Main language used: {r.language}</p>}
                                                <p>{data.description ?? "No description available"}</p>
                                            </div>
                                        </details>
                                    </div>
                                </div></>
                        )
                    }
                    )}
                    <div className="card">
                        <a href="https://github.com/Marremelad/SalamanderBank" target="_blank">
                            <img src="./images/salaman.png" alt="salamander bank app" />
                        </a>
                        <div className="card-content">
                            <h2>Salamander Bank</h2>
                            <p>Bank simulator with scheduled transactions, currency conversion and SMS integration.</p>
                            <details>
                                <summary className="read-more">Read more</summary>
                                <div className="details-content">
                                    <p>Made using dapper and SQLite</p>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
