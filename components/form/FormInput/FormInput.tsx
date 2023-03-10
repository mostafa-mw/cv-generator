import { FormError, FormLabel } from 'components/form';
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  [x: string]: any;
  type: string;
  id: string;
  label: string;
  error?: string;
  variablePropName?: string;
  variablePropValue?: string;
}

const FormInput: React.FC<Props> = ({
  type,
  id,
  label,
  error,
  require,
  variablePropName = 'aria-describedby',
  variablePropValue = `${id}_error`,
  ...props
}) => {
  const variableAttribute = { [variablePropName]: variablePropValue };
  const booleanError = Boolean(error);

  return (
    <div>
      <FormLabel id={id} label={label} require={require} />
      <input
        type={type}
        name={id}
        id={id}
        autoComplete="off"
        spellCheck="false"
        aria-required={require}
        className="mt-1 py-2 border-b-2 border-base-500 w-full outline-none focus:border-base-900"
        {...(booleanError ? variableAttribute : '')}
        {...props}
      />
      <FormError error={booleanError} id={id} errorMessage={error ? error : ''} />
    </div>
  );
};

export default FormInput;
