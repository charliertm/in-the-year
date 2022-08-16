// based on https://stackoverflow.com/a/4399286
import { HTMLElement } from "node-html-parser";

export const getListNodesBetween = (
  rootNode: HTMLElement,
  startNode: HTMLElement,
  endNode: HTMLElement
) => {
  let pastStartNode = false;
  let reachedEndNode = false;
  const listNodes: HTMLElement[] = [];

  const getListNodes = (node: HTMLElement) => {
    if (node == startNode) {
      pastStartNode = true;
    } else if (node == endNode) {
      reachedEndNode = true;
    } else if (node.rawTagName === "li") {
      if (pastStartNode && !reachedEndNode) {
        listNodes.push(node);
      }
    } else {
      console.log(node);
      for (
        let i = 0, len = node.childNodes.length;
        !reachedEndNode && i < len;
        ++i
      ) {
        getListNodes(node.childNodes[i] as HTMLElement);
      }
    }
  };

  getListNodes(rootNode);
  return listNodes;
};
