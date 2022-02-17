const newPostForm = document.querySelector("#newPostForm");

const createNewPost = async (event) => {
  event.preventDefault();
  console.log("Inside click event");

  const title = document.querySelector("#newPostTitle").value.trim();
  const content = document.querySelector("#newPostContent").value.trim();

  if (title && content) {
    const response = await fetch(`/api/post`, {
      method: "POST",
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
      alert("failed to create post");
    }
  }
};

newPostForm.addEventListener("click", createNewPost);
