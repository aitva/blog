#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Build the project.
hugo

# Add changes to git.
git add -A

# Commit changes.
git commit

# Push source and build repos.
git push origin master
git subtree push --prefix=public git@github.com:aitva/blog.git gh-pages
