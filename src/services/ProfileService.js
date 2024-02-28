export const ProfileService = {
    getList: async (term) => {
        let response = await fetch(`https://api.github.com/search/users?q=${term}&client_id=undefined&client_secret=undefined`);
        let responseData = await response.json();

        return [...responseData.items];
    },
    get: async (profileLogin) => {
        const response = await fetch(`https://api.github.com/users/${profileLogin}?client_id=undefined&client_secret=undefined`);
        const responseData = await response.json();

        return { ...responseData };
    },
    getRepos: async (profileLogin) => {
        const response = await fetch(`https://api.github.com/users/${profileLogin}/repos?per_page=5&sort=created:asc&client_id=undefined&client_secret=undefined`)
        const responseData = await response.json();

        return [...responseData];
    },

}

