import SectionContainer from "@/components/section-container";
import ContentHero from "@/components/content/hero";
import ContentAbout from "@/components/content/about";
import ContentMethod from "@/components/content/method";
import ContentSolution from "@/components/content/solution";
import ContentVoice from "@/components/content/voice";
import ContentUpdate from "@/components/content/update";
import ButtonBasic from "@/components/button/basic";

export default function Home() {
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
        <ContentUpdate />
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
