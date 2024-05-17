// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')

function lintPackageJson() {
  const packageJsonPath = 'package.json'

  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
    for (const dependencyType of ['dependencies', 'devDependencies']) {
      if (packageJson[dependencyType]) {
        for (const dependency in packageJson[dependencyType]) {
          if (/^\^/.test(packageJson[dependencyType][dependency])) {
            console.error(`Error: Avoid using "^" before dependency versions in ${dependencyType}.${dependency}`)
            process.exit(1)
          }
        }
      }
    }
    console.log('Package.json linting passed successfully.')
  } catch (error) {
    console.error('Error reading or parsing package.json:', error.message)
    process.exit(1)
  }
}

lintPackageJson()
