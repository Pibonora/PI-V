// Servicos.tsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

// Estilizando a imagem para que ela fique alinhada à direita e tenha uma largura máxima
const StyledImage = styled('img')({
  width: '300px', // Ajuste a largura conforme necessário
  height: 'auto',
  objectFit: 'cover',
  borderRadius: '8px',
  marginLeft: '1rem',
});

interface ServicosProps {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
}

const Servicos: React.FC<ServicosProps> = ({ title, text, imageSrc, imageAlt }) => {
  return (
    <Container>
      <Box sx={{ display: 'flex', alignItems: 'center', marginY: '2rem' }}>
        {/* Container para o texto */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h3" sx={{ color: '#4caf50', marginBottom: '1rem' }}>
            {title}
          </Typography>
          <Typography variant="body1">
            {text}
          </Typography>
        </Box>

        {/* Imagem ao lado direito do texto */}
        <StyledImage src={imageSrc} alt={imageAlt} />
      </Box>
    </Container>
  );
};

export default Servicos;
