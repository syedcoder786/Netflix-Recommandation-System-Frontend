import Skeleton from "react-loading-skeleton";

const MoreLikeThisSkeleton = () => {
  return (
    <div className="cursor-pointer rounded-md overflow-hidden">
      <div
        className="bg-[#2a2a2a] 
                      w-[210px] h-[260px]
                      max-md:w-full max-md:h-[200px]
                      rounded-md overflow-hidden"
      >
        <Skeleton
          height="100%"
          width="100%"
          baseColor="#2a2a2a"
          highlightColor="#3a3a3a"
        />
      </div>
    </div>
  );
};

export default MoreLikeThisSkeleton;
