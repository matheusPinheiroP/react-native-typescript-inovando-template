import * as Yup from 'yup';

export function setupYup(): typeof Yup {
  Yup.setLocale({
    string: {
      email: 'E-mail inválido',
    },
    mixed: {
      required: 'Campo obrigatório',
    },
  });

  return Yup;
}
