import { mergeDataKeys } from "../components/parser/parser";

describe("parser", () => {
  it("should merge data into the curl command", () => {
    const curlCommand = `curl --request POST \
    --header "Content-Type: application/json" \
    --data '{ "test": "tls" }' \
    http://localhost:5000/curl`;

    const mergedCurl = mergeDataKeys({
      lines: curlCommand.split("\\"),
      data: "{'curlcmd':'ls'}",
    });
    expect(mergedCurl).toEqual("s");
    expect(parse).toBeDefined();
  });
});
