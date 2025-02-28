// 检查 npm 包版本，是否需要更新
import type { AxiosResponse } from "axios"

import axios from "axios"
import chalk from "chalk"
import semver from 'semver' // npm 官方提供的解析和比较语义化版本的库

import { name, version } from '../../package.json'

// 获取 npm 包最新版本
const getNpmInfo = async (npmName: string) => {
  const npmUrl = `https://registry.npmjs.org/${npmName}`

  try {
    const { data } = (await axios.get(npmUrl)) as AxiosResponse
    return data["dist-tags"].latest
  } catch (e) {
    console.log(e)
  }
  return {}
}

// 检查版本
export const checkVersion = async () => {
  const latestVersion = await getNpmInfo(name)
  const needUpdate = semver.gt(latestVersion, version)
  
  if (needUpdate) {
    console.warn(
      `${chalk.green(name)} 版本需要更新，当前版本：${chalk.blue(
        version
      )}, 最新版本：${chalk.blueBright(latestVersion)}`
    )
    console.log(
      `可使用${chalk.yellow(
        "npm install ferhannah-cli@latest -g"
      )} 或 ${chalk.yellow("ferhannah update")} 更新`
    )
  }
}