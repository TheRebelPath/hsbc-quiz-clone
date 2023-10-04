import React from "react";

const Footer = () => {
  return (
    <div className="flex bg-black  w-full bottom-0 left-0">
      <div className="flex text-white m-auto px-12 py-1 sm:p-5 sm:max-w-[1200px] text-center text-sm">
        <p className="hidden sm:block">
          Tips de Seguridad Términos y condiciones Aviso de privacidad Buró de
          entidades financieras Programa Gremial de Educación Financiera
        </p>
        <p className="sm:px-5">
          © HSBC México 2023. Todos los Derechos Reservados Derechos ARCO
          Agencias y despachos de Cobranza Consulta los Costos y las Comisiones
          de nuestros productos Este sitio está diseñado para su uso en México.
          Aviso Fronterizo.
        </p>
      </div>
    </div>
  );
};

export default Footer;
