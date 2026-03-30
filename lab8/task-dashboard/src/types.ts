export type Status = "todo" | "in-progress" | "done";

export type Bug = {
  type: "bug";
  id: number;
  title: string;
  status: Status;
  severity: "low" | "high" | "critical";
};

export type Feature = {
  type: "feature";
  id: number;
  title: string;
  status: Status;
  priority: number;
  expectedRelease?: string;
};

export type Task = Bug | Feature;
