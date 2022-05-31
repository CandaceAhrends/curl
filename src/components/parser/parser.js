const typeRegEx = /(?<type>POST|PUT|GET)/;

export const parseType = (line) => {
  const { groups } = line.match(typeRegEx);
  return groups["type"];
};

export const parse = ({ curl, data }) => {
  const lines = curl.split("\n");
  const method = parseType(lines.find((line) => line.includes("-request")));
  const parsedLines = mergeDataKeys({ lines, data });
  const httpLine = lines.find((line) => line.includes("http")) || "/none";
  const path = `${method}--${httpLine
    .replace("http://", "")
    .replaceAll("/", "-")
    .replace(":", "-")}`;

  return {
    type: method,
    content: curl,
    generated: parsedLines,
    data,
    name: `${path}`,
  };
};

export const mergeDataKeys = ({ data, lines }) => {
  const dataLine = `--data '${data}'`;
  const dataRegEx = /^\-\-data.+/;
  const dRegEx = /^\-d.+/;
  let merged = lines.map((line) => {
    line = line.trim();
    if (dataRegEx.test(line) || dRegEx.test(line)) {
      return dataLine.trim();
    } else {
      return line + "\n";
    }
  });
  const hasData = merged.find((line) => line.includes("--data"));
  if (data.length && !hasData) {
    merged = [...merged, dataLine];
  }
  return merged;
};
