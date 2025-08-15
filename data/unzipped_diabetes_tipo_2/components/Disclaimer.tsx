
import React from 'react';

const Disclaimer = () => (
  <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-6 rounded-md" role="alert">
    <p className="font-bold">Aviso Importante</p>
    <p>
      Esta herramienta utiliza un modelo de inteligencia artificial para ofrecer sugerencias basadas en los datos que proporcionas. 
      <strong>NO sustituye el juicio de un profesional médico.</strong>
      Cualquier cambio en tu tratamiento debe ser consultado y supervisado por tu médico o equipo de atención diabetológica. Las recomendaciones son de carácter educativo.
    </p>
  </div>
);

export default Disclaimer;
