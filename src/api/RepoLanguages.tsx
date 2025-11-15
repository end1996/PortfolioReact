import GitHubLanguagesBar from "./GitHubLanguagesBar";

interface RepoLanguagesProps {
  repo?: string;
  manualLanguages?: Record<string, number>;
}

function RepoLanguages({ repo, manualLanguages }: RepoLanguagesProps) {
  if (manualLanguages) {
    return (
      <GitHubLanguagesBar repo={repo ?? ""} manualLanguages={manualLanguages} />
    );
  }
  // Si no hay repo ni manual, no mostrar nada
  if (!repo) return null;

  // Si hay repo público, usar GitHub API
  return <GitHubLanguagesBar repo={repo} />;
}

export default RepoLanguages;
