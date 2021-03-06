import * as MockRun from "vsts-task-lib/mock-run";
import * as Path from "path";

let taskPath: string = Path.join(__dirname, "../../../Tasks/AttachSummaryMarkdown/attachSummaryMarkdown.js");
let taskMock: MockRun.TaskMockRunner = new MockRun.TaskMockRunner(taskPath);
taskMock.setInput("SectionName", "CustomSection");
taskMock.setInput("MarkdownFilePath", "CustomMarkdown.md");
taskMock.run();