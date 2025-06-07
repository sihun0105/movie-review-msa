{
    echo "Starting services with PM2..."

    pm2 start pnpm --name api-gateway -- dev api-gateway --time
    pm2 start pnpm --name user -- dev user --time
    pm2 start pnpm --name auth -- dev auth --time
    pm2 start pnpm --name chat -- dev chat --time
    pm2 start pnpm --name cron -- dev cron --time
    pm2 start pnpm --name movie -- dev movie --time
    pm2 start pnpm --name reply -- dev reply --time
    pm2 start pnpm --name article -- dev article --time

    echo "All services started with PM2!"

    # PM2 프로세스 리스트 출력
    pm2 list
}