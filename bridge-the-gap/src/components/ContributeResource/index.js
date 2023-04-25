import {useState} from "react";

function ContributeResource({onContribute}) {
  const [contributor, setContributor] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onContribute({contributor, category, title, description, link});
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
      <input type="text" id="contributor" value={contributor} onChange={(event) => setContributor(event.target.value)} />
      <label htmlFor="category">Category</label>
      <input type="text" id="category" value={category} onChange={(event) => setCategory(event.target.value)} />
      <label htmlFor="title">Title</label>
      <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} />
      <label htmlFor="description">Description</label>
      <input type="text" id="description" value={description} onChange={(event) => setDescription(event.target.value)} />
      <label htmlFor="link">Link</label>
      <input type="text" id="link" value={link} onChange={(event) => setLink(event.target.value)} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default ContributeResource;

