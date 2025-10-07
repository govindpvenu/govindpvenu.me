import Markdown from "react-markdown";

import { Prose } from "@/components/ui/typography";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function LeetcodeStats() {
  return (
    <Panel id="leetcode-stats">
      <PanelHeader>
        <PanelTitle>Leetcode Stats</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <Prose className="prose justify-center items-center flex w-full max-w-full  text-pretty  text-sm text-muted-foreground dark:prose-invert">
          <Markdown>
            {
              "![LeetCode Stats](https://leetcard.jacoblin.cool/govindpvenu?theme=light,dark&font=IBM%20Plex%20Mono&border=0&radius=16)"
            }
          </Markdown>
        </Prose>
      </PanelContent>
    </Panel>
  );
}
