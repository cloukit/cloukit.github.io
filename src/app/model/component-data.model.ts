/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
export class ComponentData {
  name: string;
  status: string;
  description: string;
  versions: ComponentDataVersion[];
}

export class ComponentDataVersion {
  version: string;
  modules: string[];
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

export class PackageJson {
  peerDependencies: any;
  dependencies: any;
  description: string;
}
