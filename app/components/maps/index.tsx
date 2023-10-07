interface map {
  url: string;
}
export default function Maps(props: map) {
  return <iframe src={props.url} loading="lazy" className="maps"></iframe>;
}
