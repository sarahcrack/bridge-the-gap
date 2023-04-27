import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

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

  const navigate = useNavigate();

  function handleContribute(resource) {
    setResources([...resources, resource]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    //input validation
    if (
      contributor === "" ||
      title === "" ||
      description === "" ||
      link === ""
    ) {
      alert("Please fill out all text fields");
      return;
    }
    if (category === "Choose a Category") {
      alert("Please choose a category from the dropdown list");
      return;
    }

    handleContribute({
      contributor,
      category,
      title,
      description,
      link,
    });

    navigate("/thank-you");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="contribute-header"> </h2>
      <label htmlFor="contributor">Your Name</label>
      <input
        placeholder="Your Name"
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
        placeholder="Title"
        type="text"
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <label htmlFor="description">Description</label>
      <input
        placeholder="Description"
        type="text"
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <label htmlFor="link">Link</label>
      <input
        placeholder="Link"
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
