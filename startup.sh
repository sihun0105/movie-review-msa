{
    echo "Starting services with PM2..."

    pm2 start pnpm --name api-gateway -- dev api-gateway
    pm2 start pnpm --name user -- dev user
    pm2 start pnpm --name auth -- dev auth
    pm2 start pnpm --name chat -- dev chat
    pm2 start pnpm --name cron -- dev cron
    pm2 start pnpm --name movie -- dev movie
    pm2 start pnpm --name reply -- dev reply

    echo "All services started with PM2!"

    # PM2 프로세스 리스트 출력
    pm2 list
}