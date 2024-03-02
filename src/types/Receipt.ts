export type Conta = {
  id: number;
  nome_conta: string;
};
export type Cartao = {
  id: number;
  apelido_cartao: string;
};
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
export type Receipt = Partial<{
  id: number;
  descricao: string;
  valor: string;
  recorrente: boolean;
  recebido: boolean;
  efetivada: boolean;
  categorias: Categoria[];
  subcategorias: Subcategoria[];
  conta: Conta;
  cartao: Cartao;
  data_lancamento: string;
  data_efetivacao: any;
  observacoes: string;
  nao_efetivar_automaticamente: boolean;
  ignorar_em_estatisticas: boolean;
  ignorar_em_economia_mensal: boolean;
  ignorar_em_totais: boolean;
  usuario: string;
  tipo: string;
  dependente: any;
  ativo: boolean;
}>;
