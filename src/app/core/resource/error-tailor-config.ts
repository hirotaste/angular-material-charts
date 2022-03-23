import { ErrorTailorConfig } from '@ngneat/error-tailor';

export const errorTailorConfig: ErrorTailorConfig = {
  blurPredicate(element) {
    return (
      element.tagName === 'INPUT' ||
      element.tagName === 'SELECT' ||
      element.tagName === 'NG-SELECT' ||
      element.tagName.startsWith('APP-INPUT-')
    );
  },
  errors: {
    useValue: {
      required: 'Campo obrigatório.',
      cnpj: 'CNPJ inválido.',
      cpf: 'CPF inválido.',
      email: 'Email inválido.',
      minlength: ({ requiredLength, actualLength }) => `Tamanho mínimo ${requiredLength}, atual ${actualLength}`,
      mask: 'Formato incorreto.',
      date: 'Data inválida.',
      max: 'Valor muito alto.',
      min: 'Valor muito baixo.'
    }
  }
};
