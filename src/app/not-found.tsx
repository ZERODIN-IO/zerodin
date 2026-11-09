import Link from "next/link";
import {
  Glass,
  DisplayText,
  BodyText,
  Section,
  Reveal,
  GlassButton,
} from "@/components/glass";

export default function NotFound() {
  return (
    <main className="min-h-screen pt-24">
      <Section spacing="lg">
        <Reveal>
          <Glass
            material="heavy"
            className="max-w-2xl mx-auto p-10 md:p-16 text-center"
          >
            <BodyText
              size="sm"
              tone="tertiary"
              className="uppercase tracking-[0.2em] mb-6"
            >
              404
            </BodyText>
            <DisplayText size="md" as="h1" className="mb-4">
              Page not found.
            </DisplayText>
            <BodyText size="base" tone="secondary" className="mb-8">
              The page you are looking for does not exist, or has moved.
            </BodyText>
            <Link href="/">
              <GlassButton variant="primary" size="md">
                Back to home
              </GlassButton>
            </Link>
          </Glass>
        </Reveal>
      </Section>
    </main>
  );
}
