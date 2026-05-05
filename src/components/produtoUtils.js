function formatarPreco(preco) {
    return Number(preco).toLocaleString('pt-BR'{
style : 'currency',
currency : moedaPais
    })
}
export { formataPreco }