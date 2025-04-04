#!/bin/bash

# Configuration
REMOTE_HOST="root@217.160.55.21"
REMOTE_PATH="/var/www/neurospicy_icu"
LOCAL_PATH=".output/public"

# Build the project
echo "Building project..."
npm run generate

# Deploy using rsync (much faster than scp)
echo "Deploying to $REMOTE_HOST..."
rsync -avz --delete \
  --exclude '.git' \
  --exclude 'node_modules' \
  $LOCAL_PATH/ $REMOTE_HOST:$REMOTE_PATH/

# Set proper permissions
echo "Setting permissions..."
ssh $REMOTE_HOST "chown -R www-data:www-data $REMOTE_PATH && chmod -R 755 $REMOTE_PATH"

echo "Deployment complete!" 