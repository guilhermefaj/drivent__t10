import { ApplicationError } from '@/protocols';

export function cepValidation(cep: string): ApplicationError {
  return {
    name: 'invalidCEP',
    message: `The CEP ${cep} is not valid`,
  };
}
