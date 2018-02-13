// Instance the class
const github = new GitHub;

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
                    
                }
            })
    } else {

    }
});