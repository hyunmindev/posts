interface Props {
  params: {
    slug: string;
  };
}

function Post({ params }: Props) {
  const { slug } = params;

  return <h1>{slug}</h1>;
}

export default Post;
