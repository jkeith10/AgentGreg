import Head from "next/head";

const AppHead = ({ title, ogTitle }: { title?: string; ogTitle?: string }) => {
  // Do not translate. Head attributes won't have access to i18n.
  const description = "Assemble, configure, and deploy autonomous AI Agents in your browser.";
  return (
    <Head>
      <title>{title ?? "AgentGreg"}</title>
      <meta name="description" content={description} />
      <meta name="twitter:site" content="@ReworkdAI" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ?? "AgentGreg 🤖"} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://raw.githubusercontent.com/jkeith10/AgentGreg/main/next/public/banner.png" />
      <meta name="twitter:image:width" content="1280" />
      <meta name="twitter:image:height" content="640" />
      <meta property="og:title" content={ogTitle ?? "AgentGreg: Autonomous AI in your browser 🤖"} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://github.com/jkeith10/AgentGreg" />
      <meta property="og:image" content="https://raw.githubusercontent.com/jkeith10/AgentGreg/main/next/public/banner.png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="640" />
      <meta property="og:type" content="website" />
      <meta name="google-site-verification" content="sG4QDkC8g2oxKSopgJdIe2hQ_SaJDaEaBjwCXZNkNWA" />

      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="mask-icon" href="/favicon.svg" />
    </Head>
  );
};

export default AppHead;
