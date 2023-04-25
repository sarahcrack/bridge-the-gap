import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContributeResource({ resources, setResources }) {
  const [contributor, setContributor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const [categoryList, setCategoryList] = useState([
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
    handleContribute({
      contributor,
      category,
      title,
      description,
      link,
    });
    //console.log(contributor, category, title, description, link);
    event.preventDefault();
    setContributor("");
    setCategory("");
    setTitle("");
    setDescription("");
    setLink("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="contribute-header">Contribute a Resource</h2>
      <label htmlFor="contributor">Contributor</label>
      <input
        type="text"
        id="contributor"
        value={contributor}
        onChange={(event) => setContributor(event.target.value)}
      />
      <label htmlFor="category">Category</label>
      <select
        id="category"
        onChange={(event) => setCategory(event.target.value)} // this needs fixing as you can't change it sometimes
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
