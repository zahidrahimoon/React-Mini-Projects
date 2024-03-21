# React Models Card Component

This React component displays a collection of models using a visually appealing Card layout. Each card showcases a model's name, description, and image. Designed with simplicity and ease of use in mind, this component is perfect for projects requiring a stylish presentation of individual profiles or items.

## Features

- **Responsive Design:** Each card is designed to be responsive, ensuring a great look on devices of all sizes.
- **Customizable:** Easily customize the appearance to fit your project's theme.
- **Interactive UI:** Hover effects and a clear call-to-action button enhance user experience.

## Preview
Demo : [simple cards](https://modelinfocards.netlify.app/)

## Getting Started

To integrate the Models Card Component into your project, follow these simple steps:

### Prerequisites

Ensure you have React and Tailwind CSS set up in your project. Tailwind CSS is used for styling the components.

### Installation

1. Copy the `Card.js` file into your project's component directory.
2. Ensure Tailwind CSS is installed and properly configured in your project. Visit [Tailwind CSS documentation](https://tailwindcss.com/docs/installation) for installation guidance.

### Usage

Here's how to use the Card component in your project:

```jsx
import React from "react";
import Card from './components/Card'; // Adjust the import path based on your project structure
import './index.css'; // Ensure your project includes Tailwind CSS

function App() {
  return (
    <div className="bg-black min-h-screen">
      <h1 className="font-bold text-center mt-8 mb-7 text-5xl text-white">Models</h1>
      <div className="flex justify-center items-center gap-5 flex-wrap">
        <Card
          title="Orin"
          para="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image="https://example.com/path-to-image.jpg"
        />
        {/* Repeat <Card /> component for each model */}
      </div>
    </div>
  );
}

export default App;
```

### Props

The `Card` component accepts the following props:

- `title`: String - The title of the model.
- `para`: String - A short description or bio of the model.
- `image`: String - The URL of the model's image.

## Customization

To customize the component's styles, modify the Tailwind CSS classes within `Card.js`. If new styles are required, consider extending your Tailwind configuration or adding custom classes in your stylesheet.

## Support

For support, questions, or contributions, please open an issue or a pull request in the project's GitHub repository.
