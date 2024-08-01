export class ValidationError{
  static isRequired(value: string) {
    if (value === "" || value === undefined || value === null ) {
      return this.errorMessage.isRequired
    }
    return '';
  };

  static isEmail(value: string) {
    if (value !== "" ) {
      if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) {
        return this.errorMessage.isEmail;
      }
    }
    return '';
  }

  static errorMessage = {
    isRequired: 'Este dato es requerido',
    isEmail: 'Ingrese un email válido'
  }
}

