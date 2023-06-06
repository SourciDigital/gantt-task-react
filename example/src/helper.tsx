import { Task } from "../../dist/types/public-types";

export function initTasks() {
  let tasks = [
  {
    id: "6462f1fed41d3c0012d310a8",
    name: "Builder page 1",
    progress: 0,
    type: "project",
    hideChildren: false,
    indexSort: 0,
    start: new Date("2023-05-15T23:00:00.000Z"),
    end: new Date("2023-05-20T07:00:00.000Z"),
  },
  {
    start: new Date("2023-05-15T23:00:00.000Z"),
    end: new Date("2023-05-19T07:00:00.000Z"),
    name: "0 Writting checklist and take note for testing",
    id: "6462f1ffd41d3c0012d310ae",
    type: "task",
    progress: 0,
    isDisabled: false,
    project: "6462f1fed41d3c0012d310a8",
    styles: {
      progressColor: "#197b56",
      progressSelectedColor: "#00a898",
    },
    dependencies: [],
    after: [],
    indexSort: 0,
  },
  {
    start: new Date("2023-05-15T23:00:00.000Z"),
    end: new Date("2023-05-20T07:00:00.000Z"),
    name: "1 Task 1",
    id: "6462f1ffd41d3c0012d310af",
    type: "task",
    progress: 0,
    isDisabled: false,
    project: "6462f1fed41d3c0012d310a8",
    styles: {
      progressColor: "#197b56",
      progressSelectedColor: "#00a898",
    },
    dependencies: [],
    after: [],
    indexSort: 1,
  },
  {
    start: new Date("2023-05-15T23:00:00.000Z"),
    end: new Date("2023-05-20T07:00:00.000Z"),
    name: "2 Test for change validation rule",
    id: "6462f1ffd41d3c0012d310b0",
    type: "task",
    progress: 0,
    isDisabled: false,
    project: "6462f1fed41d3c0012d310a8",
    styles: {
      progressColor: "#197b56",
      progressSelectedColor: "#00a898",
    },
    dependencies: [],
    after: [],
    indexSort: 2,
  },
  {
    start: new Date("2023-05-19T23:00:00.000Z"),
    end: new Date("2023-05-20T07:00:00.000Z"),
    name: "3 Adding Product on Project A",
    id: "6462f1ffd41d3c0012d310ac",
    type: "task",
    progress: 0,
    isDisabled: false,
    project: "6462f1fed41d3c0012d310a8",
    styles: {
      progressColor: "#197b56",
      progressSelectedColor: "#00a898",
    },
    dependencies: ["6462f1ffd41d3c0012d310b6"],
    after: [],
    indexSort: 3,
  },
  {
    id: "6462f1fed41d3c0012d310a9",
    name: "Sampling Stage 1",
    progress: 0,
    type: "project",
    hideChildren: false,
    indexSort: 1,

    start: new Date("2023-05-15T23:00:00.000Z"),
    end: new Date("2023-05-24T07:00:00.000Z"),
  },
  {
    start: new Date("2023-05-15T23:00:00.000Z"),
    end: new Date("2023-05-16T07:00:00.000Z"),
    name: "0 Allocate resource for task 001",
    id: "6462f1ffd41d3c0012d310b4",
    type: "task",
    progress: 0,
    isDisabled: false,
    project: "6462f1fed41d3c0012d310a9",
    styles: {
      progressColor: "#197b56",
      progressSelectedColor: "#00a898",
    },
    dependencies: [],
    after: ["6462f1ffd41d3c0012d310b6"],
    indexSort: 0,
  },
  {
    start: new Date("2023-05-15T23:00:00.000Z"),
    end: new Date("2023-05-19T07:00:00.000Z"),
    name: "1 Discussion about list of task ",
    id: "6462f1ffd41d3c0012d310b1",
    type: "task",
    progress: 0,
    isDisabled: false,
    project: "6462f1fed41d3c0012d310a9",
    styles: {
      progressColor: "#197b56",
      progressSelectedColor: "#00a898",
    },
    dependencies: [],
    after: [],
    indexSort: 1,
  },
  {
    start: new Date("2023-05-16T23:00:00.000Z"),
    end: new Date("2023-05-18T07:00:00.000Z"),
    name: "2 Clear requirement for task 00555",
    id: "6462f1ffd41d3c0012d310b6",
    type: "task",
    progress: 0,
    isDisabled: false,
    project: "6462f1fed41d3c0012d310a9",
    styles: {
      progressColor: "#197b56",
      progressSelectedColor: "#00a898",
    },
    dependencies: ["6462f1ffd41d3c0012d310b4"],
    after: ["6462f1ffd41d3c0012d310ac"],
    indexSort: 2,
  },
  {
    start: new Date("2023-05-15T23:00:00.000Z"),
    end: new Date("2023-05-24T07:00:00.000Z"),
    name: "3 Task testttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt",
    id: "6462f1ffd41d3c0012d310ad",
    type: "task",
    progress: 0,
    isDisabled: false,
    project: "6462f1fed41d3c0012d310a9",
    styles: {
      progressColor: "#197b56",
      progressSelectedColor: "#00a898",
    },
    dependencies: [],
    after: [],
    indexSort: 3,
  },
  {
    id: "6462f1ffd41d3c0012d310ab",
    name: "Payment stage",
    progress: 0,
    type: "project",
    hideChildren: false,
    indexSort: 2,

    start: new Date("2023-05-15T23:00:00.000Z"),
    end: new Date("2023-05-29T07:00:00.000Z"),
  },
  {
    start: new Date("2023-05-21T23:00:00.000Z"),
    end: new Date("2023-05-23T07:00:00.000Z"),
    name: "0 Check packaging",
    id: "6462f1ffd41d3c0012d310b7",
    type: "task",
    progress: 0,
    isDisabled: false,
    project: "6462f1ffd41d3c0012d310ab",
    styles: {
      progressColor: "#197b56",
      progressSelectedColor: "#00a898",
    },
    dependencies: ["6462f1ffd41d3c0012d310ac"],
    after: ["6462f1ffd41d3c0012d310b3"],
    indexSort: 0,
  },
  {
    start: new Date("2023-05-15T23:00:00.000Z"),
    end: new Date("2023-05-17T07:00:00.000Z"),
    name: "1 Verify payment fee",
    id: "6462f1ffd41d3c0012d310b2",
    type: "task",
    progress: 0,
    isDisabled: false,
    project: "6462f1ffd41d3c0012d310ab",
    styles: {
      progressColor: "#197b56",
      progressSelectedColor: "#00a898",
    },
    dependencies: [],
    after: [],
    indexSort: 1,
  },
  {
    start: new Date("2023-05-24T23:00:00.000Z"),
    end: new Date("2023-05-29T07:00:00.000Z"),
    name: "3 Payment process",
    id: "6462f1ffd41d3c0012d310b3",
    type: "task",
    progress: 0,
    isDisabled: false,
    project: "6462f1ffd41d3c0012d310ab",
    styles: {
      progressColor: "#197b56",
      progressSelectedColor: "#00a898",
    },
    dependencies: ["6462f1ffd41d3c0012d310b7"],
    after: [],
    indexSort: 2,
  },
  {
    start: new Date("2023-05-15T23:00:00.000Z"),
    end: new Date("2023-05-22T07:00:00.000Z"),
    name: "2 Task etst",
    id: "6462f1ffd41d3c0012d310b5",
    type: "task",
    progress: 0,
    isDisabled: false,
    project: "6462f1ffd41d3c0012d310ab",
    styles: {
      progressColor: "#197b56",
      progressSelectedColor: "#00a898",
    },
    dependencies: [],
    after: [],
    indexSort: 3,
  },
];
  return tasks;
}

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
  const projectTasks = tasks.filter(t => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}
