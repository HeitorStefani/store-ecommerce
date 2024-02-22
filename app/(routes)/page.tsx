import getBillboards from "@/actions/pegar-painel"
import getProducts from "@/actions/pegar-produtos"
import Billboard from "@/components/billboard"
import ProductsList from "@/components/products-list"
import Container from "@/components/ui/container"

const HomePage = async () =>{
  const products = await getProducts({isFeatured: true})
  const bill = await getBillboards('a36039ed-6634-4acb-8d63-f83fa1325ccb')

  return(
    <Container>
      <div className="pb-10 space-y-10">
        <Billboard data={bill}/>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductsList title="Produtos em destaque" items={products}/>
        </div>
      </div>
    </Container>
  )
}

export default HomePage