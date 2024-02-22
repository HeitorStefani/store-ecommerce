import { Product } from '@/types'
import React from 'react'
import Currency from './ui/currency'
import Button from './ui/button'
import { ShoppingCart } from 'lucide-react'

interface InfoProps {
  data: Product
}

function Info({
  data
}: InfoProps) {
  return (
    <div>
      <h3 className='text-3xl font-bold text-gray-900'>{data?.name}</h3>
      <div className="mt-3 flex items-end justify-between ">
        <p className='text-2xl text-gray-900'>
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className='my-4'/>
        <div className="flex items-center gap-x-4">
          <h3 className='text-black font-semibold'>Tamanho:</h3>
          <div>
            {data?.size?.name}
          </div>
        </div>
        <div className="flex items-center gap-x-4 my-5">
          <h3 className='text-black font-semibold'>Cor:</h3>
          <div className='rounded-full h-6 w-6 border border-gray-600' style={{backgroundColor: data.color.value}}>
          </div>
        </div>
        <div className="mt-10 flex items-center gap-x-3">
          <Button className='flex items-center gap-x-2'>
            Adicionar ao carrinho
            <ShoppingCart />
          </Button>
        </div>
    </div>
  )
}

export default Info
