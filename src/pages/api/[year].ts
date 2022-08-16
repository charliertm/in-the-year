import { getListNodesBetween } from "./../../utils";
import { WikiData } from "./../../types";
import { NextApiRequest, NextApiResponse } from "next";
import { parse } from "node-html-parser";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { year } = request.query;
  if (typeof year !== "string") {
    response.json({
      error: "Invalid request params",
      message:
        "Your request paramters are invalid. Make sure your are just passing a single year.",
    });
    response.send(400);
    return;
  }
  if (!Number.isInteger(Number(year))) {
    response.json({
      error: "Invalid request params",
      message:
        "Your request parameters are not numeric. Make sure your are just passing a single year.",
    });
    response.send(400);
    return;
  }
  if (Number(year) < -4000 || Number(year) > 2030 || Number(year) === 0) {
    response.json({
      error: "Invalid year",
      message:
        "Make sure your requested year is in the range 4000 BC - 2030 AD and is not zero.",
    });
    response.send(400);
    return;
  }

  const yearADBC =
    Number(year) < 0
      ? year.replace(/\-/g, "") + "_BC"
      : year.replace(/\-/g, "") + "_AD";

  const res = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&titles=${yearADBC}&prop=extracts|pageimages|info&pithumbsize=400&inprop=url&redirects=&format=json&origin=*`
  );
  const data = (await res.json()) as WikiData;
  const pageId = Object.keys(data.query.pages)[0] as string;
  const html = data.query.pages[pageId]?.extract as string;
  const root = parse(html);
  const eventsNode = root.querySelector("#Events");
  const birthsNode = root.querySelector("#Births");
  const deathsNode = root.querySelector("#Deaths");
  const referencesNode = root.querySelector("#References");
  if (!eventsNode || !birthsNode || !deathsNode || !referencesNode) {
    response.json({
      error: "Could not parse page structure",
      message:
        "Unable to parse the page for events, births and deaths. Please try a different year.",
    });
    response.send(404); // not sure if should be sending a 500 here
    return;
  }
  const eventsNodes = getListNodesBetween(root, eventsNode, birthsNode);
  const birthsNodes = getListNodesBetween(root, birthsNode, deathsNode);
  const deathsNodes = getListNodesBetween(root, deathsNode, referencesNode);
  response.json({
    events: eventsNodes.map((node) => node.structuredText),
    births: birthsNodes.map((node) => node.structuredText),
    deaths: deathsNodes.map((node) => node.structuredText),
  });
  response.send(200);
}
