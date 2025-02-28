import { select, input } from "@inquirer/prompts"
import { clone } from "../utils/clone"
import fs from 'fs-extra'
import { templateList, templates } from "../utils/template"
import { getProjectPath, isOverwrite } from "../utils/overwrite"
import { checkVersion } from "../utils/check-version"

export async function create(projectName?: string) {
  if (!projectName) {
    projectName = await input({ message: '请输入项目名称' })
  }

  // 根据项目名称获取项目路径
  const projectPath = getProjectPath(projectName)
  if (fs.existsSync(projectPath)) {
    const isExist = await isOverwrite("项目已存在，是否覆盖？")
    if (!isExist) return
    await fs.remove(projectPath)
  }
  
  // 检查版本更新
  await checkVersion()

  // 选择版本
  const templateName = await select({
    message: '请选择模板',
    choices: templateList
  })
  const info = templates.get(templateName)

  if (info) {
    clone(info.downloadUrl, projectName, ["-b", info.branch])
  }
}



