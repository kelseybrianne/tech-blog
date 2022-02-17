const commentForm = document.querySelector("#submit-comment");

const commentOnPost = async (event) => {
  event.preventDefault();

  const post_id = document.querySelector("#post-title").getAttribute("data-id");
  const comment = document.querySelector("#comment").value.trim();

  if (comment) {
    const response = await fetch(`/api/comment`, {
      method: "POST",
      body: JSON.stringify({
        post_id,
        comment,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      console.log("failed to add comment");
    }
  }
};

commentForm.addEventListener("submit", commentOnPost);
