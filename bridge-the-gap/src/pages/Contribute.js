import ContributeResource from "../components/ContributeResource";

export default function Contribute({ resources, setResources }) {
  return (
    <ContributeResource resources={resources} setResources={setResources} />
  );
}
