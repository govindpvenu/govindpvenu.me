import { cn } from "@/lib/utils";
import { About } from "@/profile/components/about";
import { Certifications } from "@/profile/components/certifications";
import { Experiences } from "@/profile/components/experiences";
import { GitHubContributions } from "@/profile/components/github-contributions";
import { LeetcodeStats } from "@/profile/components/leetcode-stats";
import { Overview } from "@/profile/components/overview";
import { ProfileCover } from "@/profile/components/profile-cover";
import { ProfileHeader } from "@/profile/components/profile-header";
import { Projects } from "@/profile/components/projects";
import { SocialLinks } from "@/profile/components/social-links";
import { TechStack } from "@/profile/components/tech-stack";

export default function Page() {
  return (
    <>
      <div className="mx-auto md:max-w-3xl">
        <ProfileCover />
        <ProfileHeader />
        <Separator />

        <Overview />
        <Separator />

        <SocialLinks />
        <Separator />

        <About />
        <Separator />

        <GitHubContributions />
        <Separator />

        <TechStack />
        <Separator />

        <LeetcodeStats />
        <Separator />

        <Experiences />
        <Separator />

        {/* TODO: add projects */}
        <Projects />
        <Separator />

        <Certifications />
        <Separator />
      </div>
    </>
  );
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-edge",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  );
}
