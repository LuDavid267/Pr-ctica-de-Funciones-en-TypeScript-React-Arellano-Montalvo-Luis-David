export const ObjectLiterals = () => {

  interface Person {
    firstName: string,
    lastName: string,
    age: number,
    address: Address;
  }

  interface Address {
    country: string,
    houseNo: string,
    street?: string; //El ? indica que es opcional
  }

  const person: Person = {
    firstName: 'Tom',
    lastName: 'Bond',
    age: 40,
    address: {
      country: 'England',
      houseNo: '612',
      street: 'Siempre Viva'
    }
  }

  return (
    <>
      <div>ObjectLiterals</div>
      <pre>
        {JSON.stringify(person, null, 2)}
      </pre>
    </>
  );
};