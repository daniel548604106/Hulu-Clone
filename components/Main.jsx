import Thumbnail from './Thumbnail';

const Main = ({ results }) => {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-4  ">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Main;
