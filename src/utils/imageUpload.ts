```typescript
export async function uploadImage(file: File): Promise<string> {
  // In a real application, you would upload to a server
  // For now, we'll create an object URL
  return URL.createObjectURL(file);
}

export function validateImageFile(file: File, maxSize: number = 5): boolean {
  const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
  
  if (!validTypes.includes(file.type)) {
    throw new Error('Invalid file type. Please upload an image file.');
  }

  if (file.size > maxSize * 1024 * 1024) {
    throw new Error(`File size too large. Maximum size is ${maxSize}MB.`);
  }

  return true;
}
```