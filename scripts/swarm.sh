echo "Deploying local dev stack..."
echo "This may take a few minutes..."
echo ""

chmod +x ./scripts/swarm.sh

echo "Stopping and removing existing stack (if any)..."
docker stack rm dq
echo ""

sleep 10

echo "Deploying new stack..."
echo ""

docker stack deploy -c swarm.yaml dq
echo ""

echo "Waiting for services to stabilize..."
echo ""

sleep 15

echo "Checking service status..."
docker stack services dq
echo ""

echo "Deployment complete!"
echo ""
echo "Access the application at: http://localhost:3000"
echo ""
echo "Useful Commands:"
echo "   List Services: docker stack services dq"
echo "   View Logs: docker service logs dq_<service_name>"
echo "   Remove Stack: docker stack rm dq"
echo "   Restart: docker service update --force dq_<service_name>"
echo ""


