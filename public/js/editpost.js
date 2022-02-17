const editPostForm = document.querySelector("#editPostForm");

const editPost = async (event) => {
  event.preventDefault();
  console.log("Inside click event");

  const id = document.querySelector(".title-id").getAttribute("id");
  const title = document.querySelector("#editPostTitle").value.trim();
  const content = document.querySelector("#editPostContent").value.trim();

  if (title && content) {
    const response = await fetch(`/api/post/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("failed to update post");
    }
  }
};

editPostForm.addEventListener("click", editPost);