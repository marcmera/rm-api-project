import { useNavigate } from "react-router-dom";
export default function Pagination({ page, maxPage }) {
  const navigate = useNavigate();
  return (
    <>
      {page > 1 ? (
        <button
          className="pagination-button"
          onClick={() => navigate(`/characters/page/${page - 1}`)}
        >
          Prev
        </button>
      ) : (
        <div className="hidden md:block"></div>
      )}

      {page < maxPage && (
        <button
          className={"pagination-button"}
          onClick={() => navigate(`/characters/page/${page + 1}`)}
        >
          Next
        </button>
      )}
    </>
  );
}