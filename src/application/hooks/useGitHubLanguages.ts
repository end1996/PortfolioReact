import { useEffect, useState } from "react";
import type { LanguageData } from "@/domain/models/Github";
import { fetchRepoLanguages } from "@/infrastructure/api/github/githubApi";

interface UseGitHubLanguagesOptions {
  repo: string;
  manualLanguages?: Record<string, number>;
}

interface UseGitHubLanguagesResult {
  languages: LanguageData | null;
  isLoading: boolean;
  error: string | null;
}

/**
 * Custom hook que orquesta la obtención de lenguajes de un repo GitHub.
 * Si se proveen `manualLanguages`, los usa directamente sin hacer fetch.
 */
export function useGitHubLanguages({
  repo,
  manualLanguages,
}: UseGitHubLanguagesOptions): UseGitHubLanguagesResult {
  const [languages, setLanguages] = useState<LanguageData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Si hay datos manuales, los usamos directamente
    if (manualLanguages) {
      setLanguages(manualLanguages);
      return;
    }

    if (!repo) return;

    setIsLoading(true);
    setError(null);

    fetchRepoLanguages(repo)
      .then((data) => setLanguages(data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [repo, manualLanguages]);

  return { languages, isLoading, error };
}
