import Skeleton from "react-loading-skeleton";

const MovieGridSkeleton = ({ count = 7 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div className="w-[200px] h-[250px] px-1 max-md:px-0 max-md:w-full">
          <Skeleton
            height="100%"
            width="100%"
            borderRadius={8}
            baseColor="#202020"
            highlightColor="#333"
          />
        </div>
      ))}
    </>
  );
};

export default MovieGridSkeleton;
