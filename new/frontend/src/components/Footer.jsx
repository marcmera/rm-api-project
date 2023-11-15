export function Footer() {
  return (
    <div className="w-full flex justify-around mb-10 -mt-16">
      <button className="btn" onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <button className="btn" onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
}
