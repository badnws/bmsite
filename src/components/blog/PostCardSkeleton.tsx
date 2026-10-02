import { Skeleton } from "@/components/ui/skeleton";

export function PostCardSkeleton() {
  return (
    <div className="flex flex-col gap-4 rounded-sm border bg-card p-7">
      <Skeleton className="h-3 w-24" />
      <Skeleton className="h-7 w-full" />
      <Skeleton className="h-7 w-2/3" />
      <Skeleton className="h-16 w-full" />
      <Skeleton className="mt-4 h-3 w-40" />
    </div>
  );
}
