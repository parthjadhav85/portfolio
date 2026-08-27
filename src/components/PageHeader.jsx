const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="page-header-container">
      <h1 className="page-header-title">{title}</h1>
      {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
      <div className="page-header-underline" aria-hidden="true" />
    </div>
  );
};

export default PageHeader;
