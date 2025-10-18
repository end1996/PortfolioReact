import { useEffect, useState } from "react";

interface Props {
    repo: string; // format: "owner/repo"
}

function GitHubLanguages({ repo }: Props) {
    const [languages, setLanguages] = useState<String[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const res = await fetch(`https://api.github.com/repos/${repo}/languages`);
                if (!res.ok) throw new Error("Error al obtener lenguajes");
                const data = await res.json();
                setLanguages(Object.keys(data));
            } catch (err) {
                setError("No se pudieron cargar los lenguajes");
            }
        };
        fetchLanguages();
    }, [repo]);

    if (error) return <p>{error}</p>
    if (!languages.length) return <p>Cargando lenguajes...</p>;

    return (
        <p><strong>{languages.length > 1 ? "Lenguajes: " : "Lenguaje: "}</strong> {languages.join(", ")}</p>
    )
}

export default GitHubLanguages;