import SectionContainer from "@/components/section-container";
import ContentHero from "@/components/content/hero";
import ContentAbout from "@/components/content/about";
import ContentMethod from "@/components/content/method";
import ContentSolution from "@/components/content/solution";
import ContentVoice from "@/components/content/voice";
import ContentUpdate, { type Props } from "@/components/content/update";
import ButtonBasic from "@/components/button/basic";
import yaml from "js-yaml";
import * as fs from "fs";
import * as path from "path";

export default function Home() {
  // NOTE: updatesのみリリース後に手動更新があるとのことなので
  // 人間フレンドリーなyamlにしておいた
  const updatesData = yaml.load(
    fs.readFileSync(path.join(process.cwd(), "src/data/updates.yaml"), "utf8")
  ) as Props["updatesData"];

  return (
    <>
      <ContentHero />

      <SectionContainer>
        <ContentAbout />
      </SectionContainer>

      <SectionContainer>
        <ContentMethod />
      </SectionContainer>

      <SectionContainer>
        <ContentSolution />
      </SectionContainer>

      <SectionContainer>
        <ContentVoice />
      </SectionContainer>

      <SectionContainer>
        <ContentUpdate updatesData={updatesData} />
      </SectionContainer>

      <SectionContainer>
        <a href="https://forms.gle/7MxHsRn53g18HVuo6" target="_blank">
          <ButtonBasic width="l" height="l" font="jost">
            CONTACT
          </ButtonBasic>
        </a>
      </SectionContainer>
    </>
  );
}
