# Image Assets

## Usage

Upload your images to this folder and reference them in your components.

### Hero Profile Image
- Upload your professional headshot/profile image here
- Recommended name: `profile.jpg` or `profile.png`
- Recommended size: 1000x1000px or larger (square aspect ratio)
- Format: JPG or PNG

### Project Images
- Upload project screenshots/images here
- Use descriptive names like `project-healthcare.jpg`
- Recommended size: 1920x1080px or similar

## Current Images Needed

1. **profile.jpg** - Your professional headshot for the hero section
2. Project images for the portfolio section (optional - currently using placeholders)

## How to Reference

In your React components, reference images like:
```tsx
<img src="/images/profile.jpg" alt="Your Name" />
```

Or with ImageWithFallback:
```tsx
<ImageWithFallback src="/images/profile.jpg" alt="Your Name" />
```
