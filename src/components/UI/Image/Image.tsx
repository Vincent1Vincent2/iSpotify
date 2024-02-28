import { FC, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Skeleton from "react-loading-skeleton";

export interface ImageLazyProps {
  src?: string;
  alt?: string;
  inclSkeleton?: boolean;
  colorRaw?: string;
}

export const ImageLoad: FC<ImageLazyProps> = (props) => {
  const { src = "", alt = "", inclSkeleton = true, colorRaw = "" } = props;
  const [isLoading, setLoading] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });

  useEffect(() => {
    if (inView && !mounted) {
      setMounted(true);
    }
  }, [inView]);

  useEffect(() => {
    if (mounted) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoading(false);
      };
    }
  }, [src, mounted]);

  return (
    <div ref={ref}>
      <div style={{ display: !isLoading ? "none" : "" }}>
        {inclSkeleton ? (
          <Skeleton height={500} width="100%" />
        ) : (
          <div
            style={{ backgroundColor: colorRaw ? colorRaw : undefined }}
          ></div>
        )}
      </div>
      <img
        src={mounted ? src : ""}
        alt={alt}
        style={{
          display: isLoading ? "none" : "",
        }}
      />
    </div>
  );
};

export default ImageLoad;
