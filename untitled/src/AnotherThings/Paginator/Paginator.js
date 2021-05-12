import React, {useState} from "react";
import s from './Paginator.module.css'


const Paginator = (props) => {
    const [portionSize] = useState(10)
    const [numberOfPortion, setNumberOfPortion] = useState(1)
    const leftPortionPageNumber = (numberOfPortion - 1) * portionSize + 1
    const rightPortionPageNumber = numberOfPortion * portionSize



    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize)



    return (
            <div>
                {numberOfPortion > 1 &&
                <button onClick={() => {setNumberOfPortion(numberOfPortion - 1)}}>PREV</button>
                }

                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}> {p} </span>
                })}

                {portionCount > numberOfPortion &&
                <button onClick={() => {setNumberOfPortion(numberOfPortion + 1)}}>NEXT</button>
                }
            </div>

    );
}

export default Paginator;