const title = document.querySelector(".dashboard-post");

const editPost = async (event) => {
  event.stopPropagation();
  console.log(event);
  const id = event.target.getAttribute("data-id");
  console.log(id)

  const response = await fetch(`/dashboard/edit/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/editpost");
  } else {
    console.log("Failed to edit post");
  }
};

console.log(title)
title.addEventListener("click", editPost);
