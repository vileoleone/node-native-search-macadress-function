import os from 'node:os'
import getLinuxParams from './getLinuxAddress.js'
import getWindowsParams from './getWindowsAddress.js'
import getUnixParams from './getUnixAddress.js'

export const getPlatformParams = async () => {
  console.log(os.platform())
  let params

  switch (os.platform()) {
    case 'win32':
      params = await getWindowsParams()
      break

    case 'linux':
      params = await getLinuxParams()
      break

    case 'darwin':
    case 'sunos':
    case 'freebsd':
      params = await getUnixParams()
      break

    default:
      console.log("node-macaddress: Unknown os.platform(), defaulting to 'unix'.")
      params = await getUnixParams()
      break
  }
  return params
}

export default getPlatformParams
