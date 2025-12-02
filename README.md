# Form Assignment - Frontend Design Test

This project is a form design implementation created as an ability test for a contractor position. It demonstrates proficiency in React, TypeScript, Tailwind CSS, and modern frontend development practices.

## Project Overview

A pixel-perfect implementation of a page selection form with the following features:

- **Custom Checkbox Design**: Styled checkboxes with hover effects and smooth transitions
- **"All Pages" Master Control**: Select/deselect all pages at once
- **Responsive Interactions**: Full-row clickable areas with visual feedback
- **Scrollable List**: Smooth scrolling with hidden scrollbars for a clean UI
- **TypeScript**: Type-safe component architecture
- **Tailwind CSS**: Modern utility-first styling approach

## Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts (Montserrat)** - Typography

## Features Implemented

✅ Custom checkbox components with SVG icons  
✅ Master "All pages" checkbox with bidirectional sync  
✅ Individual page checkboxes (Page 1-6)  
✅ Hover effects on checkboxes  
✅ Full-row clickable areas  
✅ Hidden scrollbar with maintained scroll functionality  
✅ Pixel-perfect design matching provided mockup  
✅ Smooth transitions and animations  

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── App.tsx          # Main form component
├── App.css          # Global styles and utilities
├── main.tsx         # Application entry point
└── index.css        # Base CSS
```

## Design Specifications

- Form Container: 578px × 794px
- Form Card: 370px × 326px with 6px border-radius
- Checkbox Size: 22px × 22px with rounded corners
- Font: Montserrat (15px for "All pages", 14px for individual pages)
- Colors: Blue (#2563EB) for checked state, Gray for unchecked
- Hover: Semi-transparent checkmark preview

## Key Implementation Details

- Uses React hooks (useState) for state management
- Custom checkbox styling using Tailwind CSS peer selectors
- Hidden native checkboxes with custom visual overlays
- Group hover effects for entire row interactions
- Automatic "All pages" state synchronization

## Contact

Created as a demonstration of frontend development skills for contractor evaluation.
