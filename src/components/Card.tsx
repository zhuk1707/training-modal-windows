export const Card = ({title}: { title: string }) => {
  return (
    <div className="card">
      <div className="cardContent">
        <h2 className="title">{title}</h2>
        <p className="hint">Click on card to open</p>
      </div>
    </div>
  );
};