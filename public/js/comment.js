const editPost = async (event) => {
    event.preventDefault();
  
    const postId = document.querySelector("#post-title").getAttribute("data-id").value;
    const comment = document.querySelector("#comment").value.trim();

    if(comment) {
        await fetch(`/api/post/${}`)
    }
}

document
  .querySelector("#submit-comment")
  .addEventListener("submit", editPost);