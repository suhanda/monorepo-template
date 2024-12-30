#!/bin/bash

# Find and remove all node_modules directories in the monorepo
find . -name "node_modules" -type d -prune -exec rm -rf '{}' +

echo "All node_modules directories have been deleted."