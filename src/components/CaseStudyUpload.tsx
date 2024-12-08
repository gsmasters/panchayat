```tsx
import React, { useState } from 'react';
import { ImageUpload } from './ImageUpload';
import { ImageGallery } from './ImageGallery';
import { uploadImage } from '../utils/imageUpload';

export function CaseStudyUpload() {
  const [images, setImages] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (file: File) => {
    try {
      setUploading(true);
      const imageUrl = await uploadImage(file);
      setImages(prev => [...prev, imageUrl]);
    } catch (error) {
      console.error('Upload failed:', error);
      // Handle error appropriately
    } finally {
      setUploading(false);
    }
  };

  const handleRemove = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Upload Case Study Images</h2>
        <ImageUpload 
          onUpload={handleUpload}
          maxSize={5}
          acceptedTypes={['image/jpeg', 'image/png', 'image/webp']}
        />
      </div>

      {images.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Uploaded Images</h3>
          <ImageGallery images={images} onRemove={handleRemove} />
        </div>
      )}
    </div>
  );
}
```