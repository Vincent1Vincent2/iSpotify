export interface ImageObject {
  url: string; // The source URL of the image
  height: number | null; // Nullable, the image height in pixels
  width: number | null; // Nullable, the image width in pixels
}

export interface SpotifyImagesData {
  height: number;
  url: string;
  width: number;
}
