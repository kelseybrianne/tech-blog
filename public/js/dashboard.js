// const title = document.querySelector(".dashboard-post");

// const editPost = async (event) => {
//   event.stopPropagation();
//   const id = event.target.getAttribute("data-id");

//   const response = await fetch(`/dashboard/edit/${id}`, {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   });

//   if (response.ok) {
//     document.location.replace("/editpost");
//   } else {
//     console.log("Failed to edit post");
//   }
// };

// console.log(title)
// title.addEventListener("click", editPost);
