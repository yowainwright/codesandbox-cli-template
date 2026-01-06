export interface TaskConfig {
  setupTasks: { name: string; command: string }[];
  tasks: {
    run: { name: string; command: string; runAtStart: boolean };
  };
}

export interface LanguageConfig {
  name: string;
  demoDir: string;
  remove: string[];
  tasks: TaskConfig;
  rootPkg: (name: string) => Record<string, unknown>;
  run: string;
}
