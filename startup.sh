{
    echo "Starting services with PM2..."

    pm2 start pnpm --name api-gateway -- start api-gateway
    pm2 start pnpm --name user -- start user
    pm2 start pnpm --name auth -- start auth
    pm2 start pnpm --name chat -- start chat
    pm2 start pnpm --name cron -- start cron
    pm2 start pnpm --name movie -- start movie
    pm2 start pnpm --name reply -- start reply

    echo "All services started with PM2!"

    # PM2 프로세스 리스트 출력
    pm2 list
}