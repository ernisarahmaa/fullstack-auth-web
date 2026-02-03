function Loader({ text = "Loading..." }) {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="spinner-border spinner-border-sm me-2" role="status" />
      <span>{text}</span>
    </div>
  );
}

export default Loader;
