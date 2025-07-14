

export default async function Page({ params }: { params: { slug: string } }) {
    const awaitedParams = await params;
    const { slug } = awaitedParams;
    return <h1>{slug}</h1>;
  }