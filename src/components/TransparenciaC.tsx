import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import '../assets/transparencia.css'
// import { MdFamilyRestroom } from "react-icons/md";

const TransparenciaC: React.FC = () => {
    return (
        <div className='container'>
            <div className='c1'>
                <h2>Transparência</h2>
                <p>
                Aqui compartilhamos informações cruciais sobre nossa organização, valores e práticas. 
                Você encontrará detalhes sobre nossa missão, equipe, finanças e compromisso com a ética e a responsabilidade.
                Acreditamos na importância da transparência como base para construir confiança com nossa comunidade e parceiros.
                </p>
            </div>
            <div className='relatorio'>
                <p><span> ÓRGÃO/ENTIDADE PÚBLICO(A):</span></p>
                <p> Prefeitura Municipal de Taquaritinga</p>
            </div>
            <div className='relatorio'>
                <p><span> ORGANIZAÇÃO DA SOCIEDADE CIVIL PARCEIRA:</span></p>
                <p> Centro Espírita e Casa do Menor André Luiz</p>
            </div>
            <div className='relatorio'>
                <p><span> TERMO DE COLABORAÇÃO/FOMENTO N° (DE ORIGEM):</span></p>
                <p> 020/2020</p>
            </div>
            <div className='relatorio'>
                <p><span> OBJETO:</span></p>
                <p> O presente Termo de Fomento, por atender o que preconiza o artigo 29 da Lei Federal nº 13.019, de 31 de julho de 2014 – artigo 174 da Lei Orgânica do Município (Emenda Impositiva), cuja orientação para a celebração foi publicada no Diário Oficial do Município em 07 de fevereiro de 2020 – Ano V / Edição nº 947, tem por objeto a execução do “Projeto Sopa”, com emprego de recursos da dotação orçamentária da pasta, consoante o plano de trabalho, parte integrante indissociável deste ajuste.</p>
            </div>

            <div className='contas'>
                <h2>Detalhamento de Contas</h2>
                <a  href="www.uol.com"> <IoIosArrowForward />Diário Oficial de Taquaritinga, 07 de fevereiro de 2020 — Ano V Edição nº 947</a>
                <a href="www.uol.com"> <IoIosArrowForward />Termo de fomento 2020</a>
                <a href="www.uol.com"> <IoIosArrowForward /> Relatório de atividades desenvolvidas 2020</a>
            </div>
        </div>
    );
}

export default TransparenciaC;
