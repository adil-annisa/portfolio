export async function fetchPublicRepos(username) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
    if (!res.ok) return [];
    const repos = await res.json();
    return repos
      .filter(r => !r.fork)
      .map(r => ({
        name: r.name,
        description: r.description,
        url: r.html_url,
        homepage: r.homepage,
        language: r.language,
        topics: r.topics || [],
        stars: r.stargazers_count,
        forks: r.forks_count,
        pushed_at: r.pushed_at,
      }));
  } catch (e) {
    return [];
  }
} 