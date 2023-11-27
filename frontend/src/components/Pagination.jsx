import { useNavigate } from "react-router-dom";
import next from "../assets/arrow_forward.svg";
import back from "../assets/arrow_back.svg";

export default function Pagination({url, page, maxPage }) {
    const navigate = useNavigate();
    const handlePrev = () => {
        navigate(`/${url}/page/${page - 1}`);
        window.scrollTo(0, 0);
    };
    const handleNext = () => {
        navigate(`/${url}/page/${page + 1}`);
        window.scrollTo(0, 0);
    };
    return (
        <>
            {page > 1 ? (
                <button
                    className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full fixed top-[50%] left-0 text-center"
                    onClick={handlePrev}
                >
                    <img src={back} alt="Prev" />
                </button>
            ) : (
                <div className="hidden md:block"></div>
            )}

            {page < maxPage && (
                <button
                    className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full fixed top-[50%] right-0 text-center"
                    onClick={handleNext}
                >
                    <img src={next} alt="Next" />
                </button>
            )}
        </>
    );
}