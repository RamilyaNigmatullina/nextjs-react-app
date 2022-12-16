import Head from 'next/head';
export const siteTitle = 'Ramilya\'s Blog';

export default function SharedHead() {
  return(
    <Head>
      <title>{siteTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Learn React and Next.js"
      />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          siteTitle,
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}