const COMMUNITY_DB_NAME = "community-app-db";
const loggedInUser_community = getLoggedInUser();

const communityCommentItems = document.getElementById("community-comment-items");
const communityInput = document.getElementById("community-input");
const communityPostButton = document.getElementById("community-post-button");
const communityInputIconWrap = document.getElementById("community-input-icon-wrap")

const getCommunityInputValue = () => communityInput.value;

const CommunityCommentItem = ({ initial, username, comment, date }) => {
    
    return `
        <div class="community-comment-item">
            <div class="community-comment-item-icon">
            <span>${initial}</span>
            </div>
            <div class="community-comment-item-info">
                <b class="community-comment-item-username">${username}</b>
                <p class="community-comment-item-description">
                    ${comment}
                </p>
            </div>

            <span class="community-comment-item-time">${date}</span>
        </div>
    `
}

communityPostButton.addEventListener("click", () => {
    addComment()
});

function getComments() {
    const database = getDatabase(COMMUNITY_DB_NAME, []);

    return database;
}

function updateCommunityDatabase(communityList) {
    updateDatabase(COMMUNITY_DB_NAME, communityList);

    return true;
}

let communityList = getComments();

const printComments = () => {
    if (communityList.length > 0) {
        let communityListItems = "";

        communityList.forEach((item) => {
            communityListItems += CommunityCommentItem(item);
        });

        communityCommentItems.innerHTML = communityListItems;
    }
}

const addComment = () => {
    let inputValue = getCommunityInputValue();

    const fullname = loggedInUser_community.fullname;
    const fullnameArray = fullname.split("");
    const userInitial = fullnameArray[0];

    const newComment = {
        initial: userInitial,
        username: fullname,
        comment: inputValue,
        date: "Just now"
    }

    communityList = [newComment, ...communityList]
    updateCommunityDatabase(communityList);
    printComments();
    communityInput.value = ""
}

printComments();

communityInputIconWrap.innerHTML = loggedInUser_community.fullname[0]