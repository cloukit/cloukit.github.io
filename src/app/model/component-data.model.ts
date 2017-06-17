export class ComponentData {
  name: string;
  versions: ComponentDataVersion[];
}

export class ComponentDataVersion {
  version: string;
  modules: string[];
  dependsOnComponents: string[];
}

export class ComponentPreviewFile {
  filename: string;
  fileUrl: string;
  sourceCode: string;
  constructor(filename: string, fileUrl: string, sourceCode: string) {
    this.filename = filename;
    this.fileUrl = fileUrl;
    this.sourceCode = sourceCode;
  }
}