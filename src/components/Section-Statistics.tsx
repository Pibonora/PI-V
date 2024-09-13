import React from 'react';
import Estatistica from './Statistics'; // Ajuste o caminho conforme necessário
import { MdFamilyRestroom, MdFoodBank } from "react-icons/md";
import { FaShoppingBasket } from "react-icons/fa";
import '../assets/SectionS.css'; // Importa o arquivo CSS

const SectionS: React.FC = () => {
    return (
        <div className="section-container">
            <div className="statistic-item">
                <Estatistica 
                    icon={<MdFamilyRestroom />} 
                    title="Famílias cadastradas" 
                    description="em nosso banco de dados" 
                />
            
            
                <Estatistica 
                    icon={<MdFoodBank />} 
                    title="Refeições" 
                    description="em bairros carentes" 
                />
            
                <Estatistica 
                    icon={<FaShoppingBasket />} 
                    title="Cestas básicas" 
                    description="para famílias cadastradas" 
                />
            </div>
        </div>
    );
}

export default SectionS;
