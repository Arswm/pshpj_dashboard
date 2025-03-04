import { Skeleton } from '@/components/ui/skeleton';

const PermissionSkelton = () => {
  return (
    <div className="grid grid-cols-4 gap-2 h-full w-full ">
      {Array.from({ length: 80 }).map((_, index) => (
        <Skeleton key={index} className="h-5 w-full" />
      ))}
    </div>
  );
};

export default PermissionSkelton;
