import React from 'react'
import Comment from './Comment'

const comments = [
  {
    name: "김크크",
    comment: "인사 올립니다."
  },
  {
    name: "성수동뉴비",
    comment: "충성! 근무 중 이상 무!"
  },
  {
    name: "최익명",
    comment: "삭제된 댓글입니다."
  },
]

export default function CommentList() {
  return (
    <div>
      {
        comments.map((comment) => {
          return (
            <Comment name={comment.name} comment={comment.comment} />
          );
        })
      }
    </div>
  )
}
