```tsx
import React from 'react';
import { X } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  onRemove?: (index: number) => void;
}

export function ImageGallery({ images, onRemove }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative group">
          <img
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg"
          />
          {onRemove && (
            <button
              onClick={() => onRemove(index)}
              className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="w-4 h-4 text-red-500" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
```