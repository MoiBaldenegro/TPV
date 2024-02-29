import { useState } from 'react';

export default function useValidation() {
  const [message, setMessage] = useState('');
  const [validate, setValidate] = useState('');

  function validationRegisterFirst(data: any, lastName: any /* type user */) {
    const soloLetras = /^[a-zA-Z]+$/;

    // IMPEDIR ENVIAR VACIOS Y VERIFICAR SOLO LETRAS - Apellido paterno
    if (!lastName.first?.length) {
      setValidate('Apellido paterno no puede estar vacío');
      return;
    }

    if (!soloLetras.test(lastName.first)) {
      setValidate('Apellido paterno debe contener solo letras');
      return;
    }

    // IMPEDIR ENVIAR VACIOS Y VERIFICAR SOLO LETRAS - Apellido materno
    if (!lastName.second?.length) {
      setValidate('Apellido materno no puede estar vacío');
      return;
    }

    if (!soloLetras.test(lastName.second)) {
      setValidate('Apellido materno debe contener solo letras');
      return;
    }

    // IMPEDIR ENVIAR VACIOS Y VERIFICAR SOLO LETRAS - Nombre(s)
    if (!data.name?.length) {
      setValidate('Nombre(s) no puede estar vacío');
      return;
    }

    if (!soloLetras.test(data.name)) {
      setValidate('Nombre(s) debe contener solo letras');
      return;
    }

    // VERIFICAR QUE LA FECHA Y EL TURNO ESTÉN PRESENTES
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
      setValidate('Apellido paterno debe ser menor a 35 caracteres');
      return;
    }

    if (lastName.second?.length > 35) {
      setValidate('Apellido materno no debe ser menor a 35 caracteres');
      return;
    }

    if (data.name?.length > 35) {
      setValidate('Nombre(s) debe ser menor a 35 caracteres');
      return;
    }

    setValidate('');
  }

  return { validationRegisterFirst, message, validate, setMessage };
}
