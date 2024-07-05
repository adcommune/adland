import { PageInfo } from '@adland/webkit/src/ponder'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './ui/pagination'
import { useState } from 'react'

type QueryPaginationProps = {
  pageInfo?: PageInfo
  currentCursor?: string | null
  onChangeCursor: (cursor: string) => void
}

const QueryPagination = ({
  pageInfo,
  currentCursor,
  onChangeCursor,
}: QueryPaginationProps) => {
  const [cursors, setCursors] = useState<string[]>([])

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className="cursor-pointer"
            onClick={() => {
              if (pageInfo?.hasPreviousPage && pageInfo?.endCursor) {
                onChangeCursor(
                  cursors[cursors.findIndex((c) => c === currentCursor) - 1],
                )
              }
            }}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>
            {currentCursor ? cursors.indexOf(currentCursor) + 2 : 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            className="cursor-pointer"
            onClick={() => {
              if (pageInfo?.hasNextPage && pageInfo?.endCursor) {
                onChangeCursor(pageInfo.endCursor)
                setCursors([...cursors, pageInfo.endCursor])
              }
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default QueryPagination
