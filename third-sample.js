// important because of kno-5678 (but shouldn't come up in a PR check)
function exampleFunction() {
  console.log('Hello world');
  const tempValue = 'temporary implementation';
  return tempValue;
}
