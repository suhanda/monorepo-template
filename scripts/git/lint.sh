#!/bin/bash

# Paths to the linter and prettier executables
LINTER="./node_modules/.bin/eslint"
PRETTIER="./node_modules/.bin/prettier"

# Check if linter and prettier exist
if [ ! -f "$LINTER" ]; then
  echo "Linter not found! Please install it first."
  exit 1
fi

if [ ! -f "$PRETTIER" ]; then
  echo "Prettier not found! Please install it first."
  exit 1
fi

# Run the linter and prettier on staged files
STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep '\.js\|\.jsx\|\.ts\|\.tsx$')

if [ -z "$STAGED_FILES" ]; then
  echo "No JavaScript/TypeScript files staged for commit."
  exit 0
fi

echo "Running linter on staged files..."
$LINTER $STAGED_FILES

# Check if linter passed
if [ $? -ne 0 ]; then
  echo "Linter failed. Please fix the issues before committing."
  exit 1
fi

echo "Running prettier on staged files..."
$PRETTIER --write $STAGED_FILES

# Add the formatted files back to the staging area
git add $STAGED_FILES

echo "Prettier passed. Proceeding with commit."
exit 0