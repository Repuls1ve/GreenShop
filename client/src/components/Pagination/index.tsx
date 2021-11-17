import {FC} from 'react'
import Pagination, {PaginationProps} from 'rc-pagination'

import './styles.css'

interface CustomPaginationProps extends PaginationProps {
}

const CustomPagination: FC<CustomPaginationProps> = ({...props}) => {
    return (
        <Pagination {...props}/>
    )
}

export default CustomPagination
