import {Breadcrumb} from "../../../shared/ui/Breadcrumb/Breadcrumb";
import {PageTitle} from "../../../shared/ui/PageTitle/PageTitle";
import {NewsTags} from "./components/NewsTags";
import {NewsDisplay} from "./components/NewsDisplay";
import {Pagination} from "./components/Pagination";

export const MainPage = () => {

    const handlePageChange = (page) => {
        console.log("Выбранная страница:", page);
    };

    return (
        <>
            <Breadcrumb title="Новости и статьи"/>
            <PageTitle title="Новости и статьи"/>
            <NewsTags/>
            <NewsDisplay/>
            <Pagination totalPages={11} onPageChange={handlePageChange}/>
        </>
    )
}