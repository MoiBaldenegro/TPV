import { useState } from 'react';

export default function useValidation() {
  const [message, setMessage] = useState('');
  const [validate, setValidate] = useState('');

  function validationRegisterFirst(data: any, lastName: any /* type user */) {
    // IMPEDIR ENVIAR VACIOS
    if (!lastName.first?.length) {
      setValidate('Apellido paterno no puede estar vacio');
      return;
    }
    if (!lastName.second?.length) {
      setValidate('Apellido materno no puede estar vacio');
      return;
    }
    if (!data.name?.length) {
      setValidate('Nombre(s) no puede estar vacio');
      return;
    }
    if (!data.entryDate?.length) {
      setValidate('Asigna una fecha de ingreso');
      return;
    }
    if (!data.shift?.length) {
      setValidate('Se debe definir un turno antes de registrar');
      return;
    }

    // MAXIMOS NUMEROS DE CARACTERES
    if (lastName.first?.length > 35) {
      setValidate('Apellido paterno debe ser mayor a 35 caracteres');

      return;
    }
    if (lastName.second?.length > 35) {
      setValidate('Apellido materno no debe ser mayor a 35 caracteres');
      return;
    }
    if (data.name?.length > 35) {
      setValidate('Nombre(s) debe ser mayor a 35 caracteres');
      return;
    }
    /* validar la fecha no sea mayor a la de hoy */
    /* if (data.entryDate?.length) {
      setValidate('Asigna una fecha de ingreso');
      return;
    }    */

    setValidate('');
  }
  return { validationRegisterFirst, message, validate, setMessage };
}
