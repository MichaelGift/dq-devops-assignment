echo "Updating dq_app..."
echo "This may take a few minutes..."

chmod +x ./scripts/cd.sh

echo "Pulling latest image from Docker Hub..."
docker pull dkantares/dq-devops:dev-latest
echo ""

echo "Updating running container..."
docker service update --image dkantares/dq-devops:dev-latest dq_app
echo ""

echo "Checking service status..."
docker service ls | grep dq_app
echo ""

echo "Update complete!"
echo ""

echo "Useful Commands:"
echo "   View Logs: docker service logs dq_app"
echo "   Restart: docker service update --force dq_app"
echo ""
