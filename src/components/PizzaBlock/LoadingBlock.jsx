import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="0" y="275" rx="6" ry="6" width="280" height="26" />
      <rect x="0" y="315" rx="6" ry="6" width="280" height="84" />
      <rect x="10" y="422" rx="6" ry="6" width="91" height="31" />
      <rect x="149" y="417" rx="19" ry="19" width="127" height="41" />
      <circle cx="135" cy="130" r="120" />
    </ContentLoader>
  );
}

export default LoadingBlock;
