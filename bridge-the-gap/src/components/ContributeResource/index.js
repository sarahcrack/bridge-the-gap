import { useState } from "react";
import "./style.css";
import { useState, useEffect } from "react";

function ContributeResource({ resources, setResources }) {
  const [contributor, setContributor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const [categoryList, setCategoryList] = useState([
    "Choose a Category",
    "Coding",
    "Design",
    "Collaboration",
    "Planning",
    "Tutorials",
    "Careers",
  ]);

  function handleContribute(resource) {
    setResources([...resources, resource]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleContribute({
      contributor,
      category,
      title,
      description,
      link,
    });
    //console.log(contributor, category, title, description, link);
    setContributor("");
    setCategory("");
    setTitle("");
    setDescription("");
    setLink("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="contribute-header"> </h2>
      <label htmlFor="contributor">Your Name</label>
      <input
        type="text"
        id="contributor"
        value={contributor}
        onChange={(event) => setContributor(event.target.value)}
      />
      <label htmlFor="category">Category</label>
      <select
        id="category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        {categoryList.map((cat) => (
          <option value={cat} key={Math.random()}>
            {cat}
          </option>
        ))}
      </select>

      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <label htmlFor="link">Link</label>
      <input
        type="text"
        id="link"
        value={link}
        onChange={(event) => setLink(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContributeResource;

// import { useState, useEffect } from "react";

// function ContributeResource({ resources, setResources }) {
//   const [contributor, setContributor] = useState("");

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [link, setLink] = useState("");
//   const [category, setCategory] = useState("");

//   //make an array with categories and map through it to create a dropdown menu
//   const [categoryList, setCategoryList] = useState([
//     "Coding",
//     "Design",
//     "Collaboration",
//     "Planning",
//     "Tutorials",
//     "Careers",
//   ]);

//   function handleContribute(resource) {
//     setResources([...resources, resource]);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     handleContribute({
//       contributor,
//       category,

//   const [selectedCategory, setSelectedCategory] = useState(categories[0]);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [link, setLink] = useState("");

//   function handleSubmit(event) {
//     event.preventDefault();
//     onContribute({
//       contributor,
//       category,
//       title,
//       description,
//       link,
//     });

//     setContributor("");
//     setCategory("");
//     setTitle("");
//     setDescription("");
//     setLink("");
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2 className="contribute-header">Contribute a Resource</h2>
//       <label htmlFor="contributor">Contributor</label>
//       <input
//         type="text"
//         id="contributor"
//         value={contributor}
//         onChange={(event) => setContributor(event.target.value)}
//       />
//       <label htmlFor="category">Category</label>
//       <select
//         id="category"
//         value={category}
//         onChange={(event) => setCategory(event.target.value)}
//       >
//         {categoryList.map((cat) => (
//           <option value={cat} key={Math.random()}>
//             {cat}
//           </option>
//         ))}
//       </select>

//       <label htmlFor="title">Title</label>
//       <input
//         type="text"
//         id="title"
//         value={title}
//         onChange={(event) => setTitle(event.target.value)}
//       />
//       <label htmlFor="description">Description</label>
//       <input
//         type="text"
//         id="description"
//         value={description}
//         onChange={(event) => setDescription(event.target.value)}
//       />
//       <label htmlFor="link">Link</label>
//       <input
//         type="text"
//         id="link"
//         value={link}
//         onChange={(event) => setLink(event.target.value)}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default ContributeResource;
