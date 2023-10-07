export default function Maps(maps) {
  return <iframe src={maps.url} loading="lazy" className="maps"></iframe>;
}
