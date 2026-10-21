export const BasicTypes = () => {

  const name: string = 'David';
  const age: number = 20;
  const isStudent: boolean = true;

  const superheroes: string[] = ['Superman', 'Flash', 'Green Lantern'];

  return (
    <>
      <h3>Tipos Básicos</h3>
      {name} - {age} - {isStudent ? 'Es estudiante' : 'No es estudiante'}

      <p>{superheroes.join(', ')}</p>
    </>
  );
};