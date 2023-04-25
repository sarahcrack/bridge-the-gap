import { useState } from "react";

function ContributeResource({ onContribute }) {
  const [contributor, setContributor] = useState("");
  // const [category, setCategory] = useState("");
  //make an array with categories and map through it to create a dropdown menu
  const [categories, setCategories] = useState([
    "Coding",
    "Design",
    "Collaboration",
    "Planning",
    "Turorials",
    "Careers",
  ]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onContribute({
      contributor,
      category: selectedCategory,
      title,
      description,
      link,
    });
    setContributor("");
    setSelectedCategory(categories[0]);
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
        value={selectedCategory}
        onChange={(event) => setSelectedCategory(event.target.value)}
      >
        {categories.map((category) => (
          <option value={category}>{category}</option>
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
