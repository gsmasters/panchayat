```tsx
import React, { useState } from 'react';
import { Upload, X, Check } from 'lucide-react';

interface ImageUploadProps {
  onUpload: (file: File) => void;
  maxSize?: number; // in MB
  acceptedTypes?: string[];
}

export function ImageUpload({ 
  onUpload, 
  maxSize = 5, // Default 5MB
  acceptedTypes = ['image/jpeg', 'image/png', 'image/webp']
}: ImageUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const validateFile = (file: File): boolean => {
    setError(null);
    setSuccess(false);

    if (!acceptedTypes.includes(file.type)) {
      setError('Invalid file type. Please upload an image file.');
      return false;
    }

    if (file.size > maxSize * 1024 * 1024) {
      setError(`File size too large. Maximum size is ${maxSize}MB.`);
      return false;
    }

    return true;
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        onUpload(file);
        setSuccess(true);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        onUpload(file);
        setSuccess(true);
      }
    }
  };

  return (
    <div className="w-full">
      <div
        className={`relative border-2 border-dashed rounded-lg p-8 text-center ${
          dragActive ? 'border-primary bg-primary/5' : 'border-gray-300'
        } ${error ? 'border-red-500' : ''} ${success ? 'border-green-500' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          className="hidden"
          accept={acceptedTypes.join(',')}
          onChange={handleChange}
          id="image-upload"
        />
        <label
          htmlFor="image-upload"
          className="flex flex-col items-center cursor-pointer"
        >
          <Upload className={`w-12 h-12 mb-4 ${
            error ? 'text-red-500' : success ? 'text-green-500' : 'text-gray-400'
          }`} />
          <p className="text-lg font-medium mb-2">
            {success ? 'File uploaded successfully!' : 'Drop your image here'}
          </p>
          <p className="text-sm text-gray-500">
            or click to select (Max size: {maxSize}MB)
          </p>
        </label>

        {error && (
          <div className="absolute top-2 right-2 flex items-center text-red-500">
            <X className="w-4 h-4 mr-1" />
            <span className="text-sm">{error}</span>
          </div>
        )}

        {success && (
          <div className="absolute top-2 right-2 flex items-center text-green-500">
            <Check className="w-4 h-4 mr-1" />
            <span className="text-sm">Upload successful!</span>
          </div>
        )}
      </div>
    </div>
  );
}
```