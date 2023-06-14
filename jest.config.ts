import { compilerOptions } from './tsconfig.json'
import { type JestConfigWithTsJest, pathsToModuleNameMapper } from 'ts-jest'

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' })
}

export default config
