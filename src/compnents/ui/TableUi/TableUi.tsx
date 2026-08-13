import { LIST_LIMIT, LIST_STATUS_PETUGAS } from "@/utils/constanta";
import {  Input, Pagination, Select, SelectItem, Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import { ChangeEvent, useMemo } from "react";
import { IoSearch } from "react-icons/io5";
import ButtonSolid from "../ButtonUi/ButtonSolid";


interface TypeProps {
  data: Record<string, unknown>[] | []
  column: {label: string; id: string}[]
  renderCell: (data: Record<string, unknown>, column: {label: string; id: string}) => React.ReactNode,
  isLoading: boolean;

  showCreate?: boolean;
  textCreate?: string;
  openCreate?: () => void;

  placeholderSearch?: string;

  emptyContent: string;

  currentLimit?: string;
  currentPage?: string | number;
  currentStatus?: string;

  

  totalPage?: number;

  showLimit?: boolean;
  listLimit?: {key: string; label: string;}[]
  onChangeLimit?: (e:ChangeEvent<HTMLSelectElement>) => void;

  showPagination?: boolean;
  onPagination?: (e: number) => void;

  showSearch?: boolean;
  onChangeSearch?: (e: ChangeEvent<HTMLInputElement>) => void; 
  onClearSearch?: () => void;

  showStatus?: boolean;
  onChangeStatus?: (e:ChangeEvent<HTMLSelectElement>) => void;
}

const TableUi = (props: TypeProps) => {
    const {
      data,
      column,
      renderCell,
      isLoading,

      showCreate,
      textCreate = "Tambah",
      openCreate,

      placeholderSearch = "Cari",

      emptyContent,

      currentLimit,
      currentPage,
      currentStatus,

      totalPage,

      showLimit,
      listLimit = LIST_LIMIT,
      onChangeLimit,

      showPagination,
      onPagination,
      
      showSearch,
      onChangeSearch,
      onClearSearch,

      showStatus,
      onChangeStatus,

    } = props;

    
    const topContent = useMemo(() => {
      return (
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row justify-between gap-4 mb-4">
            {showSearch && (
              <div className="max-w-100" >
                <Input 
                  placeholder={placeholderSearch} 
                  variant="bordered" 
                  className="w-full bg-white rounded-2xl z-0" 
                  onChange={onChangeSearch} 
                  startContent={(
                    <IoSearch />
                  )} 
                  isClearable
                  onClear={onClearSearch}
                />
              </div>
            )}
            
            {showCreate && (
              <ButtonSolid onPress={openCreate} className="w-fit">
                {textCreate}
              </ButtonSolid>
            )}
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-4">
            {showStatus && (
              <Select
                className="min-w-24 max-w-xs bg-white rounded-2xl"
                variant="bordered"
                items={LIST_STATUS_PETUGAS}
                selectedKeys={[`${currentStatus}`]}
                startContent={<p className='text-sm font-semibold'>Status: </p>}
                disallowEmptySelection
                selectionMode="single"
                onChange={onChangeStatus}
              >
                {(item) => (
                  <SelectItem key={item.id}>
                    {item.label}
                  </SelectItem>
                )}
              </Select>
            )}
            

          </div>
          
        </div>
      )
    },[onChangeSearch, openCreate, onChangeStatus,currentStatus, ])


    const bottomContent = useMemo(() => {
      return (
        <div className="flex flex-col gap-4 lg:flex-row justify-between">
          {showLimit && (
            <Select
            className="min-w-24 max-w-xs bg-white rounded-2xl z-0"
            variant="bordered"
            items={listLimit}
            selectedKeys={[`${currentLimit}`]}
            startContent={<p className='text-sm'>Baris:</p>}
            disallowEmptySelection
            selectionMode="single"
            onChange={onChangeLimit}
            >
              {(limit) => (
                <SelectItem key={limit.key}>
                  {limit.label}
                </SelectItem>
              ) }
            </Select>
          )}

          {showPagination && (
            <Pagination 
              className="z-0"
              variant="bordered" 
              showControls 
              showShadow 
              color="primary"  
              initialPage={Number(currentPage) || 1} 
              total={totalPage || 1}
              onChange={onPagination}
            />
          )}
        </div>
      )
    },[LIST_LIMIT, currentLimit, onChangeLimit, totalPage, showLimit, showPagination])

    return (

      <div className="relative">
        {isLoading && (
          <div className="absolute top-0 bottom-0 w-full bg-black/30 rounded-2xl z-9 backdrop-blur-xs flex justify-center items-center min-h-24">
            <Spinner color="primary" />
          </div>
        )}

        <Table 
          aria-label="table for category" 
          fullWidth 
          topContent={topContent} 
          topContentPlacement="outside" 
          bottomContent={bottomContent} 
          bottomContentPlacement="outside"
        >
          <TableHeader>
            {column.map((c: {label: string; id: string}) => (
              <TableColumn key={c.id} className="bg-red-400/30 text-gray-800">{c.label}</TableColumn>
            ))}
          </TableHeader>
          <TableBody emptyContent={emptyContent}> 
            {data?.map((d, i) => (
              <TableRow key={`${i}`}>
                {column.map((c: {label: string; id: string}) => (
                  <TableCell key={c.id}>{renderCell(d, c)}</TableCell>
                ))}
              </TableRow>
            ))}        
          </TableBody>
        </Table>
      </div>
    )
}

export default TableUi;