import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MoreLikeThisSkeleton = () => {
  return (
    <div className="bg-[#2a2a2a] w-[210px] h-[260px] max-md:h-[200px] max-md:w-[140px] rounded-md overflow-hidden">
      <Skeleton
        height="100%"
        width="100%"
        baseColor="#2a2a2a"
        highlightColor="#3a3a3a"
      />
    </div>
  );
};

export default MoreLikeThisSkeleton;
