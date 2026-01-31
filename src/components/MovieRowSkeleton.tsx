import Skeleton from "react-loading-skeleton";

const MovieRowSkeleton = ({ count = 8 }) => {
  return (
    <div className="flex flex-col items-end overflow-hidden img-container w-full max-md:w-full">
      <div className="flex overflow-x-auto gap-4 hide-scrollbar w-[95%] pr-10 max-md:w-full">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="flex-shrink-0">
            <Skeleton
              height={250}
              width={200}
              borderRadius={8}
              baseColor="#202020"
              highlightColor="#333"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRowSkeleton;
