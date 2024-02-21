type PropTypes = {
  title: string;
  url: string;
};

export const GifGridItem = ({ title, url }: PropTypes) => {
  const newTitle = title.split('GIF')[0].trim();
  return (
    <div className="card">
      <img src={`${url}`} alt={newTitle} />
      <p>{newTitle}</p>
    </div>
  );
};
