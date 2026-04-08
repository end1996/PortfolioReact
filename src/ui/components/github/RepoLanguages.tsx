import { useGitHubLanguages } from "@/application/hooks/useGitHubLanguages";
import GitHubLanguagesBar from "./GitHubLanguagesBar";

interface RepoLanguagesProps {
  repo?: string;
  manualLanguages?: Record<string, number>;
}

/**
 * Container component: conecta el hook (application layer)
 * con el componente presentacional GitHubLanguagesBar.
 */
export default function RepoLanguages({ repo, manualLanguages }: RepoLanguagesProps) {
  // Si no hay repo ni manual, no mostrar nada
  if (!repo && !manualLanguages) return null;

  const { languages, isLoading, error } = useGitHubLanguages({
    repo: repo ?? "",
    manualLanguages,
  });

  return (
    <GitHubLanguagesBar
      languages={languages}
      isLoading={isLoading}
      error={error}
    />
  );
}
