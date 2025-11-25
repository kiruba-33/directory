import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Category ID: {id}</h1>
      <p>Show products or offers related to this category here.</p>
    </div>
  );
};

export default CategoryPage;
