// Instance the GitHub class
const github = new GitHub;

// Instance the UI class
const ui = new UI;

// Input
const searchUser = document.getElementById('searchUser');

// Search listener
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if (userText !== '') {
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    
                } else {
                    ui.showProfile(data.profile);
                }
            })
    } else {

    }
});