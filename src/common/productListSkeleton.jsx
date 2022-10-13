import React from 'react';
import ContentLoader from 'react-content-loader';
import useScreenSize from '@hooks/useScreenSize';

const NetflixLoader = (props) => {
  // Get values from props
  // const { rows, columns, coverHeight, coverWidth, padding, speed } = props;
  const { width, height } = useScreenSize();

  // Hardcoded values
  const rows = Math.ceil(height / 320);
  const columns = Math.trunc(width / 260);
  const coverHeight = 320;
  const coverWidth = 240;
  const padding = 24;
  const speed = 1;

  const coverHeightWithPadding = coverHeight + padding;
  const coverWidthWithPadding = coverWidth + padding;
  const initial = 35;
  const covers = Array(columns * rows).fill(1);

  return (
    <ContentLoader
      uniqueKey={'product-list-skeleton'}
      title="Loading"
      speed={speed}
      width={columns * coverWidthWithPadding}
      height={rows * coverHeightWithPadding}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      {covers.map((g, i) => {
        let vy = Math.floor(i / columns) * coverHeightWithPadding + initial;
        let vx = (i * coverWidthWithPadding) % (columns * coverWidthWithPadding);
        return <rect key={i} x={vx} y={vy} rx="0" ry="0" width={coverWidth} height={coverHeight} />;
      })}
    </ContentLoader>
  );
};

NetflixLoader.metadata = {
  name: 'Pratik Pathak',
  github: 'PathakPratik',
  description: 'Netflix Style Dynamic',
  filename: 'Netflix',
};

export default NetflixLoader;
