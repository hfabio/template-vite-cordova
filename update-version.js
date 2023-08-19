/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');

const version = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf-8'),
).version;

const getVersions = () => {
  const numbers = version.split('.');
  const generated = `${numbers[0].split('').pop()}${numbers[1]}${numbers[2]
    .split('')
    .pop()}`;
  return {
    version,
    'android-versionCode': generated,
    versionCode: generated,
  };
};

const versions = getVersions();

function readWriteSync(path, variable, value) {
  const data = fs.readFileSync(path, 'utf-8');

  // eslint-disable-next-line no-useless-escape
  const regex = new RegExp(`${variable}="(\d|\.){4,8}"`, 'gi');
  const newValue = data.replace(regex, `${variable}="${value}"`);

  fs.writeFileSync(path, newValue, 'utf-8');
}

//first .env
if (!fs.existsSync('.env')) {
  fs.writeFile(
    '.env',
    `ENV_REACT_APP_VERSION="${version}"`,
    { flag: 'wx' },
    function (err) {
      if (err) throw err;
    },
  );
} else {
  readWriteSync('.env', 'ENV_REACT_APP_VERSION', version);
}

// updating config.xml
Object.keys(versions).forEach((key) =>
  readWriteSync('./config.xml', key, versions[key]),
);

console.log('Update version in files');
console.table({ versions });
