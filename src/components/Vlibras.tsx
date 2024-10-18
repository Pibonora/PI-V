import "https://vlibras.gov.br/app/vlibras-plugin.js"

import React, { useEffect } from 'react';

const VLibras: React.FC = () => {
    useEffect(() => {
        // Criando a div para o botão de acessibilidade
        const vwDiv = document.createElement('div');
        vwDiv.setAttribute('vw', '');
        vwDiv.className = 'enabled';

        const buttonDiv = document.createElement('div');
        buttonDiv.setAttribute('vw-access-button', '');
        buttonDiv.className = 'active';

        const wrapperDiv = document.createElement('div');
        wrapperDiv.setAttribute('vw-plugin-wrapper', '');

        const topWrapperDiv = document.createElement('div');
        topWrapperDiv.className = 'vw-plugin-top-wrapper';

        // Montando a estrutura
        vwDiv.appendChild(buttonDiv);
        vwDiv.appendChild(wrapperDiv);
        wrapperDiv.appendChild(topWrapperDiv);

        // Adicionando a div ao body
        document.body.appendChild(vwDiv);

        // Criando e adicionando o script do VLibras
        const script = document.createElement('script');
        script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
        script.async = true;
        script.onload = () => {
            new window.VLibras.Widget({
                rootPah: '/app', // Corrija para rootPath
                personalization: 'https://vlibras.gov.br/config/default_logo.json',
                opacity: 0.5,
                position: 'R',
                avatar: 'random',
            });
        };

        document.body.appendChild(script);

        // Cleanup ao desmontar o componente
        return () => {
            document.body.removeChild(script);
            document.body.removeChild(vwDiv);
        };
    }, []);

    return null; // O componente não renderiza nada visível
};

export default VLibras;