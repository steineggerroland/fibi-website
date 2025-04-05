#!/bin/bash

# Default configuration
REMOTE_HOST="root@217.160.55.21"
REMOTE_PATH="/var/www/neurospicy_icu"
LOCAL_PATH=".output/public"
SKIP_BUILD=false
VERBOSE=false

# Parse command line arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    -s|--skip)
      SKIP_BUILD=true
      shift
      ;;
    -v|--verbose)
      VERBOSE=true
      shift
      ;;
    --remote-host)
      REMOTE_HOST="$2"
      shift 2
      ;;
    --remote-path)
      REMOTE_PATH="$2"
      shift 2
      ;;
    --local-path)
      LOCAL_PATH="$2"
      shift 2
      ;;
    *)
      echo "Unknown option: $1"
      echo "Usage: $0 [-s|--skip] [-v|--verbose] [--remote-host HOST] [--remote-path PATH] [--local-path PATH]"
      exit 1
      ;;
  esac
done

# Build the project if not skipped
if [ "$SKIP_BUILD" = false ]; then
  echo "Building project..."
  if [ "$VERBOSE" = true ]; then
    npm run generate
  else
    npm run generate > /dev/null 2>&1
  fi
fi

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