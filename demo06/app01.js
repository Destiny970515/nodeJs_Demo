function getSomething() {
  return 'something'
}

async function testAsync() {
  return Promise.resolve('hellow async');
}
async function test() {
  const t1 = await getSomething();
  const t2 = await testAsync();
  console.log(t1, t2);
}
test();