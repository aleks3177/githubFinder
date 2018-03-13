class Github {
  constructor(){
    this.clientId = '3798b5d095645944bc82';
    this.secret = '140e65e436851a86d8771fb0258a6db79c86a9ec';
    this.repos_count = 5;
    this.repos_sort = 'created: asc'
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}$sort=${this.repos_sort}$client_id=${this.clientId}&client_secret=${this.secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }


}