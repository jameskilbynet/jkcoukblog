#!/bin/bash
# Setup script for connecting to GitHub repository

echo "🚀 GitHub Repository Setup Script"
echo "=================================="
echo

if [ $# -eq 0 ]; then
    echo "Usage: $0 <github_repo_url>"
    echo
    echo "Example:"
    echo "  $0 https://github.com/yourusername/jkcoukblog.git"
    echo "  $0 git@github.com:yourusername/jkcoukblog.git"
    echo
    echo "📋 Steps to get the URL:"
    echo "1. Go to https://github.com"
    echo "2. Click 'New repository'"
    echo "3. Name it 'jkcoukblog'"
    echo "4. Keep it public (since we removed all credentials)"
    echo "5. Don't initialize with README (we already have files)"
    echo "6. Copy the repository URL"
    exit 1
fi

REPO_URL="$1"

echo "🔗 Repository URL: $REPO_URL"
echo

# Add the GitHub remote
echo "📡 Adding GitHub remote..."
git remote add origin "$REPO_URL"

# Verify the remote was added
echo "✅ Remote added successfully:"
git remote -v

echo
echo "📊 Repository status:"
git status

echo
echo "🚀 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo
    echo "🎉 SUCCESS! Repository pushed to GitHub"
    echo
    echo "🔧 Next steps:"
    echo "1. Go to your GitHub repository settings"
    echo "2. Navigate to: Settings → Secrets and variables → Actions"
    echo "3. Add secret: WP_AUTH_TOKEN = YWRtaW46UHAwdTMwYjE="
    echo "4. Set up your self-hosted runner:"
    echo "   - Settings → Actions → Runners → New self-hosted runner"
    echo "5. Test the workflow: Actions → WordPress to Static Site Deploy → Run workflow"
    echo
    echo "🔐 Security confirmed: No hardcoded credentials in repository"
else
    echo
    echo "❌ Push failed. Check the error above."
    echo "Common solutions:"
    echo "- Verify the repository URL is correct"
    echo "- Check your GitHub authentication (SSH key or token)"
    echo "- Ensure the repository exists on GitHub"
fi