import type { LanguageData } from "@/domain/models/Github";

const GITHUB_API_BASE = "https://api.github.com/repos";

/**
 * Obtiene los lenguajes de un repositorio de GitHub.
 * @param repo Formato "owner/repo"
 * @returns Mapa de lenguajes con sus bytes
 */
export async function fetchRepoLanguages(repo: string): Promise<LanguageData> {
  const response = await fetch(`${GITHUB_API_BASE}/${repo}/languages`);
  if (!response.ok) {
    throw new Error(`Error al obtener lenguajes del repo ${repo}`);
  }
  return response.json();
}
