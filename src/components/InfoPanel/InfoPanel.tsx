import React from 'react';

// Define a type for the component props
type InfoPanelProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean; // The question mark makes this prop optional
};

const InfoPanel: React.FC<InfoPanelProps> = ({ title, description, imageUrl, imageAlt, reverse = false }) => {
  return (
    <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} items-center my-8`}>
      <div className="flex-1 px-6">
        <h2 className="text-2xl font-bold mb-3">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
      <div className="flex-1">
        <img src={imageUrl} alt={imageAlt} className="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default InfoPanel;
