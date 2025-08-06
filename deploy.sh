#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful!"
    echo "The project is ready for deployment to GitHub Pages."
    echo ""
    echo "To deploy:"
    echo "1. Commit and push your changes to GitHub"
    echo "2. Go to your repository settings"
    echo "3. Navigate to Pages section"
    echo "4. Set source to 'GitHub Actions'"
    echo "5. The GitHub Actions workflow will automatically build and deploy"
    echo ""
    echo "Or manually deploy by copying the 'dist' folder contents to your gh-pages branch"
else
    echo "Build failed! Please check the errors above."
    exit 1
fi