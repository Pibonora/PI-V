import React from 'react';
// import { MdFamilyRestroom } from "react-icons/md";

interface EstatisticaProps {
    icon: React.ReactNode; // Tipo genérico para o ícone
    title: string;
    description: string;
}

const Estatistica: React.FC<EstatisticaProps> = ({ icon, title, description }) => {
    return (
        <div>
             <div className="icon-container">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Estatistica;
