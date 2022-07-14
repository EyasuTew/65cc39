import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React, {useState} from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  const [currentPaginationData, setCurrentPaginationData] = useState(blogs.posts.slice(0, 15));
  const [pageSize, setPageSize] =  useState(15);
  const [currentPage, setCurrentPage] = useState(1);

  const updatePaginationData = (currentPage, pageSize) => {
    const startIndex = (currentPage-1)*pageSize;
    const sliceData = blogs.posts.slice( startIndex, startIndex+pageSize);
    setCurrentPaginationData(sliceData);
  }

  const updateRowsPerPage = (newVal) => {
    setPageSize(newVal);
    updatePaginationData(currentPage, newVal);
  };
  const updatePage = (newVal) => {
    setCurrentPage(newVal);
    updatePaginationData(newVal, pageSize);
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={pageSize}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
