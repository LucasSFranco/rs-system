import 'dotenv/config'

const getEnv = (name: string) => {
  const env = process.env[name]

  if (!env) {
    throw new Error(`${name} environment variable must be set.`)
  }

  return env
}

const PORT = getEnv('PORT')

export { PORT }
