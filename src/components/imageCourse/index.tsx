'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ImageOff } from 'lucide-react';

interface CourseImageProps {
  courseId: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function CourseImage({
  courseId,
  alt,
  className = '',
  width = 400,
  height = 250,
}: CourseImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`/api/courses/${courseId}/image`);
        
        if (response.ok) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          setImageUrl(url);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();

    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [courseId]);

  if (loading) {
    return (
      <div className={`bg-gray-200 animate-pulse ${className}`}>
        ...
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <div className={`bg-gray-100 flex items-center justify-center ${className}`}>
        <ImageOff className="text-gray-400" size={48} />
      </div>
    );
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      className={`object-cover ${className}`}
      onError={() => setError(true)}
    />
  );
}