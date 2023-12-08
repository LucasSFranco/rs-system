import 'dotenv/config'

const getEnv = (name: string) => {
  const env = process.env[name]

  if (!env) {
    throw new Error(`${name} environment variable must be set.`)
  }

  return env
}

const PORT = getEnv('PORT')
// const JWT_SECRET = getEnv('JWT_SECRET')

// export { PORT, JWT_SECRET }
export { PORT }
