import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="cards"
    speed={2}
    width={280}
    height={550}
    viewBox="0 0 280 550"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="133" y="196" rx="0" ry="0" width="1" height="0" />
    <circle cx="130" cy="186" r="130" />
    <rect x="25" y="339" rx="15" ry="15" width="222" height="30" />
    <rect x="0" y="385" rx="10" ry="10" width="275" height="85" />
    <rect x="7" y="493" rx="10" ry="10" width="90" height="27" />
    <rect x="111" y="486" rx="10" ry="10" width="155" height="40" />
  </ContentLoader>
);

export default Skeleton;
