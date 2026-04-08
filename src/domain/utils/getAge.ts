export function getAge(dateOfBirth: Date | string): number {
  // Obtener dia, mes y año de nacimiento
  const birthDate = new Date(dateOfBirth);
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();

  // Obtener dia, mes y año actual
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  // Calcular edad actual
  let age = currentDate.getFullYear() - birthDate.getFullYear();

  // Verificar si ya se ha cumplido años
  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay - birthDay)
  ) {
    age--;
  }
  return age;
}
