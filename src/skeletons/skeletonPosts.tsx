import React from "react";
import SkeletonElement from "./skeletonElement";

export default function skeletonPosts() {
  return (
    <div className='skeleton-wrapper'>
      <div className='skeleton-posts'>
        <SkeletonElement type='title' />
        <SkeletonElement type='text' />
      </div>
    </div>
  );
}
