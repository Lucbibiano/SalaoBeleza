export class Usuario {
    //CLIENTE
    id?: number;
    nome: string;
    cpf: number;
    usuario: string;
    cep: number;
    senha: string;
    imagem: string;
    masculino: number;
    //PROFISSIONAIS
    servicos?: string[];
    tipo?: number;
    telefone?: number;
    numeroCasa?: number;
    rg?: number;
    idade?: number;
}