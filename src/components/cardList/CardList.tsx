import { FC } from 'react'
import { Pagination } from '../pagination/Pagination'

interface CardListProps {
  // My Custom Props Here
}

export const CardList: FC<CardListProps> = ({}) => {
  return (
    <div>
      <Pagination />
    </div>
  )
}
