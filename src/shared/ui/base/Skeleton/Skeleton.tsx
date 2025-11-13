import cn from "classnames";

import styles from "./Skeleton.module.css";

export interface SkeletonProps {
  containerClassName?: string;
  className?: string;
  count?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  containerClassName,
  count = 1,
}) => (
  <div className={cn("flex flex-col", containerClassName)}>
    {Array.from({ length: count }, (_v, idx) => (
      <div
        key={idx}
        className={cn(styles.rect, styles["skeleton-content"], className)}
      ></div>
    ))}
  </div>
);
