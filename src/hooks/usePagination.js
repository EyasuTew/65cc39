export const DOTS = "...";

function usePagination({
                         currentPage,
                         totalCount,
                         pageSize,
                       }) {
  /*
    Rewrite the logic here to map out the pagination to be displayed

    !!!!!! ATTENTION !!!!!!
    Please replace this comment here with a description of this hook.
    
  */
  const lastPage = Math.ceil(totalCount/pageSize);
  const paginationArray = [1];
  if(currentPage-1 >= 2) {
    paginationArray.push(DOTS);
  }
  if(currentPage-1 >1) {
    paginationArray.push(currentPage-1);
  }
  if (currentPage > 1) {
    paginationArray.push(currentPage);
  }

  if(currentPage+1 < lastPage) {
    paginationArray.push(currentPage+1);
  }
  if(lastPage-currentPage >=2) {
    paginationArray.push(DOTS);
  }
  if(lastPage > currentPage) {
    paginationArray.push(lastPage);
  }


  return paginationArray;
}

export default usePagination;
