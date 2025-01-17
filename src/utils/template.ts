export interface TemplateInfo {
  name: string; // 模板名称
  downloadUrl: string; // 模板下载地址
  description: string; // 模板描述
  branch: string; // 模板分支
}

export const templates: Map<string, TemplateInfo> = new Map([
  [
    "Vite-Vue3-TypeScript",
    {
      name: "Vite-Vue3-TypeScript",
      downloadUrl: "https://gitee.com/feng-xiaohan/fer-templates.git",
      description: "Vite-Vue3-TypeScript",
      branch: "master",
    },
  ],
])

// 初始化模板列表
export const templateList = Array.from(templates).map(
  (item: [string, TemplateInfo]) => {
    const [name, info] = item
    return {
      name,
      value: name,
      description: info.description,
    }
  }
)
