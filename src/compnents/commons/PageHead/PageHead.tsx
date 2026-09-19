import Head from "next/head";

interface TypeProps {
    title: string;
}

const PageHead = (props: TypeProps) => {
    const {
        title
    } = props;

    return (
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="icon" href="/logo/main/votedesk.png" type="image/x-icon" />
      </Head>
    )
}

export default PageHead;