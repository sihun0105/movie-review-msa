{
    echo "Stopping all services with PM2..."

    pm2 delete api-gateway
    pm2 delete user
    pm2 delete auth
    pm2 delete chat
    pm2 delete cron
    pm2 delete movie
    pm2 delete reply
    pm2 delete article

    echo "All services stopped!"

    pm2 list
}