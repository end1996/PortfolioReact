import { useEffect, useState } from "react";

interface GitHubLanguagesBarProps {
    repo: string; // format: "owner/repo"
}

interface LanguageData {
    [language: string]: number;
}

const languagesColors: { [key: string]: string } = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    Java: "#b07219",
    PHP: "#4F5D95",
    Kotlin: "#a97bff",
    "Objective-C": "#438eff",
    Swift: "#f05138",
    Dart: "#00B4AB",
    Flutter: "#02569B",
    CSS: "#663399",
    CMake: "#da3434",
    HTML: "#e34c26",
    C: "#555555",
    Other: "#ededed",
    "C++": "#f34b7d",

};

function GitHubLanguagesBar({ repo}: GitHubLanguagesBarProps) {
    const [languages, setLanguages] = useState<LanguageData | null>(null);

    useEffect(() => {
        fetch(`https://api.github.com/repos/${repo}/languages`)
            .then((res) => res.json())
            .then((data) => setLanguages(data))
            .catch((err) => console.error("Error fetching languages:", err));
    }, [repo]);

    if (!languages) return <p>Cargando tecnologías...</p>;

    const totalBytes = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0);

    return (
            <div>
      {/* Barra de porcentaje */}
      <div style={{ display: "flex", height: "10px", borderRadius: "4px", overflow: "hidden", marginBottom: "0.5rem" }}>
        {Object.entries(languages).map(([lang, value]) => {
          const width = `${(value / totalBytes) * 100}%`;
          const color = languagesColors[lang] || "#ccc";
          return (
            <div key={lang} style={{ width, backgroundColor: color }} title={lang}></div>
          );
        })}
      </div>

      {/* Leyenda de lenguajes */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", }}>
        {Object.entries(languages).map(([lang, value]) => {
          const percent = ((value / totalBytes) * 100).toFixed(1);
          const color = languagesColors[lang] || "#ccc";
          return (
            <div key={lang} style={{ display: "flex", alignItems: "center", fontSize: "0.85rem", }}>
              <span style={{
                width: "12px",
                height: "12px",
                backgroundColor: color,
                borderRadius: "50%",
                display: "inline-block",
                marginRight: "6px"
              }}></span>
              {lang} ({percent}%)
            </div>
          );
        })}
      </div>
    </div>
    )
}

export default GitHubLanguagesBar;