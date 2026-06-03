const postInput = document.getElementById('postInput');
const postButton = document.getElementById('postButton');
const postShower = document.getElementById('postShower');
const postShower2 = document.getElementById('postShower2');
const postShower3 = document.getElementById('postShower3');
const postShower4 = document.getElementById('postShower4');

postButton.addEventListener('click', () => {
    const oldPost = localStorage.getItem('postInput') || "";
    const value = oldPost + postInput.value + '<br>';
    localStorage.setItem("postInput", value);
    location.reload();
});

window.addEventListener('load', () => {
    const value = localStorage.getItem("postInput") || "";
    
    // Split the massive string by '<br>' into a list of separate posts
    const postsArray = value.split('<br>');
    
    // Drop the 1st post into the 1st box (if it exists)
    if (postsArray[0]) {
        postShower.innerHTML = postsArray[0];
    }
    
    // Drop the 2nd post into the 2nd box (if it exists)
    if (postsArray[1]) {
        postShower2.innerHTML = postsArray[1];
    }
    
    // Drop the 3rd post into the 3rd box (if it exists)
    if (postsArray[2]) {
        postShower3.innerHTML = postsArray[2];
    }
    
    // Drop the 4th post into the 4th box (if it exists)
    if (postsArray[3]) {
        postShower4.innerHTML = postsArray[3];
    }
});