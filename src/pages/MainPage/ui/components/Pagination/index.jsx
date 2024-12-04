import styles from "./Pagination.module.css"
import {useState} from "react";
import {LeftArrow} from "../../../../../shared/ui/Arrows/LeftArrow";
import {RightArrow} from "../../../../../shared/ui/Arrows/RightArrow";


export const Pagination = ({totalPages, initialPage = 1, onPageChange}) => {
    const [currentPage, setCurrentPage] = useState(initialPage);

    const handlePageClick = (page) => {
        setCurrentPage(page);
        if (onPageChange) {
            onPageChange(page);
        }
    };

    const renderPageNumbers = () => {
        const pages = [];

        if (totalPages <= 5) {
            // Если страниц <= 5, показываем все страницы
            for (let i = 1; i <= totalPages; i++) {
                pages.push(
                    <div
                        key={i}
                        className={`${styles.number} ${
                            currentPage === i ? styles.active : ""
                        }`}
                        onClick={() => handlePageClick(i)}
                    >
                        {i}
                    </div>
                );
            }
        } else {
            // Всегда показываем первую страницу
            pages.push(
                <div
                    key={1}
                    className={`${styles.number} ${currentPage === 1 ? styles.active : ""}`}
                    onClick={() => handlePageClick(1)}
                >
                    1
                </div>
            );

            // Левые точки, если currentPage > 4
            if (currentPage >= 4) {
                pages.push(<span key="left-ellipsis" className={styles.ellipsis}>...</span>);
            }

            // Центральная часть
            if (currentPage < 4) {
                // Если текущая страница ближе к началу (1–4)
                for (let i = 2; i <= 3; i++) {
                    pages.push(
                        <div
                            key={i}
                            className={`${styles.number} ${
                                currentPage === i ? styles.active : ""
                            }`}
                            onClick={() => handlePageClick(i)}
                        >
                            {i}
                        </div>
                    );
                }
            } else if (currentPage > totalPages - 3) {
                // Если текущая страница ближе к концу
                for (let i = totalPages - 2; i < totalPages; i++) {
                    pages.push(
                        <div
                            key={i}
                            className={`${styles.number} ${
                                currentPage === i ? styles.active : ""
                            }`}
                            onClick={() => handlePageClick(i)}
                        >
                            {i}
                        </div>
                    );
                }
            } else {
                // Текущая страница находится где-то в середине
                pages.push(
                    <div
                        key={currentPage}
                        className={`${styles.number} ${styles.active}`}
                        onClick={() => handlePageClick(currentPage)}
                    >
                        {currentPage}
                    </div>
                );
            }

            // Правые точки, если currentPage < totalPages - 3
            if (currentPage <= totalPages - 3) {
                pages.push(<span key="right-ellipsis" className={styles.ellipsis}>...</span>);
            }

            // Последняя страница
            pages.push(
                <div
                    key={totalPages}
                    className={`${styles.number} ${
                        currentPage === totalPages ? styles.active : ""
                    }`}
                    onClick={() => handlePageClick(totalPages)}
                >
                    {totalPages}
                </div>
            );
        }

        return pages;
    };

    return (
        <div className={styles.Pagination}>
            <div className={styles.ellipsis}>
                <LeftArrow
                    disabled={currentPage === 1}
                    onClick={() => handlePageClick(currentPage === 1 ? currentPage : currentPage - 1)}
                />
            </div>

            {renderPageNumbers()}
            <div className={styles.ellipsis}>
                <RightArrow
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageClick(currentPage === totalPages ? currentPage : currentPage + 1)}
                />
            </div>
        </div>
    );
}