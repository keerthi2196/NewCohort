function randomUser() {
    let api = 'https://randomuser.me/api';

    fetch(api)
        .then(randomUsers => randomUsers.json())
        .then(user => {
            console.log(user.results[0]);
            let picture = document.querySelector('#picture');
            let name = document.querySelector('#name');
            name.innerText = user.results[0].name.title + user.results[0].name.first + user.results[0].name.last
            if (picture) {
                picture.src = user.results[0].picture.large;
            } else {
                console.error("Image element not found in the DOM!");
            }
        })
        .catch(error => console.error("Error fetching user:", error));
}
