export type Categoria = {
  id: number;
  nome: string;
  receita: boolean;
  despesa: boolean;
};
export type Subcategoria = {
  id: number;
  nome: string;
  categoria: number;
  receita: boolean;
  despesa: boolean;
  ativo: boolean;
};
export type Conta = {
  id: number;
  nome_conta: string;
};
export type Cartao = {
  id: number;
  apelido_cartao: string;
};

export type Expense = {
  id: number;
  descricao: string;
  valor: string;
  recorrente: boolean;
  categorias: Categoria[];
  subcategorias: Subcategoria[];
  data_lancamento: string;
  data_vencimento: string;
  efetivada: boolean;
  pago: boolean;
  fixa: boolean;
  conta: Conta;
  cartao: Cartao;
  usuario: string;
  tipo: string;
  dependente: any;
  ativo: boolean;
};
