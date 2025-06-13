import GitHubLanguagesBar from "./GitHubLanguagesBar";

interface RepoLanguagesProps {
    repo?: string;
}

function RepoLanguages({ repo }: RepoLanguagesProps) {
    if (!repo) return null;

    return (
        <GitHubLanguagesBar repo={repo} />
    )
    
}

export default RepoLanguages;

