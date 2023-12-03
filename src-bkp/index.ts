import { server } from '@/index'
import * as env from '@/main/configs/env'

server.listen(
  env.PORT,
  () => { console.log(`Listening on http://localhost:${env.PORT}`) }
)
