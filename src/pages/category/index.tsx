
export const Category = (): JSX.Element => {
    const { category } = useParams();

    // Fazer req para o backend conforme a categoria para listar os itens

    return (<h1>{category}</h1>)
}