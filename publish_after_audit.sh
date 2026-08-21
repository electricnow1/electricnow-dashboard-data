#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

python3 "$PROJECT_DIR/pre_publish_dashboard_audit.py" "$@"

cat <<'MSG'

Pre-publish audit passed. It is now safe to run the GitHub push and deploy_website steps for the refreshed dashboard assets.
MSG
