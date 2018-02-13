class GitHub {
    constructor() {
        this.client_id = '74ba7673abb4e142bfa5';
        this.client_secret = '3655b7c5615f1f93ece18e690614001d487b0ef9';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();

        return {
            profile: profile
        }
    }
}