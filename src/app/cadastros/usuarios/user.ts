interface Usuario{
    //GERAL
    id?: number;
    nome: string;
    cpf: number;
    usuario: string;
    cep: number;
    senha: string;
    imagem: string;
    //PROFISSIONAIS
    formacao?: string;
    tipo?: number;
    telefone?: number;
    numeroCasa?: number;
    rg?: number;
    idade?: number;
}