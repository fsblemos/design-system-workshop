const fs = require('fs');
const { execSync } = require('child_process');

const PACKAGE_JSON_FILE = 'package.json';
const SONAR_PROJECT_FILE = 'sonar-project.properties';

const packageJson = fs.readFileSync(PACKAGE_JSON_FILE);
const projectVersion = JSON.parse(packageJson).version;

let sonarProperties = fs.readFileSync(SONAR_PROJECT_FILE, 'UTF-8');
sonarProperties = sonarProperties.replace(/(sonar\.projectVersion=).*/g, `$1${projectVersion}`);

fs.writeFileSync(SONAR_PROJECT_FILE, sonarProperties);

execSync('git add sonar-project.properties');
